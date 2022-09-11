import Head from "next/head";

import EventAccordion from "../components/eventsComponent";
import { Flex, Text, Center } from "@chakra-ui/react";
import styles from "../styles/index.module.css";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";
import Navbar from "../components/navbar";
import PostView from "../components/postview";
import PostInput from "../components/postinput";
import { Icon, createIcon } from "@chakra-ui/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          <div>
            <ProfileComponent />
            <Navbar />
            <EventAccordion />
          </div>
          <div>
            <PostInput name={session?.user.name} />
            <PostView />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div id={styles.centered}>
        {/* Not signed in <br />  */}
        <div id={styles.container}>
          <div>
            <Text fontSize="6xl">Welcome to FosterFinder</Text>
          </div>
          <div id={styles.btn}>
            {/* <IconButton onClick={() => signIn()} icon={}/> */}
          </div>
        </div>
      </div>
    </>
  );
}
