import { useQuery } from '@tanstack/react-query'

export type Perpetual = {
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

async function fetchPerpetuals(): Promise<Perpetual[]> {
  const res = await fetch('/api/perpetuals')
  if (!res.ok) throw new Error('Failed to fetch perpetuals')
  return res.json()
}

export function usePerpetuals() {
  return useQuery<Perpetual[], Error>({
    queryKey: ['perpetuals'],
    queryFn: fetchPerpetuals,
    staleTime: 10_000,
  })
}

export default usePerpetuals
