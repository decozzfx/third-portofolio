import { Box, Heading, Text } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { Section } from '@/components/common/section'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Blog posts and articles by Moch Fathurrozi',
}

export default function PostsPage() {
  return (
    <>
      <Section delay={0}>
        <Heading
          as="h1"
          fontSize={{ base: 'h2', md: 'h1' }}
          fontFamily="heading"
          fontWeight="black"
          mb={2}
          lineHeight="tight"
        >
          Posts
        </Heading>
        <Text
          fontFamily="mono"
          fontSize="sm"
          color="textMuted"
          textTransform="uppercase"
          letterSpacing="0.1em"
          mb={8}
        >
          Coming Soon
        </Text>
      </Section>

      <Section delay={0.1}>
        <Box
          border="1px dashed"
          borderColor="border"
          p={12}
          textAlign="center"
        >
          <Text
            fontFamily="mono"
            fontSize="lg"
            color="textMuted"
            mb={4}
          >
            No posts yet
          </Text>
          <Text color="textMuted">
            Stay tuned for upcoming articles about web development, design, and more.
          </Text>
        </Box>
      </Section>
    </>
  )
}
