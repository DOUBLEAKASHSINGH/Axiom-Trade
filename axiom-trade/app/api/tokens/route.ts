import { NextResponse } from 'next/server'

const DATA = [
  { pair: 'AXM / USDC', price: '$0.42', change24: '+3.2%', liquidity: '$120,000', status: 'New', marketCap: '$42M', volume24h: '$15K', transactions: 1234, holders: 567 },
  { pair: 'BTC / AXM', price: '$42,000', change24: '-1.1%', liquidity: '$1,200,000', status: 'Final Stretch', marketCap: '$820B', volume24h: '$2.5B', transactions: 45678, holders: 89012 },
  { pair: 'ETH / AXM', price: '$3,100', change24: '+0.7%', liquidity: '$980,000', status: 'Migrated', marketCap: '$370B', volume24h: '$1.2B', transactions: 34567, holders: 67890 },
  { pair: 'USDT / AXM', price: '$1.00', change24: '+0.0%', liquidity: '$500,000', status: 'New', marketCap: '$83B', volume24h: '$50B', transactions: 123456, holders: 234567 },
]

export async function GET() {
  // simulate small delay
  await new Promise((res) => setTimeout(res, 300))
  return NextResponse.json(DATA)
}
