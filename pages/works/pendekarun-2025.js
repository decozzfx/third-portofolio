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
  <Layout title="PendekaRun 2025">
    <Container>
      <Title>
        PendekaRun 2025 <Badge>2025</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/pendekarun-2025/1.png" alt="PendekaRun 2025" />
      </Center>
      <Paragraph>
        A national running event website for Madiun City combining solidarity
        and fitness. The platform provides registration, event information, and
        management for 10K and 5K categories organized by HIPMI (Association of
        Young Indonesian Entrepreneurs).
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
          <Link href="https://madiun10k.com/" target="_blank">
            madiun10k.com <ArrowForwardIcon />
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
          src="/images/works/pendekarun-2025/2.png"
          alt="PendekaRun 2025"
        />
        <WorkImage
          isFullModal
          src="/images/works/pendekarun-2025/3.png"
          alt="PendekaRun 2025"
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
