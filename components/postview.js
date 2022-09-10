import axios from "axios";
import { useState } from "react";

export default function PostView(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      title: title,
      content: content,
      username: props.name,
    };

    axios.post("http://localhost:3000/api/posts", post);
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

      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
          Content:
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleContentChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
