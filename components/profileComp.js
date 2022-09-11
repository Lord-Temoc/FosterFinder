import { useState } from "react";
import { Avatar, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfileComponent() {
  const { data: session } = useSession();

  return (
    <>
      <Flex
        pos="fixed"
        left="0"
        h="20%"
        marginTop="2.5vh"
        boxShadow="0 0px 12px 0 rgba(0,0,0, 0.5)"
        w="10%"
        flexDir="column"
        justifyContents="space-between"
      >
        <Flex mt={7} align="center" flexDir={"column"}>
          <Avatar left="0" size="sm" src={session?.user.image} />
          <Flex flexDir="column" ml={4}>
            <Heading as="h3" size="sm">
              {session?.user.name}
            </Heading>
            <p color="gray"> Admin </p>
          </Flex>

          <button onClick={signOut}>Sign out</button>
        </Flex>
      </Flex>
    </>
  );
}
