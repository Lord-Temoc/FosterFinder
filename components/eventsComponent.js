import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";

export default function EventAccordion() {
  return (
    <Flex>
      <Accordion
        width="20%"
        float="right"
        position="absolute"
        right="0"
        top="100"
        marginRight="5"
      >
        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor={"#64A6BD"}
              color="white"
              _hover={{
                backgroundColor: "white",
                color: "#64A6BD",
                border: "2px",
              }}
            >
              <Box flex="1" textAlign="left">
                Where can I find information on educational resources for
                toddlers?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Go to our Resources page and in the toddler resources section click
            on the educational link that will take you to information about
            education for toddlers.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor={"#64A6BD"}
              color="white"
              _hover={{
                backgroundColor: "white",
                color: "#64A6BD",
                border: "2px",
              }}
            >
              <Box flex="1" textAlign="left">
                I’m a new foster parent and I don’t know when my newborn should
                start recognizing colors?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Go to the milestones link on the newborn section of the Resources
            page for more information
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor={"#64A6BD"}
              color="white"
              _hover={{
                backgroundColor: "white",
                color: "#64A6BD",
                border: "2px",
              }}
            >
              <Box flex="1" textAlign="left">
                I’m not able to use the website in some way, how do I get my
                issue fixed?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Sorry for the inconvenience, let us know in the suggestions box on
            the Contacts page on how we can help you
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor={"#64A6BD"}
              color="white"
              _hover={{
                backgroundColor: "white",
                color: "#64A6BD",
                border: "2px",
              }}
            >
              <Box flex="1" textAlign="left">
                I’d love to give back to the community, how do I get involved?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Check out the Events page on our website! There’s plenty of open
            events to attend
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor={"#64A6BD"}
              color="white"
              _hover={{
                backgroundColor: "white",
                color: "#64A6BD",
                border: "2px",
              }}
            >
              <Box flex="1" textAlign="left">
                How do I create a post for other users to see?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Click on the Create a Post button on the Home page, enter the
            information you’d like to post about, and other users will be able
            to see it!
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );

  ``;
}
