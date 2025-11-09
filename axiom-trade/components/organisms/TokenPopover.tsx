import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import { Token } from '@/hooks/useTokens'

interface TokenPopoverProps {
  token: Token
  children: React.ReactNode
}

export const TokenPopover: React.FC<TokenPopoverProps> = ({ token, children }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="bg-[#1a1d24] border border-gray-700 rounded-lg p-4 shadow-lg w-64">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <div>
                <div className="font-medium">{token.pair}</div>
                <div className="text-sm text-gray-400">{token.price}</div>
              </div>
            </div>
            <div className="text-sm">
              <div>Market Cap: {token.marketCap}</div>
              <div>Volume: {token.volume24h}</div>
              <div>Transactions: {token.transactions}</div>
              <div>Holders: {token.holders}</div>
            </div>
            <button className="text-blue-500 text-sm">View on Explorer</button>
          </div>
          <Popover.Arrow className="fill-[#1a1d24]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
