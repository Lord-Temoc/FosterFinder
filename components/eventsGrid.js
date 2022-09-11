import { Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Button,
  onToggle,
  isOpen,
} from "@chakra-ui/react";

export default function EventsGrid() {
  return (
    <div>
      <Box position="fixed" width="60%" top="20%" marginLeft="20%">
        <Grid templateColumns="repeat(2, 2fr)" gap={6}>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            Event 1
            <Fade in={isOpen}>
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
              >
                Fade
              </Box>
            </Fade>
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 2
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 3
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 4
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 5
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 6
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 7
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 8
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 9
          </GridItem>
          <GridItem
            borderRadius={"15"}
            w="100%"
            h="20"
            bg="blue.500"
            textAlign={"center"}
            textColor="white"
          >
            {" "}
            Event 10
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}
