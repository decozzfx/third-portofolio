import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";

const Work = () => (
  <Layout title="IConvert">
    <Container>
      <Title>
        Supree <Badge>2024</Badge>
      </Title>
      <Center my={6}>
        <Image height="500" src="/images/works/supree01.png" alt="icon" />
      </Center>
      <Paragraph>
        Supree is a attendance management app for workers in sukolilo vilage
        goverment. The app is used to record the attendance of the workers The
        app is built using React Native and Supabase.
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native </span>
          <span>Supabase </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Web</Meta>
          <Link
            href="https://cotton-beauty-beach-gsq5x1c5z-decozzfx.vercel.app"
            target="_blank"
          >
            Cutton Beach v0.2 <ArrowForwardIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>January 2022</span>
        </ListItem> */}
      </List>

      <Heading as="h3" fontSize={16} mb={4}>
        Mobile
      </Heading>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage height="500" src="/images/works/supree02.png" alt="amembo" />
        <WorkImage height="500" src="/images/works/supree03.png" alt="amembo" />
        <WorkImage height="500" src="/images/works/supree04.png" alt="amembo" />
        <WorkImage height="500" src="/images/works/supree05.png" alt="amembo" />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
