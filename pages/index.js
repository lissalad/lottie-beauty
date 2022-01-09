import Head from "next/head";
import Image from "next/image";

const imgStyle = "w-[400px] max-w-[80%] h-auto m-3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prettie</title>
      </Head>

      {/* <!-- MAIN --> */}
      {/* <main className="flex flex-wrap justify-evenly flex-row items-center"> */}
      <main className="flex flex-wrap justify-center flex-row items-center w-[100vh] md:ml-[300px] md:w-100">
        <img className={imgStyle} src="/images/filler/cursive.jpg" />
        <img className={imgStyle} src="/images/filler/butterfly.jpg" />
        <img className={imgStyle} src="/images/filler/candy.jpg" />
      </main>
    </>
  );
}
