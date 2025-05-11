import Head from "next/head";
import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";

export default function CvLayout({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Decozzfx - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* header */}
      <Navbar path={router.asPath} />

      <Container maxW="container.2xl" pt={16}>
        {children}
      </Container>
    </Box>
  );
}
