import { useSession, signIn, signOut } from "next-auth/react";
import {
  Box,
  Badge,
  Center,
  Square,
  Circle,
  Grid,
  GridItem,
  Flex,
  Divider,
  Button,
} from "@chakra-ui/react";
import styles from "./postinput.module.css";
import { Wrap, WrapItem } from "@chakra-ui/react";

export default function GridLayout(props) {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Flex>
          <Wrap float="right" position="absolute" right="600" top="100">
            <WrapItem>
              <Center w="180px" h="80px" bg="red.200">
                Box 1
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="180px" h="80px" bg="green.200">
                Box 2
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="180px" h="80px" bg="tomato">
                Box 3
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="180px" h="80px" bg="blue.200">
                Box 4
              </Center>
            </WrapItem>
          </Wrap>
        </Flex>
      </div>
    );
  }
}
