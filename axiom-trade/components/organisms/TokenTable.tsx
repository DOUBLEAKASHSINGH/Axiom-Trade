'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '@/components/atoms/Skeleton'
import { useTokens } from '@/hooks/useTokens'
import { usePerpetuals } from '@/hooks/usePerpetuals'
import { useWebSocketMock } from '@/hooks/useWebSocketMock'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { TokenPopover } from './TokenPopover'
import { TokenModal } from './TokenModal'
import { Tooltip } from './Tooltip'
import { setSort, openModal, closeModal } from '@/store/slices/tableSlice'
import { RootState } from '@/store'

export const TokenTable: React.FC = () => {
  const dispatch = useDispatch()
  const { sort, modalOpen, selectedToken } = useSelector((state: RootState) => state.table)
  const { data: spotData, isLoading: spotLoading, isError: spotError } = useTokens()
  const { data: perpData, isLoading: perpLoading, isError: perpError } = usePerpetuals()
  const [revealed, setRevealed] = useState(0)
  const [activeTab, setActiveTab] = useState<'New Pairs' | 'Final Stretch' | 'Migrated'>('New Pairs')
  const [searchQuery, setSearchQuery] = useState('')

  const data = spotData?.filter(token => token.status === activeTab) || perpData?.filter(token => token.status === activeTab) || []
  const isLoading = spotLoading || perpLoading
  const isError = spotError || perpError

  const sortedData = useMemo(() => {
    if (!data) return []
    if (!sort.column || !sort.direction) return data
    return [...data].sort((a, b) => {
      const aVal = a[sort.column as keyof typeof a]
      const bVal = b[sort.column as keyof typeof b]
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sort.direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
      }
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sort.direction === 'asc' ? aVal - bVal : bVal - aVal
      }
      return 0
    })
  }, [data, sort])

  const filteredData = useMemo(() => {
    if (!sortedData) return []
    if (!searchQuery) return sortedData
    return sortedData.filter((row) =>
      row.pair.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [sortedData, searchQuery])

  useEffect(() => {
    if (filteredData && filteredData.length) {
      filteredData.forEach((_, i) => {
        setTimeout(() => setRevealed((r) => Math.max(r, i + 1)), 300 + i * 200)
      })
    }
  }, [filteredData])

  useWebSocketMock(true) // Enable real-time mock

  const handleSort = (column: string) => {
    const direction = sort.column === column && sort.direction === 'asc' ? 'desc' : 'asc'
    dispatch(setSort({ column, direction }))
  }

  const handleRowClick = (token: any) => {
    dispatch(openModal(token))
  }

  const SortIcon = ({ column }: { column: string }) => {
    if (sort.column !== column) return null
    return <span className="ml-1">{sort.direction === 'asc' ? '↑' : '↓'}</span>
  }

  return (
    <ErrorBoundary>
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {(['New Pairs', 'Final Stretch', 'Migrated'] as const).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded font-medium ${activeTab === tab ? 'text-white bg-[#1a1d24]' : 'text-gray-500 bg-transparent'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} ({data.filter(d => d.status === tab).length})
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search for tokens..."
            className="bg-[#1a1d24] text-gray-400 px-4 py-2 rounded-lg w-64 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="bg-[#1a1d24] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="text-sm text-gray-400 border-b border-gray-800">
              <tr>
                <th className="text-left py-4 px-6 cursor-pointer" onClick={() => handleSort('pair')}>
                  Token <SortIcon column="pair" />
                </th>
                <th className="text-left py-4 px-6 cursor-pointer" onClick={() => handleSort('marketCap')}>
                  Market Cap <SortIcon column="marketCap" />
                </th>
                <th className="text-left py-4 px-6 cursor-pointer" onClick={() => handleSort('liquidity')}>
                  Liquidity <SortIcon column="liquidity" />
                </th>
                <th className="text-left py-4 px-6 cursor-pointer" onClick={() => handleSort('volume24h')}>
                  24h Vol <SortIcon column="volume24h" />
                </th>
                <th className="text-left py-4 px-6 cursor-pointer" onClick={() => handleSort('transactions')}>
                  Txns <SortIcon column="transactions" />
                </th>
                <th className="text-left py-4 px-6 cursor-pointer" onClick={() => handleSort('holders')}>
                  Holders <SortIcon column="holders" />
                </th>
                <th className="text-right py-4 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {(isLoading ? new Array(5).fill(null) : filteredData ?? []).map((row, idx) => {
                const isLoadingRow = isLoading || idx >= revealed
                return (
                  <tr
                    key={idx}
                    className="hover:bg-[#2a2d34] transition-colors cursor-pointer"
                    onClick={() => !isLoadingRow && handleRowClick(row)}
                  >
                    <td className="py-4 px-6">
                      {isLoadingRow ? (
                        <Skeleton width={120} height={24} />
                      ) : (
                        <TokenPopover token={row}>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                            <div>
                              <div className="font-medium">{row.pair}</div>
                              <div className="text-sm text-gray-400 flex items-center gap-2">
                                {row.pair.split(' / ')[0] || row.pair.split('-')[0]}
                                <span className={`px-2 py-1 rounded text-xs ${row.status === 'New' ? 'bg-blue-500' : row.status === 'Final Stretch' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                                  {row.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </TokenPopover>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {isLoadingRow ? <Skeleton width={80} height={24} /> : row.marketCap}
                    </td>
                    <td className="py-4 px-6">
                      {isLoadingRow ? <Skeleton width={80} height={24} /> : row.liquidity}
                    </td>
                    <td className="py-4 px-6">
                      {isLoadingRow ? <Skeleton width={80} height={24} /> : row.volume24h}
                    </td>
                    <td className="py-4 px-6">
                      {isLoadingRow ? <Skeleton width={80} height={24} /> : row.transactions.toLocaleString()}
                    </td>
                    <td className="py-4 px-6">
                      {isLoadingRow ? <Skeleton width={80} height={24} /> : row.holders.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-right">
                      {isLoadingRow ? (
                        <Skeleton width={60} height={24} className="ml-auto" />
                      ) : (
                        <Tooltip content="View details">
                          <button className="text-sm text-blue-500">Details</button>
                        </Tooltip>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <TokenModal token={selectedToken} open={modalOpen} onOpenChange={(open) => !open && dispatch(closeModal())} />
      </div>
    </ErrorBoundary>
  )
}

export default TokenTable
