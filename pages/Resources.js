import Head from "next/head";
import Navbar from "../components/navbar";
import EventAccordion from "../components/eventsComponent";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";
import { useState } from "react";
import {
  Box,
  Badge,
  Center,
  Square,
  Circle,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import GridLayout from "../components/resources";


export default function Resources() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div>
          <div>
          <ProfileComponent />
          <Navbar />
          </div>
          <GridLayout title="Baby School" description="Learn about babies"/>

        </div>

          


      </>
    );
  }
}
