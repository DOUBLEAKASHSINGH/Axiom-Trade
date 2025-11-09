import { NextResponse } from 'next/server'

const PERPETUALS_DATA = [
  { pair: 'BTC-PERP', price: '$42,500', change24: '+2.1%', liquidity: '$2,500,000', status: 'New', marketCap: '$820B', volume24h: '$2.5B', transactions: 45678, holders: 89012 },
  { pair: 'ETH-PERP', price: '$3,150', change24: '-0.8%', liquidity: '$1,200,000', status: 'Final Stretch', marketCap: '$370B', volume24h: '$1.2B', transactions: 34567, holders: 67890 },
  { pair: 'AXM-PERP', price: '$0.45', change24: '+5.2%', liquidity: '$150,000', status: 'Migrated', marketCap: '$42M', volume24h: '$15K', transactions: 1234, holders: 567 },
  { pair: 'USDT-PERP', price: '$1.01', change24: '+0.1%', liquidity: '$800,000', status: 'New', marketCap: '$83B', volume24h: '$50B', transactions: 123456, holders: 234567 },
]

export async function GET() {
  // simulate small delay
  await new Promise((res) => setTimeout(res, 300))
  return NextResponse.json(PERPETUALS_DATA)
}
