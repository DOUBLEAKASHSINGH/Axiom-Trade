import { NextResponse } from 'next/server'

const DATA = [
  { pair: 'AXM / USDC', price: '$0.42', change24: '+3.2%', liquidity: '$120,000', status: 'New' },
  { pair: 'BTC / AXM', price: '$42,000', change24: '-1.1%', liquidity: '$1,200,000', status: 'Final Stretch' },
  { pair: 'ETH / AXM', price: '$3,100', change24: '+0.7%', liquidity: '$980,000', status: 'Migrated' },
  { pair: 'USDT / AXM', price: '$1.00', change24: '+0.0%', liquidity: '$500,000', status: 'New' },
]

export async function GET() {
  // simulate small delay
  await new Promise((res) => setTimeout(res, 300))
  return NextResponse.json(DATA)
}
