import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import {
  Flex,
  Text,
  Center,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Select,
  Button,
  Toast,
  useToast,
  Link,
} from "@chakra-ui/react";
import ProfileComponent from "../components/profileComp";
import Navbar from "../components/navbar";
import EventsGrid from "../components/eventsGrid";
import axios from "axios";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Events() {
  const { data: session } = useSession();
  const toast = useToast();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const submitMessageBox = () => {
    toast({
      title: "Thank you for your message!",
      description: "We'll get back to you as soon as possible.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    axios.post(
      "http://localhost:3000/api/messages?title=" +
        title +
        "&content=" +
        content +
        "&category=" +
        category +
        "&email=" +
        session?.user.email
    );

    setTitle("");
    setContent("");
  };

  return (
    <>
      <div>
        <ProfileComponent />
        <Navbar />
      </div>
      <Box
        margin="auto"
        width="auto"
        textAlign="center"
        justifyContent="center"
      >
        <Text fontSize="4xl" paddingTop="10">
          Contacts
        </Text>

        <Box width="50%" margin="auto">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              onChange={setTitle}
              value={title}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Content</FormLabel>
            <Textarea
              type="text"
              name="content"
              placeholder="Message content"
              onChange={setContent}
              value={content}
            />
          </FormControl>

          <Select mt={4} onChange={setCategory}>
            <option>Suggestion</option>
            <option>Bugfix/Issue</option>
            <option>Other Comments</option>
          </Select>

          <FormControl mt={4}>
            <Button
              type="button"
              value="Submit"
              onClick={submitMessageBox}
              width="100%"
            >
              Submit
            </Button>
          </FormControl>
        </Box>

        <Box mt={3}>
          <Text fontSize="xl">
            Need help with state level foster care resources?
          </Text>
          <Link
            href="https://www.childwelfare.gov/organizations/?CWIGFunctionsaction=rols:main.dspList&rolType=Custom&RS_ID=17"
            isExternal
          >
            Child Welfare Information Gateway{" "}
            <ExternalLinkIcon></ExternalLinkIcon>
          </Link>
        </Box>
      </Box>
    </>
  );
}
