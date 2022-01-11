import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        D-Tring Qeramika <Badge>2021 - </Badge>
      </Title>
      <P>
      A website for a ceramic factory and shop located in Kosovo
      </P>
    
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.dtring-rks.com/">
          www.dtring-rks.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
  
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5,CSS,Bootstrap,PHP,MYSQL</span>
        </ListItem>
      </List>

 

      

  
      <WorkImage src="/images/works/dtring1.png" alt="walknote" />
      <WorkImage src="/images/works/dtring2.png" alt="walknote" />
    
    </Container>
  </Layout>
)

export default Work
