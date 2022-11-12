import Head from 'next/head'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../3d-object'
import NoSsr from '../No-ssr'

export default function Main({children, router}) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Decozzfx - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* header */}
      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={16}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
      
    </Box>
  )
}
