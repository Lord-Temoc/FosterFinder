import { useEffect, useState } from "react";
import { Box, Text, Center } from "@chakra-ui/react";

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
        <Center display="flex" flexDirection="column" overflowY="scroll">
          {posts.map((post) => (
            <Box
              border="2px"
              borderRadius="25px"
              key={post.id}
              width="50%"
              marginTop="50"
              padding="10"
            >
              <Text fontSize="3xl">{post.data.title}</Text>
              <Text fontSize="xl">{post.data.content}</Text>
              <Text fontSize="small">{post.data.username}</Text>
            </Box>
          ))}
        </Center>
      </div>
    </>
  );
}
