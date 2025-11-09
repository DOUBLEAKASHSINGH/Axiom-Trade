import { NextResponse } from 'next/server'

const PERPETUALS_DATA = [
  { pair: 'BTC-PERP', price: '$42,500', change24: '+2.1%', liquidity: '$2,500,000', status: 'New' },
  { pair: 'ETH-PERP', price: '$3,150', change24: '-0.8%', liquidity: '$1,200,000', status: 'Final Stretch' },
  { pair: 'AXM-PERP', price: '$0.45', change24: '+5.2%', liquidity: '$150,000', status: 'Migrated' },
  { pair: 'USDT-PERP', price: '$1.01', change24: '+0.1%', liquidity: '$800,000', status: 'New' },
]

export async function GET() {
  // simulate small delay
  await new Promise((res) => setTimeout(res, 300))
  return NextResponse.json(PERPETUALS_DATA)
}
