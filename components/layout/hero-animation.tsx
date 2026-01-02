'use client'

import { Box, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion.create(Box)

export function HeroAnimation() {
  const bgColor = useColorModeValue('#E5E5E5', '#262626')
  const accentColor = '#FF3D00'

  return (
    <Flex
      position="relative"
      width="100%"
      height={{ base: '200px', md: '280px' }}
      align="center"
      justify="center"
      overflow="hidden"
      mb={8}
    >
      {/* Grid background */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.5}
        backgroundImage={`
          linear-gradient(${bgColor} 1px, transparent 1px),
          linear-gradient(90deg, ${bgColor} 1px, transparent 1px)
        `}
        backgroundSize="40px 40px"
      />

      {/* Animated geometric shapes */}
      <Box position="relative" width="200px" height="200px">
        {/* Main rotating square */}
        <MotionBox
          position="absolute"
          top="50%"
          left="50%"
          width="120px"
          height="120px"
          border="3px solid"
          borderColor={accentColor}
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ x: '-50%', y: '-50%' }}
        />

        {/* Inner pulsing square */}
        <MotionBox
          position="absolute"
          top="50%"
          left="50%"
          width="80px"
          height="80px"
          bg={accentColor}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ x: '-50%', y: '-50%' }}
        />

        {/* Outer rotating frame */}
        <MotionBox
          position="absolute"
          top="50%"
          left="50%"
          width="160px"
          height="160px"
          border="1px solid"
          borderColor={bgColor}
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ x: '-50%', y: '-50%' }}
        />

        {/* Corner accents */}
        {[0, 1, 2, 3].map((i) => (
          <MotionBox
            key={i}
            position="absolute"
            width="12px"
            height="12px"
            bg={accentColor}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            style={{
              top: i < 2 ? '10px' : 'auto',
              bottom: i >= 2 ? '10px' : 'auto',
              left: i % 2 === 0 ? '10px' : 'auto',
              right: i % 2 === 1 ? '10px' : 'auto',
            }}
          />
        ))}

        {/* Center dot */}
        <MotionBox
          position="absolute"
          top="50%"
          left="50%"
          width="8px"
          height="8px"
          borderRadius="full"
          bg="white"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ x: '-50%', y: '-50%' }}
        />
      </Box>
    </Flex>
  )
}
