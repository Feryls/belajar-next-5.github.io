import Navbar from "./components/Navbar";
import Image from "next/image";
const profile = ({albums}) =>{
    return(
        <>
            <Navbar/>
            <Image src="next.svg" alt="Logo Next" width={300} height={200}/>
            <h1>Ini Halaman Profile</h1>
            {albums.map((album) => (
                <div key={album.id}>
                <h2>{album.title}</h2>
                </div>
            ))}
        </>
    );
}
export default profile;

export const getStaticProps = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/photos");
    const albums = await res.json();
  
    return {
        props: {
          albums,
        },
    };
  };