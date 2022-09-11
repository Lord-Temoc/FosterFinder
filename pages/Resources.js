import Head from "next/head";
import Navbar from "../components/navbar";
import EventAccordion from "../components/eventsComponent";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";
//import Search from "../components/search";
import PostInput from "../components/postinput";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import PostView from "../components/postview";



export default function Resources() {
  
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          <ProfileComponent />
          <Navbar />
        </div>
        <div>
          <PostInput name={session?.user.name} />
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
}
