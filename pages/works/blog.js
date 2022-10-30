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
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="Cutton Beach">
    <Container>
      <Title>
      First Portofolio Project <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/blog01.png" alt="icon" />
      </Center>
      <Paragraph>
      Mini Blog
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs </span>
          <span>RapidAPI </span>
        </ListItem>
        <ListItem>
          <Meta>Web</Meta>
          <Link href="https://mini-blog-project-decozzfx.netlify.app/" target='_blank'>
            Mini Blog v0.2 <ArrowForwardIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>December 2022</span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={16} mb={4}>Mobile view</Heading>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/blog02.png" alt="amembo" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
