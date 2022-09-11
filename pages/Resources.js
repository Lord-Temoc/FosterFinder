import Head from "next/head";
import Navbar from "../components/navbar";
import EventAccordion from "../components/eventsComponent";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";
import PostView from "../components/postview";
import Home from ".";
import { Flex, Text, Center, Box } from "@chakra-ui/react";


export default function Resources() {
  
  const { data: session } = useSession();

  return (
    
    <>
      <div>
            <ProfileComponent />
            <Navbar />
      </div>
      <div>

            <PostView name={session?.user.name} />
      </div>

      <Box bg="tomato" w="25%" p={10} color="white">
        Box 1
      </Box>
      <Box bg="tomato" w="25%" p={10} color="white">
        Box 2
      </Box>
      <Box bg="tomato" w="25%" p={10} color="white">
        Box 3
      </Box>
      <Box bg="tomato" w="25%" p={10} color="white">
        Box 4
      </Box>
    </>
  );
}