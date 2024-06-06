import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { BioSection, BioYear } from "../components/Bio";
import NextLink from "next/link";
import Paragraph from "../components/paragraph";
import Section from "../components/Section";
import Layout from "../components/layouts/article";
import { GridItem } from "../components/grid-item";
import { IoLogoTwitter, IoLogoGithub, IoMailOutline } from "react-icons/io5";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          as="main"
          p={3}
          mb={6}
          align="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          borderRadius="lg"
        >
          <Typewriter
            onInit={(type) => {
              type
                .typeString(
                  "Hello I'm a Fullstack Developer based in Yogyakarta, Indonesia!"
                )
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Moch Fathurrozi
            </Heading>
            <p>Web Developer</p>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/footprint.jpg"
              alt="profile"
            />
          </Box>
        </Box>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph as="p">
            Moch Fathurrozi is a full-stack developer based on Yogjakarta with a
            passion for building digital services/stuff he wants. currently
            product called{" "}
            <NextLink href="/works/inkdrop">
              <Link>...</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portopolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2022</BioYear>
            Works as a Frontend Engineer in PT Infosys Solusi Terpadu
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Works as a Frontend Engineer in PT Javan Cipta Solusi
          </BioSection>
          <BioSection>
            <BioYear>2023 to 2024</BioYear>
            Works as a Frontend Engineer in Ismaya Group
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>2017</BioYear>
            Complete Diploma degree Komputerisasi Akuntasi in Politeknik Negeri
            Madiun
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I Love
          </Heading>
          <Paragraph>Art, Music, Game and Playing Guitar</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Let&apos;s Connect
          </Heading>
          <List display={{ base: "", sm: "flex" }}>
            <ListItem>
              <Link href="https://github.com/decozzfx" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @decozzfx
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/decozzfx" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @decozzfx
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://mail.google.com/mail/u/0/?fs=1&to=decozzfx@gmail.com&tf=cm"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMailOutline} />}
                >
                  decozzfx
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
}
