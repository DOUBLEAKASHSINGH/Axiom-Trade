'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import Skeleton from '@/components/atoms/Skeleton'
import { useTokens } from '@/hooks/useTokens'
import { usePerpetuals } from '@/hooks/usePerpetuals'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LineChart, Line } from 'recharts'

export const TokenTable: React.FC = () => {
  const { data: spotData, isLoading: spotLoading, isError: spotError, error: spotErrorData } = useTokens()
  const { data: perpData, isLoading: perpLoading, isError: perpError, error: perpErrorData } = usePerpetuals()
  const [revealed, setRevealed] = useState(0)
  const [activeTab, setActiveTab] = useState<'spot' | 'perpetuals'>('spot')
  const [searchQuery, setSearchQuery] = useState('')

  const data = activeTab === 'spot' ? spotData : perpData
  const isLoading = activeTab === 'spot' ? spotLoading : perpLoading
  const isError = activeTab === 'spot' ? spotError : perpError
  const error = activeTab === 'spot' ? spotErrorData : perpErrorData

  const filteredData = useMemo(() => {
    if (!data) return []
    if (!searchQuery) return data
    return data.filter((row) =>
      row.pair.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [data, searchQuery])

  useEffect(() => {
    if (filteredData && filteredData.length) {
      filteredData.forEach((_, i) => {
        setTimeout(() => setRevealed((r) => Math.max(r, i + 1)), 300 + i * 200)
      })
    }
  }, [filteredData])

  const mockChartData = new Array(20).fill(null).map((_, i) => ({
    value: Math.random() * 100
  }))

  return (
    <ErrorBoundary>
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              className={`px-4 py-2 rounded font-medium ${activeTab === 'spot' ? 'text-white bg-[#1a1d24]' : 'text-gray-500 bg-transparent'}`}
              onClick={() => setActiveTab('spot')}
            >
              Spot
            </button>
            <button
              className={`px-4 py-2 rounded font-medium ${activeTab === 'perpetuals' ? 'text-white bg-[#1a1d24]' : 'text-gray-500 bg-transparent'}`}
              onClick={() => setActiveTab('perpetuals')}
            >
              Perpetuals
            </button>
          </div>
          <input
            type="text"
            placeholder="Search for other tokens..."
            className="bg-[#1a1d24] text-gray-400 px-4 py-2 rounded-lg w-64 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="bg-[#1a1d24] p-6 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">Your Balance</div>
            <div className="text-2xl font-semibold mb-2">$121.42</div>
            <div className="text-green-500">+$10.78</div>
          </div>

          <div className="bg-[#1a1d24] p-6 rounded-lg col-span-2">
            <div className="text-sm text-gray-400 mb-1">PNL</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold mb-2">$105.41</div>
                <div className="text-gray-400">Available Balance</div>
              </div>
              <div className="w-32 h-16">
                <LineChart width={128} height={64} data={mockChartData}>
                  <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
                </LineChart>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1d24] rounded-lg">
          <div className="px-6 py-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">Active Positions</div>
              <div className="text-sm text-gray-400">
                <button className="px-3 py-1 rounded bg-[#2a2d34]">History</button>
              </div>
            </div>
          </div>
          <table className="w-full">
            <thead className="text-sm text-gray-400 border-b border-gray-800">
              <tr>
                <th className="text-left py-4 px-6">Token</th>
                <th className="text-left py-4 px-6">Amount</th>
                <th className="text-left py-4 px-6">Total Value</th>
                <th className="text-left py-4 px-6">Return</th>
                <th className="text-center py-4 px-6">Trader</th>
                <th className="text-right py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {(isLoading ? new Array(5).fill(null) : filteredData ?? []).map((row, idx) => {
                const isLoadingRow = isLoading || idx >= revealed
                return (
                  <tr key={idx} className="hover:bg-[#2a2d34] transition-colors">
                    <td className="py-4 px-6">
                      {isLoadingRow ? (
                        <Skeleton width={120} height={24} />
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                          <div>
                            <div className="font-medium">{row.pair}</div>
                            <div className="text-sm text-gray-400">{row.pair.split(' / ')[0] || row.pair.split('-')[0]}</div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {isLoadingRow ? <Skeleton width={80} height={24} /> : row.price}
                    </td>
                    <td className="py-4 px-6">
                      {isLoadingRow ? <Skeleton width={80} height={24} /> : row.liquidity}
                    </td>
                    <td className="py-4 px-6">
                      {isLoadingRow ? (
                        <Skeleton width={80} height={24} />
                      ) : (
                        <span className={row.change24.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{row.change24}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {isLoadingRow ? (
                        <Skeleton width={32} height={32} className="mx-auto rounded-full" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-700 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-right">
                      {isLoadingRow ? (
                        <Skeleton width={60} height={24} className="ml-auto" />
                      ) : (
                        <button className="text-sm text-blue-500">Details</button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default TokenTable
