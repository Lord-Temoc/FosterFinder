import Head from "next/head";
import Navbar from "../components/navbar";
import { Flex } from "@chakra-ui/react";

import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          Signed in as {session?.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div>{/* <Navbar /> */}</div>
      <div>
        <ProfileComponent />
        <Navbar />
        <div>
        Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>
      </div>
      </div>
    </>
  );
}
