import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Ecological Footprint <Badge>2015</Badge>
      </Title>
      <P>
      A question based quiz on which the ecological footprint of an individual is calculated.
      </P>
      <List ml={4} my={4}>

      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.gjurmaekologjike.com/">
          www.gjurmaekologjike.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5,CSS,Bootstrap,Laravel,MYSQL</span>
        </ListItem>
 
      
 
      </List>

 





      <WorkImage src="/images/works/ecologicalfootprint.png" alt="Ecological Footprint" />
      <WorkImage src="/images/works/ecologicalfootprint2.png" alt="Ecological Footprint" />
    </Container>
  </Layout>
)

export default Work
