import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '../atoms/Button'

interface NavBarProps {
  className?: string
  onLoginClick: () => void
  onSignUpClick: () => void
}

export const NavBar: React.FC<NavBarProps> = ({ className, onLoginClick, onSignUpClick }) => {
  return (
    <nav className={cn("fixed top-0 w-full px-6 py-4 flex items-center justify-between bg-[#040507]/95 backdrop-blur supports-[backdrop-filter]:bg-[#040507]/60 z-50 animate-fade-in", className)}>
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/axiom-logo.svg" alt="Axiom Logo" width={32} height={32} />
          <span className="font-semibold text-white">AXIOM Pro</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white px-4 py-2 rounded" onClick={onLoginClick}>
          Login
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={onSignUpClick}>
          Sign up
        </button>
      </div>
    </nav>
  )
}

export default NavBar
