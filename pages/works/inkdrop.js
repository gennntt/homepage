import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        SchuleHeatpump <Badge>2021-</Badge>
      </Title>
      <P>
      A website for a Heatpump Factory in Germany
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.schuleheatpump.com/">
          www.schuleheatpump.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5,CSS,Boostrap</span>
        </ListItem>
 
      </List>

      <WorkImage src="/images/works/schuleheatpump.png" alt="SchuleHeatpump" />
      <WorkImage src="/images/works/schuleheatpump2.png" alt="SchuleHeatpump" />
      <WorkImage src="/images/works/schuleheatpump3.png" alt="SchuleHeatpump" />
      <WorkImage src="/images/works/schuleheatpump4.png" alt="SchuleHeatpump" />
  
    </Container>
  </Layout>
)

export default Work
