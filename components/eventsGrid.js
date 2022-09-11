import { Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Button,
  onToggle,
  isOpen,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";

export default function EventsGrid() {
  return (
    <div>
      <Box position="fixed" width="65%" top="20%" marginLeft="17%">
        <Grid templateColumns="repeat(2, 2fr)" gap={6}>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Foster Care and Adoption Meet and Greet (Virtual)
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Sept 20 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  Interested in learning more about foster care and/or adoption?
                  Unsure of where to start? We can help! Join us for our next
                  meet and greet.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Trust-Based Relational Intervention
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Sept 26 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  TBRI® is an attachment-based, trauma-informed intervention
                  that is designed to meet the complex needs of vulnerable
                  children.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  National Adoption Day 2022
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Nov 22 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  National Adoption Day is a collective effort to raise
                  awareness of the more than 115,000 children waiting to be
                  adopted from foster care in the United States.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Trust-Based Relational Intervention
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Nov 26 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  Trust-Based Relational Intervention (TBRI) is a therapeutic
                  model that trains caregivers to provide effective support and
                  treatment for at-risk children
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Webinar: Understanding Autism in Girls
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Nov 31 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  This webinar will seek to illuminate information regarding ASD
                  in girls and why it can often go missed or misunderstood.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Parent Huddle Support Group
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Dec 2 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  Many foster parents are raising very challenging children and
                  youth — and we need each other’s support as we go through this
                  journey.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Orphan Initiative Interest Meeting
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Dec 8 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  Join us for coffee, dessert, and fellowship as we discuss our
                  plans for caring for vulnerable children in our community.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Webinar: Understanding Autism
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Dec 11 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  This webinar will seek to illuminate information regarding ASD
                  in girls and why it can often go missed or misunderstood.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Webinar: Navigating the Adult Systems
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Dec 16 2022</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  This presentation and conversation will help inform you about
                  the adult systems and the information needed and questions to
                  ask
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
            fontSize={"25"}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link "
                  fontSize={"20"}
                  bg="blue.500"
                  textAlign={"center"}
                  textColor="white"
                >
                  Webinar: The Crossroads of ASD and Mental Health
                </Button>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Dec 19</PopoverHeader>
                <PopoverBody
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  Autism Spectrum Disorder is a neurodevelopmental disorder that
                  has strong overlap with mental health issues. Those with ASD
                  are at higher risk for almost every mental health disorder,
                  except substance abuse.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}
