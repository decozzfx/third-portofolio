'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Link as ChakraLink,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

import { Section } from '@/components/common/section'
import { Paragraph } from '@/components/common/paragraph'
import { useColorModeValue } from '@/components/ui/color-mode'
import { getWorkBySlug, works } from '@/lib/works'

export default function WorkDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const work = getWorkBySlug(slug)

  const borderColor = useColorModeValue('#E5E5E5', '#262626')
  const bgColor = useColorModeValue('#F5F5F5', '#171717')

  // Check if this is a mobile app (portrait images)
  const isMobileApp = work?.platform === 'Android' || work?.platform === 'iOS'

  if (!work) {
    return (
      <Box textAlign="center" py={20}>
        <Heading as="h1" mb={4}>
          Work not found
        </Heading>
        <Link href="/works" passHref>
          <Button>Back to Works</Button>
        </Link>
      </Box>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <Section delay={0}>
        <Flex align="center" gap={2} mb={6}>
          <Link href="/works" passHref>
            <Text
              fontFamily="mono"
              fontSize="sm"
              color="textMuted"
              textTransform="uppercase"
              letterSpacing="0.05em"
              _hover={{ color: 'accent' }}
              transition="color 0.2s"
            >
              Works
            </Text>
          </Link>
          <Text color="textMuted">/</Text>
          <Text
            fontFamily="mono"
            fontSize="sm"
            color="accent"
            textTransform="uppercase"
            letterSpacing="0.05em"
          >
            {work.title}
          </Text>
        </Flex>

        {/* Title */}
        <Flex align="center" gap={4} mb={6}>
          <Heading
            as="h1"
            fontSize={{ base: 'h2', md: 'h1' }}
            fontFamily="heading"
            fontWeight="black"
            lineHeight="tight"
          >
            {work.title}
          </Heading>
          <Box
            bg="accent"
            color="white"
            px={3}
            py={1}
            fontFamily="mono"
            fontSize="sm"
            fontWeight="bold"
          >
            {work.year}
          </Box>
        </Flex>

        {/* Hero Image */}
        <Box
          border="1px solid"
          borderColor={borderColor}
          mb={8}
          overflow="hidden"
          bg={bgColor}
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={isMobileApp ? 4 : 0}
        >
          <Image
            src={work.images[0]}
            alt={work.title}
            maxH={isMobileApp ? '500px' : 'auto'}
            w={isMobileApp ? 'auto' : '100%'}
            objectFit="contain"
          />
        </Box>
      </Section>

      {/* Description */}
      <Section delay={0.1}>
        <Paragraph fontSize="lg" mb={8}>
          {work.description}
        </Paragraph>
      </Section>

      {/* Metadata */}
      <Section delay={0.15}>
        <Box
          border="1px solid"
          borderColor={borderColor}
          p={6}
          mb={8}
        >
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={6}>
            <Box>
              <Text
                fontFamily="mono"
                fontSize="xs"
                color="accent"
                textTransform="uppercase"
                letterSpacing="0.1em"
                mb={1}
              >
                Platform
              </Text>
              <Text fontWeight="medium">{work.platform}</Text>
            </Box>

            <Box>
              <Text
                fontFamily="mono"
                fontSize="xs"
                color="accent"
                textTransform="uppercase"
                letterSpacing="0.1em"
                mb={1}
              >
                Year
              </Text>
              <Text fontWeight="medium">{work.year}</Text>
            </Box>

            <Box gridColumn={{ sm: 'span 2' }}>
              <Text
                fontFamily="mono"
                fontSize="xs"
                color="accent"
                textTransform="uppercase"
                letterSpacing="0.1em"
                mb={2}
              >
                Tech Stack
              </Text>
              <Flex gap={2} flexWrap="wrap">
                {work.stack.map((tech) => (
                  <Box
                    key={tech}
                    border="1px solid"
                    borderColor={borderColor}
                    px={3}
                    py={1}
                    fontFamily="mono"
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    {tech}
                  </Box>
                ))}
              </Flex>
            </Box>

            {work.website && (
              <Box gridColumn={{ sm: 'span 2' }}>
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  color="accent"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  mb={1}
                >
                  Website
                </Text>
                <ChakraLink
                  href={work.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="text"
                  _hover={{ color: 'accent' }}
                  transition="color 0.2s"
                >
                  <Flex align="center" gap={2}>
                    <Text fontWeight="medium">{work.website}</Text>
                    <IoArrowForward />
                  </Flex>
                </ChakraLink>
              </Box>
            )}
          </SimpleGrid>
        </Box>
      </Section>

      {/* Screenshots */}
      {work.images.length > 1 && (
        <Section delay={0.2}>
          <Heading
            as="h2"
            fontSize="h3"
            fontFamily="heading"
            fontWeight="bold"
            mb={6}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Box w="24px" h="3px" bg="accent" />
            Screenshots
          </Heading>
          <SimpleGrid
            columns={isMobileApp ? { base: 2, md: 3 } : { base: 1, md: 2 }}
            gap={4}
          >
            {work.images.slice(1).map((image, index) => (
              <Box
                key={index}
                border="1px solid"
                borderColor={borderColor}
                overflow="hidden"
                bg={bgColor}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={isMobileApp ? 2 : 0}
              >
                <Image
                  src={image}
                  alt={`${work.title} screenshot ${index + 2}`}
                  maxH={isMobileApp ? '400px' : 'auto'}
                  w={isMobileApp ? 'auto' : '100%'}
                  objectFit="contain"
                />
              </Box>
            ))}
          </SimpleGrid>
        </Section>
      )}

      {/* Back Button */}
      <Section delay={0.3}>
        <Link href="/works" passHref>
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
            Back to Works
          </Button>
        </Link>
      </Section>
    </>
  )
}
