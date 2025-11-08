import React from 'react'
import Button from '../atoms/Button'

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border bg-card px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold">Axiom</span>
        <span className="text-sm text-muted-foreground">Trade</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost">Login</Button>
        <Button>Sign up</Button>
      </div>
    </header>
  )
}

export default Header
