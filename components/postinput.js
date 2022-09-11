import axios from "axios";
import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function PostInput(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "" || content === "") {
      alert("Please fill out all fields");
    }

    axios.post(
      "http://localhost:3000/api/posts?title=" +
        title +
        "&username=" +
        props.name +
        "&content=" +
        content
    );
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
