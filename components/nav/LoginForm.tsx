"use client";

import { createBrowserClient } from '@supabase/ssr'
import React from 'react'
import { Button } from '../ui/button'
import { SiGithub } from 'react-icons/si'
import { useParams } from 'next/navigation';

export default function LoginForm() {

    const pathname = useParams()

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleLogin = () => {
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: location.origin + "/auth/callback?next" + pathname
            }
        })
    }

    return (
        <Button onClick={handleLogin} className='flex items-center gap-2' variant={'outline'}><SiGithub />Login</Button>
    )
}

