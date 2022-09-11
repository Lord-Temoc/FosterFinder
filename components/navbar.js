import { useState } from "react";
import { Avatar, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";
import { HomeIcon, PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import NavItem from "./navItem";

export default function Navbar() {
  return (
    <>
      <Flex
        pos="fixed"
        left="0"
        marginLeft="5"
        top="25%"
        marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0,0,0, 0.5)"
        width="auto"
        paddingRight="5"
        paddingLeft="2"
        flexDir="column"
        justifyContents="space-between"
        border-radius="15"
      >
        <Flex>
          <Heading justifyContent="center"></Heading>
        </Flex>
        <Flex p="5%" flexDir="column" w="100%" alignText="flex-start" mb={4}>
          <NavItem />
        </Flex>
      </Flex>
    </>
  );
}
