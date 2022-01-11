import NextLink from 'next/link'
import {  Link,
    Container,
    Heading,
    Box,
    Image,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon,
    useColorModeValue} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoFacebook, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'


const Page =  () => {
    return (  
        <Layout>
        <Container>
            <Box borderRadius="lg"  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={23} mb={6} align="center">Hello, I'm a full-stack developer based in Kosovo !</Box>   
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    
                    <Heading as="h2" variant="page-title">Genti Veselaj</Heading>
                    
                    <p >Audentes Fortuna Iuvat</p>
                </Box>
                <Box   flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center">
                      <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/genti_profil.jpg"
            alt="Profile image"
          />
                </Box>
            </Box>

            <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
         I am a full-stack developer currently working at Elkos Group. My workflow consists of working mainly with : HTML5, CSS, Bootstrap, PHP, mySQL, Laravel. I've finished studying Computer Science and Engineering at UBT College. Friends call me funny, lively .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Gllarevë Kosovo.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Finished High School at "Sami Frashëri High School"
        </BioSection>

        
        <BioSection>
          <BioYear>2016</BioYear>
          Started Studying the Bachelor&apos;s Program in Computer Science and Engineering at "UBT College"
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
         Finished Banking Academy at BPB Bank
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at DataGis as a Survey Cordinator
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Working at Elkos Group
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Football, Music{' '}, Cars,
         
          
        
            Photography
       
         
        </Paragraph>
      </Section>
      <SimpleGrid columns={2} gap={2}>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/gennntt" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @gennntt
              </Button>
            </Link>
          </ListItem>
      
          <ListItem>
            <Link href="https://facebook.com/gennntt" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                Genti Veselaj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/gentveselaj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @gentveselaj
              </Button>
            </Link>
          </ListItem>
        </List>

       
     </Section>
     <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="150px"
            align="center"
            display="inline-block"
            borderRadius="full"
            src="/images/footprint-dark.png"
            alt="Logo"
          />
      </SimpleGrid>
  
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
 
    </Container>
    </Layout>
    )
}

export default  Page