import Head from "next/head";
import Navbar from "../components/navbar";
import { Flex, Text, Center } from "@chakra-ui/react";
import styles from "../styles/index.module.css";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";
//import Search from "../components/search";
import PostInput from "../components/postinput";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

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
    </>
  );
}

export default function Resources() {
  return (
    <>
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
