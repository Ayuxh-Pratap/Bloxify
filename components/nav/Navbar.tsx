"use client"

import Link from 'next/link'
import React from 'react'
import LoginForm from './LoginForm';
import { useUser } from '@/lib/store/user';

export default function Navbar() {
  const user = useUser((state) => state.user)

  return (
    <nav className='flex items-center justify-between'>
        <div className='group'>
        <Link href="/" className='text-2xl font-bold'>Bloxify.co</Link>
        <div className='h-[2px] w-0 rounded-sm group-hover:w-full transition-all bg-green-500'></div>
        </div>
        {user ? <h1>profile</h1> : <LoginForm />}
    </nav>
  )
}
