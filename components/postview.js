import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

export default function PostView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Post View</h1>

        <Box>
          {posts.map((post) => (
            <Box border="2px" borderRadius="25px" key={post.id}>
              <Text fontSize="3xl">{post.data.title}</Text>
              <Text fontSize="xl">{post.data.content}</Text>
              <Text fontSize="small">{post.data.username}</Text>
            </Box>
          ))}
        </Box>
      </div>
    </>
  );
}
