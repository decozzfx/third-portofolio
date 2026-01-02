'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import { motion, MotionProps } from 'framer-motion'

interface SectionProps extends Omit<BoxProps, keyof MotionProps> {
  delay?: number
  children: React.ReactNode
}

export function Section({ delay = 0, children, ...props }: SectionProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
    >
      <Box mb={8} {...props}>
        {children}
      </Box>
    </motion.div>
  )
}
