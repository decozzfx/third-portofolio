'use client'

import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Work } from '@/types'
import { useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion.create(Box)

interface WorkCardProps {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  const borderColor = useColorModeValue('#E5E5E5', '#262626')
  const hoverBg = useColorModeValue('#F5F5F5', '#171717')
  const imageBg = useColorModeValue('#F5F5F5', '#171717')

  // Check if this is a mobile app (portrait images)
  const isMobileApp = work.platform === 'Android' || work.platform === 'iOS'

  return (
    <Link href={`/works/${work.slug}`} passHref>
      <MotionBox
        position="relative"
        border="1px solid"
        borderColor={borderColor}
        overflow="hidden"
        cursor="pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        _hover={{
          borderColor: 'accent',
          bg: hoverBg,
        }}
      >
        {/* Image */}
        <Box
          position="relative"
          overflow="hidden"
          aspectRatio="16/10"
          bg={imageBg}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={work.images[0]}
            alt={work.title}
            objectFit={isMobileApp ? 'contain' : 'cover'}
            w={isMobileApp ? 'auto' : '100%'}
            h="100%"
            maxH="100%"
            transition="transform 0.3s ease"
            _groupHover={{ transform: 'scale(1.05)' }}
          />
          {/* Year badge */}
          <Box
            position="absolute"
            top={3}
            right={3}
            bg="accent"
            color="white"
            px={2}
            py={1}
            fontFamily="mono"
            fontSize="xs"
            fontWeight="bold"
          >
            {work.year}
          </Box>
        </Box>

        {/* Content */}
        <Box p={4}>
          <Heading
            as="h3"
            fontSize="lg"
            fontFamily="heading"
            fontWeight="bold"
            mb={2}
            lineHeight="tight"
          >
            {work.title}
          </Heading>

          <Text
            fontSize="sm"
            color="textMuted"
            mb={3}
            css={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {work.description}
          </Text>

          {/* Stack tags */}
          <Flex gap={2} flexWrap="wrap">
            {work.stack.slice(0, 3).map((tech) => (
              <Text
                key={tech}
                fontFamily="mono"
                fontSize="xs"
                color="textMuted"
                textTransform="uppercase"
                letterSpacing="0.05em"
              >
                {tech}
              </Text>
            ))}
            {work.stack.length > 3 && (
              <Text
                fontFamily="mono"
                fontSize="xs"
                color="textMuted"
              >
                +{work.stack.length - 3}
              </Text>
            )}
          </Flex>
        </Box>
      </MotionBox>
    </Link>
  )
}
