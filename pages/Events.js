import { useSession, signIn, signOut } from "next-auth/react";
import { Flex, Text, Center, Box } from "@chakra-ui/react";


export default function Events() {
    const {data: session} = useSession();
}