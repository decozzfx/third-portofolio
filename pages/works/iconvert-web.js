import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center,
  Image,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";

const Work = () => (
  <Layout title="IConvert">
    <Container>
      <Title>
        IConvert <Badge>2024</Badge>
      </Title>
      <Center my={6}>
        <Image
          src="/images/works/iconvert-web/iconvert-web-01.png"
          alt="icon"
        />
      </Center>
      <Paragraph>
        Convert and Transfer Pulsa for all operator in Indonesia
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Js</span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={16} mb={4}>
        Web
      </Heading>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          isFullModal
          height="500"
          src="/images/works/iconvert-web/iconvert-web-02.png"
          alt="amembo"
        />
        <WorkImage
          isFullModal
          height="500"
          src="/images/works/iconvert-web/iconvert-web-03.png"
          alt="amembo"
        />
        <WorkImage
          isFullModal
          height="500"
          src="/images/works/iconvert-web/iconvert-web-04.png"
          alt="amembo"
        />
        <WorkImage
          isFullModal
          height="500"
          src="/images/works/iconvert-web/iconvert-web-05.png"
          alt="amembo"
        />
      </SimpleGrid>

      <Heading as="h3" fontSize={16} mb={4}>
        Mobile View
      </Heading>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          height="500"
          src="/images/works/iconvert-web/iconvert-web-mobile-01.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert-web/iconvert-web-mobile-02.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert-web/iconvert-web-mobile-03.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert-web/iconvert-web-mobile-04.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert-web/iconvert-web-mobile-05.png"
          alt="amembo"
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
