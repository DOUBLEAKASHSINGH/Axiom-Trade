import React, { useState } from 'react'
import Image from 'next/image'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState('')
  const [inviteCode, setInviteCode] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#0a0c10] p-6 rounded-lg w-full max-w-sm mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">×</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1a1d24] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Invite code (optional)</label>
            <input
              type="text"
              placeholder="Enter invite code"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              className="w-full bg-[#1a1d24] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
            Sign Up
          </button>

          <div className="text-center text-gray-400">Or Sign Up</div>

          <button className="w-full bg-white text-black font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2">
            <Image src="/google-logo.svg" alt="Google" width={20} height={20} />
            Continue with Google
          </button>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2">
            <Image src="/phantom-logo.svg" alt="Phantom" width={20} height={20} />
            Connect with Phantom
          </button>

          <div className="text-center text-sm">
            Already have an account? <button onClick={onSwitchToLogin} className="text-blue-500 hover:text-blue-400">Login</button>
          </div>

          <div className="text-center text-xs text-gray-400 mt-4">
            By creating an account, you agree to Axiom's Privacy Policy and Terms of Service
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpModal
