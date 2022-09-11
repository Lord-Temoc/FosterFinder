import { useEffect, useState } from "react";
import { Box, Text, Center, Avatar, Flex, Image } from "@chakra-ui/react";

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
        <Center display="flex" flexDirection="column" marginTop="100">
          {posts.map((post) => (
            <Box
              border="2px"
              borderRadius="25px"
              key={post.id}
              width="50%"
              padding="25"
              mb="10"
            >
              <Flex>
                <Avatar
                  size="sm"
                  src={post.data.avatar}
                  name={post.data.username}
                />
                <Text paddingLeft={2} mt={1} fontSize="small">
                  {post.data.username}
                </Text>
              </Flex>
              <Text fontSize="3xl">{post.data.title}</Text>
              <Text fontSize="xl">{post.data.content}</Text>
            </Box>
          ))}
        </Center>
      </div>
    </>
  );
}
