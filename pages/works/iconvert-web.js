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
        IConvert <Badge>2024</Badge>
      </Title>
      <Center my={6}>
        <Image height="500" src="/images/works/iconvert01.png" alt="icon" />
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
          height="500"
          src="/images/works/iconvert07.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert02.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert03.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert04.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert05.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert06.png"
          alt="amembo"
        />
      </SimpleGrid>

      <Heading as="h3" fontSize={16} mb={4}>
        Mobile View
      </Heading>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          height="500"
          src="/images/works/iconvert07.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert02.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert03.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert04.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert05.png"
          alt="amembo"
        />
        <WorkImage
          height="500"
          src="/images/works/iconvert06.png"
          alt="amembo"
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";