'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Link as ChakraLink,
  Image,
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoArrowForward, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
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
  { label: 'LinkedIn', href: 'https://linkedin.com/in/decozzfx', icon: IoLogoLinkedin },
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
            mb={2}
            lineHeight="tight"
          >
            Moch Fathurrozi
          </Heading>
          <Text fontFamily="mono" fontSize="md" color="textMuted" mb={4}>
            Fullstack & Frontend Engineer
          </Text>
          <Box fontSize="lg" color="textMuted" fontFamily="mono">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Based in Semarang, Indonesia')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('4+ years professional experience')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('React.js | Next.js | React Native')
                  .pauseFor(2000)
                  .deleteAll()
                  .start()
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
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
          A Fullstack Developer specializing in Frontend Development with React.js, Next.js,
          React-Native, Express.js, NestJs and AdonisJs. Skilled in creating responsive,
          user-friendly web interfaces with 4+ years professional experience. Proficient in
          frontend and backend development with RESTful APIs and database management
          (PostgreSQL, MySQL, MongoDB). Experience working and integrating with AI and LLM.
          Strong communicator and team player, dedicated to delivering high-quality results.
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
            <BioYear>2025 - Now</BioYear>
            <Box>
              <Text fontWeight="medium">Frontend Engineer at PT Veritask</Text>
              <Text fontSize="sm" color="textMuted">Legal AI Platform, Next.js 15, React 19, TypeScript</Text>
            </Box>
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>
            <Box>
              <Text fontWeight="medium">Frontend Engineer at PT Xprogroup</Text>
              <Text fontSize="sm" color="textMuted">NextJs, Tailwind CSS, Rizzui</Text>
            </Box>
          </BioSection>
          <BioSection>
            <BioYear>2024 - 2025</BioYear>
            <Box>
              <Text fontWeight="medium">Frontend Engineer at PT MFI</Text>
              <Text fontSize="sm" color="textMuted">React Native, NextJs, Tailwind CSS</Text>
            </Box>
          </BioSection>
          <BioSection>
            <BioYear>2023 - 2024</BioYear>
            <Box>
              <Text fontWeight="medium">Frontend Engineer at Ismaya Group</Text>
              <Text fontSize="sm" color="textMuted">React Native, NextJs, Material UI</Text>
            </Box>
          </BioSection>
          <BioSection>
            <BioYear>2022 - 2023</BioYear>
            <Box>
              <Text fontWeight="medium">Frontend Engineer at PT Javan Cipta Solusi</Text>
              <Text fontSize="sm" color="textMuted">NextJs, Tailwind CSS, Material UI</Text>
            </Box>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            <Box>
              <Text fontWeight="medium">Frontend Engineer at PT Infosys Solusi Terpadu</Text>
              <Text fontSize="sm" color="textMuted">ReactJs, Tailwind CSS, Material UI</Text>
            </Box>
          </BioSection>
        </BioContainer>
      </Section>

      {/* Skills Section */}
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
          Skills
        </Heading>
        <Flex gap={2} flexWrap="wrap">
          {[
            'React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript',
            'Express.js', 'NestJs', 'AdonisJs', 'Tailwind CSS',
            'PostgreSQL', 'MySQL', 'MongoDB', 'Git', 'AI/LLM Integration'
          ].map((skill) => (
            <Box
              key={skill}
              border="1px solid"
              borderColor={borderColor}
              px={3}
              py={1}
              fontFamily="mono"
              fontSize="xs"
              textTransform="uppercase"
            >
              {skill}
            </Box>
          ))}
        </Flex>
      </Section>

      {/* Education Section */}
      <Section delay={0.3}>
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
            <BioYear>2014 - 2017</BioYear>
            <Box>
              <Text fontWeight="medium">Politeknik Negeri Madiun</Text>
              <Text fontSize="sm" color="textMuted">Computing Accountant</Text>
            </Box>
          </BioSection>
        </BioContainer>
      </Section>

      {/* Featured Works */}
      <Section delay={0.35}>
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
