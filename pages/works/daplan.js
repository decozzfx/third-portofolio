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
        Cryptoticks <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/daplan01.png" alt="icon" />
      </Center>
      <Paragraph>
      Little slicing landing page ui from fixma mock design to code
      </Paragraph>

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
          <Link href="https://slicing-landing-page-01-daplan.netlify.app/" target='_blank'>
           Daplan v0.1 <ArrowForwardIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>December 2021</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
