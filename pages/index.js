import Head from "next/head";
import Navbar from "../components/navbar";
import { Flex } from "@chakra-ui/react";

import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";
import Search from "../components/search";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          <ProfileComponent />
          <Navbar />
        </div>
        <div>
          Signed in as {session?.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
        <div>
          <Search />
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <div>
          Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>
        </div>
      </div>
    </>
  );
}
