import { useEffect, useState } from "react";

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

        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.data.title}</h1>
            <p>{post.data.content}</p>
            <p>{post.data.username}</p>
          </div>
        ))}
      </div>
    </>
  );
}
