import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box as="main" pt="80px" flex="1">
        <Box mx="auto" w="100%" maxW="1100px" px={{ base: "1.5rem", md: "3rem" }} py={8}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
}
