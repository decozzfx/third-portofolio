'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import { useColorModeValue } from '@/components/ui/color-mode'

interface BioYearProps {
  children: React.ReactNode
}

export function BioYear({ children }: BioYearProps) {
  return (
    <Text
      as="span"
      fontFamily="mono"
      fontSize="sm"
      fontWeight="bold"
      color="accent"
      textTransform="uppercase"
      letterSpacing="0.05em"
      mr={4}
      minW="80px"
      display="inline-block"
    >
      {children}
    </Text>
  )
}

interface BioSectionProps {
  children: React.ReactNode
}

export function BioSection({ children }: BioSectionProps) {
  const borderColor = useColorModeValue('#E5E5E5', '#262626')

  return (
    <Flex
      py={3}
      borderBottom="1px solid"
      borderColor={borderColor}
      align="flex-start"
      _last={{ borderBottom: 'none' }}
    >
      {children}
    </Flex>
  )
}

interface BioContainerProps {
  children: React.ReactNode
}

export function BioContainer({ children }: BioContainerProps) {
  const borderColor = useColorModeValue('#E5E5E5', '#262626')

  return (
    <Box
      border="1px solid"
      borderColor={borderColor}
      p={4}
    >
      {children}
    </Box>
  )
}
