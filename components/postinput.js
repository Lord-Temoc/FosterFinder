import axios from "axios";
import { useState, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Modal,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import styles from "./postinput.module.css";

export default function PostInput(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();

    if (title === "" || content === "") {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Post added",
        description: "Your post has been added",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      axios.post(
        "http://localhost:3000/api/posts?title=" +
          title +
          "&username=" +
          props.name +
          "&content=" +
          content
      );
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <h1>Post View</h1>
      <Button

        onClick={onOpen}
        id={styles.createPost}
      >
        Create Post
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} id = {styles.postModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Post Title"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea
                type="text"
                name="content"
                value={content}
                onChange={handleContentChange}
                placeholder="Post content"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <FormControl>
        <FormLabel>Title:</FormLabel>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <FormLabel>Content:</FormLabel>
        <Input
          type="text"
          name="content"
          value={content}
          onChange={handleContentChange}
        />
        <Input type="submit" value="Submit" onClick={handleSubmit} /> */}
      {/* </FormControl> */}
    </div>
  );
}
