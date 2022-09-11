import axios from "axios";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

export default function PostInput(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

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

      <FormControl>
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
        <Input type="submit" value="Submit" onClick={handleSubmit} />
      </FormControl>
    </div>
  );
}
