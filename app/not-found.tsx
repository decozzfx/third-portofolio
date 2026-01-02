'use client'

import { Box, Container, Flex, Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'

import { useColorModeValue } from '@/components/ui/color-mode'

export default function NotFound() {
  const borderColor = useColorModeValue('#E5E5E5', '#262626')

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Container maxW="container.sm" textAlign="center">
        <Box
          border="1px solid"
          borderColor={borderColor}
          p={12}
        >
          <Text
            fontFamily="mono"
            fontSize="display"
            fontWeight="black"
            color="accent"
            lineHeight="1"
            mb={4}
          >
            404
          </Text>

          <Heading
            as="h1"
            fontSize="h2"
            fontFamily="heading"
            fontWeight="bold"
            mb={4}
          >
            Page Not Found
          </Heading>

          <Text color="textMuted" mb={8}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </Text>

          <Link href="/" passHref>
            <Button
              variant="outline"
              borderColor={borderColor}
              fontFamily="mono"
              textTransform="uppercase"
              letterSpacing="0.05em"
              _hover={{
                borderColor: 'accent',
                color: 'accent',
              }}
            >
              <IoArrowBack style={{ marginRight: '8px' }} />
              Back to Home
            </Button>
          </Link>
        </Box>
      </Container>
    </Flex>
  )
}
