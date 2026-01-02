'use client'

import { Box, Container, Flex, HStack, Text, Link as ChakraLink } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoTwitter, IoMail } from 'react-icons/io5'
import { useColorModeValue } from '@/components/ui/color-mode'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/decozzfx', icon: IoLogoGithub },
  { label: 'Twitter', href: 'https://twitter.com/decozzfx', icon: IoLogoTwitter },
  { label: 'Email', href: 'mailto:decozzfx@gmail.com', icon: IoMail },
]

export function Footer() {
  const borderColor = useColorModeValue('#E5E5E5', '#262626')
  const mutedColor = useColorModeValue('#737373', '#A3A3A3')

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor={borderColor}
      py={8}
      mt="auto"
    >
      <Container maxW="container.lg">
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          align="center"
          justify="space-between"
          gap={4}
        >
          {/* Copyright */}
          <Text
            fontFamily="mono"
            fontSize="xs"
            color={mutedColor}
            textTransform="uppercase"
            letterSpacing="0.1em"
          >
            &copy; {new Date().getFullYear()} Moch Fathurrozi
          </Text>

          {/* Social Links */}
          <HStack gap={4}>
            {socialLinks.map((link) => (
              <ChakraLink
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                color={mutedColor}
                _hover={{ color: 'accent' }}
                transition="color 0.2s"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </ChakraLink>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
