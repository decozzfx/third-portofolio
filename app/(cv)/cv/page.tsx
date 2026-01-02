import { Box, Heading, Text } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { Section } from '@/components/common/section'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum Vitae of Moch Fathurrozi - Fullstack Developer',
}

export default function CvPage() {
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
          Curriculum Vitae
        </Heading>
        <Text
          fontFamily="mono"
          fontSize="sm"
          color="textMuted"
          textTransform="uppercase"
          letterSpacing="0.1em"
          mb={8}
        >
          Moch Fathurrozi
        </Text>
      </Section>

      <Section delay={0.1}>
        <Box border="1px solid" borderColor="border" overflow="hidden">
          <iframe
            src="/CV - Moch Fathurrozi.pdf"
            width="100%"
            height="800px"
            style={{ border: 'none', display: 'block' }}
            title="CV"
          />
        </Box>
      </Section>
    </>
  )
}
