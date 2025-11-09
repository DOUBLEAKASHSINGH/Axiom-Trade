import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Token } from '@/hooks/useTokens'
import { LineChart, Line } from 'recharts'

interface TokenModalProps {
  token: Token | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const TokenModal: React.FC<TokenModalProps> = ({ token, open, onOpenChange }) => {
  if (!token) return null

  const mockChartData = new Array(20).fill(null).map((_, i) => ({
    value: Math.random() * 100
  }))

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1d24] rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{token.pair}</h2>
            <Dialog.Close className="text-gray-400 hover:text-white">
              <X size={24} />
            </Dialog.Close>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400">Price</div>
                <div className="text-lg font-medium">{token.price}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Market Cap</div>
                <div className="text-lg font-medium">{token.marketCap}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Liquidity</div>
                <div className="text-lg font-medium">{token.liquidity}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">24h Change</div>
                <div className={`text-lg font-medium ${token.change24.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {token.change24}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Price Chart</h3>
              <div className="w-full h-64">
                <LineChart width={600} height={256} data={mockChartData}>
                  <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
                </LineChart>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Buy</button>
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Sell</button>
              <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">Track</button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
