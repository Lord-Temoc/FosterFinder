// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllPosts } from "../../firebase/firebase";

export default async function handler(req, res) {
  const posts = await getAllPosts();

  res.status(200).json(posts);
}
