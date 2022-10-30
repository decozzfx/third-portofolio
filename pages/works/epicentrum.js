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
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Cutton Beach">
    <Container>
      <Title>
        Epicentrum Blog <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/epicblog01.png" alt="icon" />
      </Center>
      <P>
      Awesome blog website
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJs </span>
          <span>Tailwindcss </span>
        </ListItem>
        <ListItem>
          <Meta>Web</Meta>
          <Link href="https://slicing-blog-page-01-epicentrum.netlify.app/" target='_blank'>
            Epicentrum Blog v0.3 <ArrowForwardIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>January 2022</span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={16} mb={4}>Desktop</Heading>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/epicblog02.png" alt="amembo" />
      </SimpleGrid>
      <Heading as="h3" fontSize={16} mb={4}>Mobile view</Heading>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/epicblog03.png" alt="amembo" />
        <WorkImage src="/images/works/epicblog04.png" alt="amembo" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
