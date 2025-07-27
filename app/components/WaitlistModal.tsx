'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { addToWaitlist, isEmailInWaitlist } from '../../src/lib/supabase/waitlist'

export function WaitlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage({ text: 'Please enter your email', isError: true })
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage({ text: 'Please enter a valid email', isError: true })
      return
    }

    console.log('Starting form submission for email:', email)
    setIsLoading(true)
    setMessage(null)

    try {
      console.log('Checking if email exists in waitlist...')
      const alreadyExists = await isEmailInWaitlist(email)
      
      if (alreadyExists) {
        console.log('Email already exists in waitlist')
        setMessage({ text: 'This email is already on the waitlist!', isError: false })
        setTimeout(onClose, 2000)
        return
      }

      console.log('Email not found in waitlist, proceeding to add...')
      await addToWaitlist(email)
      console.log('Successfully added to waitlist')
      
      setMessage({ 
        text: 'Thanks for joining the waitlist! We\'ll be in touch soon.', 
        isError: false 
      })
      setEmail('')
      setTimeout(onClose, 2000)
    } catch (error: any) {
      console.error('Error in handleSubmit:', error)
      const errorMessage = error?.message || 'An unknown error occurred'
      
      setMessage({ 
        text: `Something went wrong: ${errorMessage}`, 
        isError: true 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 p-6 w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          disabled={isLoading}
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-white mb-4">Join Our Waitlist</h3>
        <p className="text-gray-300 mb-6">
          Be the first to know when we launch. No spam, ever.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-electric focus:border-transparent"
                placeholder="your@email.com"
                disabled={isLoading}
              />
            </div>
            
            {message && (
              <p className={`text-sm ${message.isError ? 'text-red-400' : 'text-green-400'}`}>
                {message.text}
              </p>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-electric to-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
