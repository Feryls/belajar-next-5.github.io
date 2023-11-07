import Image from "next/image";
import Navbar from "./components/Navbar.js";
import Head from "next/head";

export default function Home({posts}){
  return(
    <>
      <Head>
        <title>Home | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS"/>
      </Head>
      <Navbar/>
      <Image src="/next.svg" alt="Logo Next" width={300} height={200} />
      <h1>Ini Halaman Utama</h1>
      {posts.map((posts) => (
        <div key={posts.id}>
          <h2>{posts.title}</h2>
        </div>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
      props: {
        posts: data,
      },
  };
};