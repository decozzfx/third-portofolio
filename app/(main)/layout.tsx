import { Box, Container, Flex } from '@chakra-ui/react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SmoothScroll } from '@/components/motion/smooth-scroll'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Box as="main" pt="80px" flex="1">
          <Container maxW="var(--container)" py={8}>
            {children}
          </Container>
        </Box>
        <Footer />
      </Flex>
    </SmoothScroll>
  )
}
