'use client'

import { Box, IconButton } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { useColorMode } from '@/components/ui/color-mode'

const MotionBox = motion.create(Box)

export function ThemeToggle() {
  const { colorMode, toggleColorMode, mounted } = useColorMode()

  if (!mounted) {
    return (
      <IconButton
        aria-label="Toggle color mode"
        variant="ghost"
        size="md"
        opacity={0}
      >
        <IoMoon />
      </IconButton>
    )
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionBox
        key={colorMode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          aria-label={colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
          color={colorMode === 'dark' ? 'yellow.300' : 'orange.500'}
          _hover={{
            bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.100',
          }}
        >
          {colorMode === 'dark' ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </IconButton>
      </MotionBox>
    </AnimatePresence>
  )
}
