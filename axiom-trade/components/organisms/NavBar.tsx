import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const NavBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={cn("w-full px-6 py-3 flex items-center gap-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <Link href="/" className="text-sm font-medium hover:text-primary">
        Home
      </Link>
      <Link href="/markets" className="text-sm text-muted-foreground hover:text-primary">
        Markets
      </Link>
      <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary">
        Docs
      </Link>
    </nav>
  )
}

export default NavBar
