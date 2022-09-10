import Head from "next/head";
import Post from "../components/post";

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Foster Finder | My Profile</title>
        <meta name="description" content="Foster Finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Post />
    </div>
  );
}
