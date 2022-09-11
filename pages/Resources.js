import Head from "next/head";
import Navbar from "../components/navbar";
import EventAccordion from "../components/eventsComponent";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";
import { useState } from "react";
import { Box, Badge, Center, Square, Circle, Grid, GridItem, Flex, Button, ButtonGroup, Text } from "@chakra-ui/react"; 
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Router from "next/router";

export default function Resources() {
  
  const { data: session } = useSession();
    if (session) {
        return (
          <>
  <div>
  <Button 
  onClick={() => Router.push("/")}
  colorScheme='blue' 
  marginTop={5} 
  marginLeft={5}
  >
  Home
  </Button>
  <Grid templateColumns='repeat(6, 1fr)' marginTop={10} gap={8} >
  <GridItem colStart={2} colEnd={3} h='700' bg='blue.500' >
        <Text fontSize='3xl' align='center' color='white' marginTop='10'>Newborn Resources</Text>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={12} 
                    size='md' >
                    <Link href='https://www.whattoexpect.com/first-year/feeding-baby/nutritional-needs-of-babies' isExternal> Dietary
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={9} 
                    size='md' >
                    <Link href='https://www.readbrightly.com/educational-resources-activities-ages-0-2/' isExternal> Educational
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={9} 
                    size='md' >
                    <Link href='https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20048012' isExternal> Milestones
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={7} 
                    size='md' >
                    <Link href='https://onlinenursing.duq.edu/blog/infant-mental-health-guide/' isExternal> Mental Health
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
  </GridItem>
  <GridItem colStart={3} colEnd={4} h='700' bg='blue.500' >
  <Text fontSize='3xl' align='center' color='white' marginTop='10'>Toddler Resources</Text>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={12} 
                    size='md' >
                    <Link href='https://www.myplate.gov/life-stages/toddlers#:~:text=Learn%20more-,Healthy%20Eating,see%20what%20your%20child%20likes' isExternal> Dietary
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={9} 
                    size='md' >
                    <Link href='https://www.savethechildren.org/us/charity-stories/free-websites-and-apps-to-keep-kids-learning' isExternal> Educational
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={9} 
                    size='md' >
                    <Link href='https://www.chop.edu/primary-care/developmental-milestones' isExternal> Milestones
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={7} 
                    size='md' >
                    <Link href='https://raisingchildren.net.au/school-age/health-daily-care/mental-health/children-s-mental-health' isExternal> Mental Health
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
    </GridItem>
  <GridItem colStart={4} colEnd={5} h='700' bg='blue.500' >
  <Text fontSize='3xl' align='center' color='white' marginTop='10'>Teenage Resources</Text>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={12} 
                    size='md' >
                    <Link href='https://www.nutrition.gov/topics/nutrition-age/teens/tweens-and-teens' isExternal> Dietary
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={9} 
                    size='md' >
                    <Link href='https://www.readbrightly.com/educational-resources-activities-teens/' isExternal> Educational
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={9} 
                    size='md' >
                    <Link href='https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/adolescence.html' isExternal> Milestones
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={7} 
                    size='md' >
                    <Link href='https://www.changetochill.org/resources/' isExternal> Mental Health
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
    </GridItem>
  <GridItem colStart={5} colEnd={6} h='700' bg='blue.500' >
  <Text fontSize='3xl' align='center' color='white' marginTop='10'>Young Adult Resources</Text>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={12} 
                    size='md' >
                    <Link href='https://www.myplate.gov/tip-sheet/healthy-eating-young-adults' isExternal> Dietary
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={9} 
                    size='md' >
                    <Link href='https://www.education.ne.gov/wp-content/uploads/2017/07/Young_Adult_Learning_Resource_Guide_with_Graphic_Revised_2_16_17.pdf' isExternal> Educational
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={9} 
                    size='md' >
                    <Link href='https://www.php.com/directory/milestones-for-young-adults/' isExternal> Milestones
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
            <Button 
                    colorScheme='white.600' 
                    marginTop={10} 
                    marginLeft={7} 
                    size='md' >
                    <Link href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4953734/' isExternal> Mental Health
                        <ExternalLinkIcon mx='2px' />
                    </Link>
            </Button>
    </GridItem>
    </Grid>
    </div>
      </>
    );
  }
}