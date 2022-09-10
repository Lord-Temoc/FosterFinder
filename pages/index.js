import Head from "next/head";
import Navbar from "../components/navbar";
<<<<<<< Updated upstream
import { Flex, Text, Center } from "@chakra-ui/react";
import styles from "../styles/index.module.css";
import GoogleButton from "react-google-button";
=======
import Resources from "../components/resources";
import { Flex } from "@chakra-ui/react";

>>>>>>> Stashed changes
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          <ProfileComponent />
          <Navbar />
          <Resources />
        </div>
        <div>
          Signed in as {session?.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
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
          <div>
            <GoogleButton type="dark" onClick={() => signIn()}>
              Sign in
            </GoogleButton>
          </div>
        </div>
      </div>
    </>
  );
}
