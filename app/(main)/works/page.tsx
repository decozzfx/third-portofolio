import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { Section } from '@/components/common/section'
import { WorkCard } from '@/components/cards/work-card'
import { works } from '@/lib/works'

export const metadata: Metadata = {
  title: 'Works',
  description: 'Portfolio of projects by Moch Fathurrozi - Fullstack Developer',
}

export default function WorksPage() {
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
          Works
        </Heading>
        <Text
          fontFamily="mono"
          fontSize="sm"
          color="textMuted"
          textTransform="uppercase"
          letterSpacing="0.1em"
          mb={8}
        >
          {works.length} Projects
        </Text>
      </Section>

      <Section delay={0.1}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </SimpleGrid>
      </Section>
    </>
  )
}
