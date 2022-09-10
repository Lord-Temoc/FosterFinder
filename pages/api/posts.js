// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllPosts, addPost } from "../../firebase/firebase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const username = req.query.username;
    const title = req.query.title;
    const content = req.query.content;

    await addPost(username, title, content);

    res.status(200).json({ message: "Post added" });
  } else if (req.method === "GET") {
    const posts = await getAllPosts();

    res.status(200).json(posts);
  }
}
