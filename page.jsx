// app/page.jsx (simplified)
'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Home() {
  const [email, setEmail] = useState('')
  async function signIn() {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) alert(error.message); else alert('Check your email for a login link')
  }
  return (
    <main className="p-8">
      <h1 className="text-2xl">VScan Dashboard</h1>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" />
      <button onClick={signIn}>Sign in</button>
    </main>
  )
}
