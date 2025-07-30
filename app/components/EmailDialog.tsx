'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

interface EmailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  recipientEmail?: string;
  displayEmail?: string;
  subject?: string;
  defaultEmail?: string;
}

const EmailDialog: React.FC<EmailDialogProps> = ({
  isOpen,
  onClose,
  recipientEmail = 'rikhinkavuru@icloud.com',
  displayEmail = 'help@audit.com',
  subject = 'Inquiry about Audit Tool',
  defaultEmail = '',
}) => {
  const { user } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState(defaultEmail);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      setEmail(user.primaryEmailAddress.emailAddress);
    }
  }, [user]);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    try {
      // In a real implementation, this would use Composio's Gmail integration
      // For now, we'll simulate the email sending with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful sending
      setIsSent(true);
      setIsSending(false);
      
      // Reset form after 3 seconds and close dialog
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSent(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError('Failed to send email. Please try again.');
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-charcoal-900 rounded-xl p-8 max-w-md w-full border border-electric/20 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          disabled={isSending}
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
          <p className="text-gray-300">
            Send an email to <span className="text-electric">{displayEmail}</span>
          </p>
        </div>

        {isSent ? (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/10 mb-6">
              <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
            <p className="text-gray-300">We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-charcoal-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric text-white"
                  required
                  disabled={isSending || !!user?.primaryEmailAddress?.emailAddress}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-charcoal-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric text-white"
                  required
                  disabled={isSending}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  defaultValue={subject}
                  className="w-full px-4 py-2 bg-charcoal-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric text-white"
                  disabled
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 bg-charcoal-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric text-white resize-none"
                  required
                  disabled={isSending}
                ></textarea>
              </div>
              
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 px-6 bg-gradient-to-r from-electric to-blue-500 text-charcoal font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailDialog;