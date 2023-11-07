import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
const index = ({data}) =>{
    return(
        <>
            <Head>
            <title>About | Belajar Next JS</title>
            <meta name="description" content="Belajar Next JS"/>
            </Head>
            <Navbar/>
            <Image src="/vercel.svg" alt="Logo Vercel" width={300} height={200} />
            <h1>Ini Halaman About</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <Link href={`/about/${item.id}`}><h2>{item.name}</h2></Link>
                </div>
            ))};
        </>
    );
}
export default index;

export const getStaticProps = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};