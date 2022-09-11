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

export default function Resources() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div>
          <ProfileComponent />
          <Navbar />
        </div>
        <div></div>
      </>
    );
  }
}
// export default function Resources(){
//     return (
//         <>
//         <Flex
//             pos='sticky'
//             left='7'
//             h='70vh'
//             marginTop='2.5vh'
//             boxShadow='0 4px 12px 0 rgba(0,0,0, 0.5)'
//             w='150px'
//             flexDir='column'
//             justifyContents='space-between'
//             backgroundColor='blue'
//         >
//             <Flex>
//                 <Heading mt = {4} alignContent="center"> Icons </Heading>
//             </Flex>
//             <Flex
//                 p='5%'
//                 flexDir = 'column'
//                 w = '100%'
//                 alignText = 'flex-start'
//                 mb={4}
//             >

//                 <Divider/>
//                 <Flex>
//                     <NavItem/>
//                 </Flex>

//             </Flex>
//         </Flex>

//         </>
//     )
// }
