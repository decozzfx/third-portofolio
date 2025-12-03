import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center,
  Image,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";

const Work = () => (
  <Layout title="Solidarirun 2025">
    <Container>
      <Title>
        Solidarirun 2025 <Badge>2025</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/solidarirun-2025/1.png" alt="Solidarirun 2025" />
      </Center>
      <Paragraph>
        A running event website for Ponorogo that functions as a platform for
        registrars, information, and event management for annual solidarity run.
        With 500+ registered runners, this community-focused racing event
        provides seamless registration and participant management.
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, </span>
          <span>TypeScript, </span>
          <span>Tailwind CSS, </span>
          <span>Express, </span>
          <span>PostgreSQL, </span>
          <span>Midtrans</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://solidarirun.site/" target="_blank">
            solidarirun.site <ArrowForwardIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2025</span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={16} mb={4}>
        Screenshots
      </Heading>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage
          isFullModal
          src="/images/works/solidarirun-2025/2.png"
          alt="Solidarirun 2025"
        />
        <WorkImage
          isFullModal
          src="/images/works/solidarirun-2025/3.png"
          alt="Solidarirun 2025"
        />
        <WorkImage
          isFullModal
          src="/images/works/solidarirun-2025/4.png"
          alt="Solidarirun 2025"
        />
        <WorkImage
          isFullModal
          src="/images/works/solidarirun-2025/5.png"
          alt="Solidarirun 2025"
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
