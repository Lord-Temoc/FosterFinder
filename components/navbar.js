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
        h="70vh"
        marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0,0,0, 0.5)"
        w="140px"
        flexDir="column"
        justifyContents="space-between"
        border-radius="15"
      >
        <Flex>
          <Heading mt={4} justifyContent="center"> Pages </Heading>
          </Flex>
          <Flex p="5%" flexDir="column" w="100%" alignText="flex-start" mb={4}>
          <Divider />
          <NavItem />
        </Flex>
      </Flex>
    </>
  );
}
