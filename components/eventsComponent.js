import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import {Box, Divider, Flex, Heading, IconButton} from '@chakra-ui/react'



  export default function EventAccordion(){
    return (
        <Flex>
            <Accordion width="20%" float="right" position="absolute" right="0" top="100">
                <AccordionItem>
                    <h2>
                    <AccordionButton bgColor={"lightblue"}>
                        <Box flex='1' textAlign='left'>
                            Event 1 Replace with actual event
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Here is the event 1 information
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton bgColor={"lightblue"}>
                        <Box flex='1' textAlign='left'>
                            Event 2 Replace with actual event
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        here is the event 2 information
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton bgColor={"lightblue"}>
                        <Box flex='1' textAlign='left'>
                            Event 3 Replace with actual event
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Here is the event 3 information
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton bgColor={"lightblue"}>
                        <Box flex='1' textAlign='left'>
                            Event 4 Replace with actual event
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Here is the event 4 information
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton bgColor={"lightblue"}>
                        <Box flex='1' textAlign='left'>
                            Event 5 Replace with actual event
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Here is the event 5 information
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </Flex>


    );

``

  }