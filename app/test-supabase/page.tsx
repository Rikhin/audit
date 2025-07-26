'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../../src/lib/supabase/client';

export default function TestSupabase() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [entries, setEntries] = useState<any[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setMessage('');
    
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ email }])
        .select();
      
      if (error) throw error;
      
      setMessage('Successfully added to waitlist!');
      setEmail('');
      fetchWaitlist();
    } catch (error: any) {
      console.error('Error:', error);
      setMessage(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWaitlist = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setEntries(data || []);
    } catch (error) {
      console.error('Error fetching waitlist:', error);
    }
  };

  useEffect(() => {
    fetchWaitlist();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Test Supabase Connection</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Add to Waitlist</h2>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add'}
            </button>
          </form>
          {message && (
            <p className={`mt-2 ${message.includes('error') ? 'text-red-400' : 'text-green-400'}`}>
              {message}
            </p>
          )}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Waitlist Entries</h2>
          {entries.length === 0 ? (
            <p className="text-gray-400">No entries yet</p>
          ) : (
            <ul className="space-y-2">
              {entries.map((entry) => (
                <li key={entry.id} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span>{entry.email}</span>
                  <span className="text-sm text-gray-400">
                    {new Date(entry.created_at).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
