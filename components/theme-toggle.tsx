"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <Button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <label className="size-4 text-orange-300" />
            ) : (<label className="size-4 text-blue-950" />)
            }
        </Button>
    )
}