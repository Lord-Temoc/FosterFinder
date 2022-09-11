import { useSession, signIn, signOut } from "next-auth/react";
import { Flex, Text, Center, Box } from "@chakra-ui/react";
import ProfileComponent from "../components/profileComp";
import Navbar from "../components/navbar";
import EventsGrid from "../components/eventsGrid";

export default function Events() {
  const { data: session } = useSession();
  return (
    <>
      <div>
        <div>
          <ProfileComponent />
          <Navbar />
          <EventsGrid />
        </div>
      </div>
    </>
  );
}
