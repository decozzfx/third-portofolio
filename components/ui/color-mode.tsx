'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useColorMode() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const colorMode = mounted ? (resolvedTheme as 'light' | 'dark') : 'dark'
  const toggleColorMode = () => setTheme(colorMode === 'dark' ? 'light' : 'dark')

  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
    mounted,
  }
}

export function useColorModeValue<T>(lightValue: T, darkValue: T): T {
  const { colorMode, mounted } = useColorMode()

  if (!mounted) {
    return darkValue // Default to dark during SSR
  }

  return colorMode === 'dark' ? darkValue : lightValue
}
