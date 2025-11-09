import React, { useState } from 'react'
import Image from 'next/image'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignUp: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#0a0c10] p-6 rounded-lg w-full max-w-sm mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
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
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1a1d24] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-500 hover:text-blue-400 text-sm">Forgot password?</a>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
            Login
          </button>

          <div className="text-center text-gray-400">OR</div>

          <button className="w-full bg-white text-black font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2">
            <Image src="/google-logo.svg" alt="Google" width={20} height={20} />
            Continue with Google
          </button>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2">
            <Image src="/phantom-logo.svg" alt="Phantom" width={20} height={20} />
            Connect with Phantom
          </button>

          <div className="text-center text-sm">
            Don't have an account? <button onClick={onSwitchToSignUp} className="text-blue-500 hover:text-blue-400">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
