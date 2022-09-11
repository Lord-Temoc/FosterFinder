import { useState } from "react";
import { Avatar, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfileComponent() {
  const { data: session } = useSession();

  return (
    <>
      <Flex
        pos="fixed"
        h="20%"
        marginTop="2.5vh"
        marginLeft="5"
        w="auto"
        flexDir="column"
        justifyContents="space-between"
      >
        <Flex mt={4} align="center" flexDir={"column"}>
          <Avatar size="lg" src={session?.user.image} />
          <Flex flexDir="column" ml={5} mr={5}>
            <Heading as="h3" size="md">
              {session?.user.name}
            </Heading>
          </Flex>

          <IconButton
            color="black"
            variant="outline"
            backgroundOpacity="0"
            borderRadius="50%"
            _hover={{ background: "red", color: "white" }}
            onClick={() => signOut()}
            icon={<RiLogoutBoxLine />}
          />
        </Flex>
      </Flex>
    </>
  );
}
