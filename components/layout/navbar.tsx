'use client'

import { Box, Container, Flex, HStack, IconButton, Text, Link as ChakraLink } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { IoClose, IoLogoGithub, IoMenu } from 'react-icons/io5'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion.create(Box)

const navItems = [
  { label: 'Works', href: '/works' },
  { label: 'Posts', href: '/posts' },
  { label: 'CV', href: '/cv' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { mounted } = useColorMode()

  const bgColor = useColorModeValue('rgba(250, 250, 250, 0.8)', 'rgba(10, 10, 10, 0.8)')
  const borderColor = useColorModeValue('#E5E5E5', '#262626')

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={mounted ? bgColor : 'transparent'}
      borderBottom="1px solid"
      borderColor={mounted ? borderColor : 'transparent'}
      backdropFilter="blur(10px)"
    >
      <Container maxW="container.lg">
        <Flex h="64px" align="center" justify="space-between">
          {/* Logo */}
          <Link href="/" passHref>
            <Flex align="center" gap={2} _hover={{ opacity: 0.8 }} transition="opacity 0.2s">
              <Box
                w="32px"
                h="32px"
                bg="accent"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontWeight="black" fontSize="sm" color="white">
                  MF
                </Text>
              </Box>
              <Text
                fontFamily="heading"
                fontWeight="bold"
                fontSize="lg"
                display={{ base: 'none', sm: 'block' }}
              >
                decozzfx
              </Text>
            </Flex>
          </Link>

          {/* Desktop Navigation */}
          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <Text
                  fontFamily="mono"
                  fontSize="sm"
                  fontWeight="medium"
                  textTransform="uppercase"
                  letterSpacing="0.05em"
                  position="relative"
                  color={pathname === item.href ? 'accent' : 'text'}
                  _hover={{ color: 'accent' }}
                  transition="color 0.2s"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: pathname === item.href ? '100%' : '0%',
                    height: '2px',
                    bg: 'accent',
                    transition: 'width 0.2s',
                  }}
                  css={{
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </HStack>

          {/* Right side actions */}
          <HStack gap={2}>
            <ChakraLink
              href="https://github.com/decozzfx"
              target="_blank"
              rel="noopener noreferrer"
              display={{ base: 'none', sm: 'flex' }}
            >
              <IconButton
                aria-label="GitHub"
                variant="ghost"
                size="md"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                <IoLogoGithub size={20} />
              </IconButton>
            </ChakraLink>

            <ThemeToggle />

            {/* Mobile menu button */}
            <IconButton
              aria-label="Menu"
              variant="ghost"
              size="md"
              display={{ base: 'flex', md: 'none' }}
              onClick={() => setIsOpen(!isOpen)}
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </IconButton>
          </HStack>
        </Flex>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              overflow="hidden"
              display={{ base: 'block', md: 'none' }}
            >
              <Flex direction="column" py={4} gap={4}>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} passHref onClick={() => setIsOpen(false)}>
                    <Text
                      fontFamily="mono"
                      fontSize="lg"
                      fontWeight="medium"
                      textTransform="uppercase"
                      letterSpacing="0.05em"
                      color={pathname === item.href ? 'accent' : 'text'}
                      _hover={{ color: 'accent' }}
                      transition="color 0.2s"
                    >
                      {item.label}
                    </Text>
                  </Link>
                ))}
                <ChakraLink
                  href="https://github.com/decozzfx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    fontFamily="mono"
                    fontSize="lg"
                    fontWeight="medium"
                    textTransform="uppercase"
                    letterSpacing="0.05em"
                    _hover={{ color: 'accent' }}
                    transition="color 0.2s"
                  >
                    GitHub
                  </Text>
                </ChakraLink>
              </Flex>
            </MotionBox>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  )
}
