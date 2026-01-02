'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Link as ChakraLink,
  Image,
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoArrowForward, IoLogoGithub, IoLogoTwitter, IoMail } from 'react-icons/io5'
import Typewriter from 'typewriter-effect'

import { HeroAnimation } from '@/components/layout/hero-animation'
import { Section } from '@/components/common/section'
import { Paragraph } from '@/components/common/paragraph'
import { BioSection, BioYear, BioContainer } from '@/components/sections/bio-section'
import { WorkCard } from '@/components/cards/work-card'
import { useColorModeValue } from '@/components/ui/color-mode'
import { getFeaturedWorks } from '@/lib/works'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/decozzfx', icon: IoLogoGithub },
  { label: 'Twitter', href: 'https://twitter.com/decozzfx', icon: IoLogoTwitter },
  { label: 'Email', href: 'mailto:decozzfx@gmail.com', icon: IoMail },
]

export default function HomePage() {
  const borderColor = useColorModeValue('#E5E5E5', '#262626')
  const featuredWorks = getFeaturedWorks().slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <Section delay={0}>
        <HeroAnimation />

        {/* Intro Box */}
        <Box
          border="1px solid"
          borderColor={borderColor}
          p={6}
          mb={8}
          textAlign="center"
        >
          <Box fontFamily="mono" fontSize="sm" color="accent" mb={2}>
            HELLO, I AM
          </Box>
          <Heading
            as="h1"
            fontSize={{ base: 'h2', md: 'h1' }}
            fontFamily="heading"
            fontWeight="black"
            mb={4}
            lineHeight="tight"
          >
            Moch Fathurrozi
          </Heading>
          <Text fontSize="lg" color="textMuted" fontFamily="mono">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Fullstack Developer based in Yogyakarta, Indonesia')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Building digital experiences with modern web tech')
                  .pauseFor(2000)
                  .deleteAll()
                  .start()
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Box>

        {/* Profile Image */}
        <Flex justify="center" mb={8}>
          <Box
            border="3px solid"
            borderColor="accent"
            p={1}
          >
            <Image
              src="/images/footprint.jpg"
              alt="Moch Fathurrozi"
              width="120px"
              height="120px"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Section>

      {/* About Section */}
      <Section delay={0.1}>
        <Heading
          as="h2"
          fontSize="h3"
          fontFamily="heading"
          fontWeight="bold"
          mb={4}
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Box w="24px" h="3px" bg="accent" />
          About
        </Heading>
        <Paragraph>
          I am a full-stack developer with a passion for building digital services and
          products. Currently working on various freelance projects including event
          management platforms and mobile applications. I specialize in React, Next.js,
          React Native, and Node.js.
        </Paragraph>
      </Section>

      {/* Experience Section */}
      <Section delay={0.2}>
        <Heading
          as="h2"
          fontSize="h3"
          fontFamily="heading"
          fontWeight="bold"
          mb={4}
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Box w="24px" h="3px" bg="accent" />
          Experience
        </Heading>
        <BioContainer>
          <BioSection>
            <BioYear>2023-2024</BioYear>
            <Text>Frontend Engineer at Ismaya Group</Text>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            <Text>Frontend Engineer at PT Javan Cipta Solusi</Text>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            <Text>Frontend Engineer at PT Infosys Solusi Terpadu</Text>
          </BioSection>
        </BioContainer>
      </Section>

      {/* Education Section */}
      <Section delay={0.25}>
        <Heading
          as="h2"
          fontSize="h3"
          fontFamily="heading"
          fontWeight="bold"
          mb={4}
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Box w="24px" h="3px" bg="accent" />
          Education
        </Heading>
        <BioContainer>
          <BioSection>
            <BioYear>2017</BioYear>
            <Text>Diploma in Computerized Accounting, Politeknik Negeri Madiun</Text>
          </BioSection>
        </BioContainer>
      </Section>

      {/* Featured Works */}
      <Section delay={0.3}>
        <Flex justify="space-between" align="center" mb={6}>
          <Heading
            as="h2"
            fontSize="h3"
            fontFamily="heading"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Box w="24px" h="3px" bg="accent" />
            Featured Works
          </Heading>
          <Link href="/works" passHref>
            <Button
              variant="ghost"
              size="sm"
              fontFamily="mono"
              textTransform="uppercase"
              letterSpacing="0.05em"
              _hover={{ color: 'accent' }}
            >
              View All <IoArrowForward style={{ marginLeft: '8px' }} />
            </Button>
          </Link>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {featuredWorks.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </SimpleGrid>
      </Section>

      {/* Contact Section */}
      <Section delay={0.4}>
        <Heading
          as="h2"
          fontSize="h3"
          fontFamily="heading"
          fontWeight="bold"
          mb={4}
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Box w="24px" h="3px" bg="accent" />
          Let&apos;s Connect
        </Heading>
        <Flex gap={4} flexWrap="wrap">
          {socialLinks.map((link) => (
            <ChakraLink
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
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
                <link.icon style={{ marginRight: '8px' }} />
                {link.label}
              </Button>
            </ChakraLink>
          ))}
        </Flex>
      </Section>
    </>
  )
}
