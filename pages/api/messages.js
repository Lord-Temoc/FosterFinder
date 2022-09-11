import { setMessage } from "../../firebase/firebase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = await req.query.email;
    const title = await req.query.title;
    const content = await req.query.content;
    const category = await req.query.category;

    await setMessage(email, title, content, category);

    res.status(200).json({ message: "Message added" });
  }
}
