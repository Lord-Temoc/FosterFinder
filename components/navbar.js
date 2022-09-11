import { useState } from "react";
import { Avatar, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";
import { HomeIcon, PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "../assets/ViperPfP.jpg";
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
        width="auto"
        flexDir="column"
        justifyContents="space-between"
        border-radius="15"
      >
        <Flex>
          <Heading justifyContent="center"></Heading>
        </Flex>
        <Flex flexDir="column" w="100%" alignText="flex-start">
          <NavItem />
        </Flex>
      </Flex>
    </>
  );
}
