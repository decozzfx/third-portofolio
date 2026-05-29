import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { CustomCursor } from "@/components/motion/custom-cursor";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Box as="main" pt="80px" flex="1">
          <Box mx="auto" w="100%" maxW="var(--container)" px="1.5rem" py={8}>
            {children}
          </Box>
        </Box>
        <Footer />
      </Flex>
    </SmoothScroll>
  );
}
