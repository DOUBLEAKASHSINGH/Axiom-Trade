import { useQuery } from '@tanstack/react-query'

export type Token = {
  pair: string
  price: string
  change24: string
  liquidity: string
  status: 'New' | 'Final Stretch' | 'Migrated'
  marketCap: string
  volume24h: string
  transactions: number
  holders: number
}

async function fetchTokens(): Promise<Token[]> {
  const res = await fetch('/api/tokens')
  if (!res.ok) throw new Error('Failed to fetch tokens')
  return res.json()
}

export function useTokens() {
  return useQuery<Token[], Error>({
    queryKey: ['tokens'],
    queryFn: fetchTokens,
    staleTime: 10_000,
  })
}

export default useTokens
