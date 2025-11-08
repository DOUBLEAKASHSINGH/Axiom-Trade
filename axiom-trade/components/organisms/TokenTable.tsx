import React, { useEffect, useState } from 'react'
import Skeleton from '@/components/atoms/Skeleton'
import { useTokens } from '@/hooks/useTokens'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const TokenTable: React.FC = () => {
  const { data, isLoading, isError, error } = useTokens()
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    if (data && data.length) {
      // progressive reveal
      data.forEach((_, i) => {
        setTimeout(() => setRevealed((r) => Math.max(r, i + 1)), 300 + i * 200)
      })
    }
  }, [data])

  return (
    <ErrorBoundary>
      <section className="w-full max-w-5xl">
        <h2 className="mb-4 text-lg font-semibold">Token Pairs</h2>
        <div className="overflow-hidden rounded-lg border bg-card">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-sm text-muted-foreground">
                <th className="px-4 py-3 text-left">Pair</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">24h</th>
                <th className="px-4 py-3 text-left">Liquidity</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {(isLoading ? new Array(5).fill(null) : data ?? []).map((row, idx) => {
                const isLoadingRow = isLoading || idx >= revealed
                const key = isLoading ? `skeleton-${idx}` : `${row?.pair}-${idx}`
                return (
                  <tr key={key} className={`border-t last:border-b ${isLoadingRow ? 'opacity-90' : 'transition-opacity duration-300'}`}>
                    <td className="px-4 py-3">
                      {isLoadingRow ? (
                        <Skeleton width={160} height={18} />
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent" />
                          <div>
                            <div className="font-medium">{row!.pair}</div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {isLoadingRow ? <Skeleton width={80} height={18} /> : <div>{row!.price}</div>}
                    </td>
                    <td className="px-4 py-3">
                      {isLoadingRow ? <Skeleton width={60} height={18} /> : <div className={`${row!.change24.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{row!.change24}</div>}
                    </td>
                    <td className="px-4 py-3">
                      {isLoadingRow ? <Skeleton width={100} height={18} /> : <div>{row!.liquidity}</div>}
                    </td>
                    <td className="px-4 py-3">
                      {isLoadingRow ? (
                        <Skeleton width={90} height={28} />
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-muted/10 px-3 py-1 text-sm font-medium text-muted-foreground">
                          {row!.status}
                        </span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {isError && (
          <div className="p-4 text-sm text-destructive-foreground">Error loading tokens: {error?.message}</div>
        )}
      </section>
    </ErrorBoundary>
  )
}

export default TokenTable
