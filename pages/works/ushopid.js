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
  <Layout title="Cutton Beach">
    <Container>
      <Title>
        USHOP ID <Badge>2024</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/cryptoticks01.png" alt="icon" />
      </Center>
      <Paragraph>
        Ushopid is a top up gaming website for all game online in Indonesia
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack, </Meta>
          <span>NextJs 15, </span>
          <span>NextUI, </span>
          <span>ExpressJs, </span>
          <span>MongoDB, </span>
          <span>Midtrans</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ushop.id/" target="_blank">
            USHOP ID <ArrowForwardIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>November 2024</span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={16} mb={4}>
        Desktop
      </Heading>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage
          isFullModal
          src="/images/works/ushop/youshop-web-02.png"
          alt="amembo"
        />
        <WorkImage
          isFullModal
          src="/images/works/ushop/youshop-web-03.png"
          alt="amembo"
        />
        <WorkImage
          isFullModal
          src="/images/works/ushop/youshop-web-04.png"
          alt="amembo"
        />
        <WorkImage
          isFullModal
          src="/images/works/ushop/youshop-web-05.png"
          alt="amembo"
        />
        <WorkImage
          isFullModal
          src="/images/works/ushop/youshop-web-06.png"
          alt="amembo"
        />
      </SimpleGrid>
      <Heading as="h3" fontSize={16} mb={4}>
        Mobile view
      </Heading>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/ushop/youshop-mobile-01.png"
          alt="amembo"
        />
        <WorkImage
          src="/images/works/ushop/youshop-mobile-02.png"
          alt="amembo"
        />
        <WorkImage
          src="/images/works/ushop/youshop-mobile-03.png"
          alt="amembo"
        />
        <WorkImage
          src="/images/works/ushop/youshop-mobile-04.png"
          alt="amembo"
        />
        <WorkImage
          src="/images/works/ushop/youshop-mobile-05.png"
          alt="amembo"
        />
        <WorkImage
          src="/images/works/ushop/youshop-mobile-06.png"
          alt="amembo"
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
