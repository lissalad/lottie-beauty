import classNames from "classnames";
import Head from "next/head";

const imgStyle = "";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prettie</title>
      </Head>

      {/* <!-- MAIN --> */}
      <main className="flex flex-wrap justify-center flex-row w-screen relative md:mt-3 md:my-2 md:mb-6">
        {/* <img className={imgStyle} className="h-[220px] m-2 " src="/images/y3.png" /> */}
        <img
          // className={imgStyle}
          className="w-screen md:w-[500px] md:rounded-md md:m-4 shadow-2xl"
          src="/images/home/hello1.png"
        />
        <img
          // className={imgStyle}
          className="w-screen md:w-[500px] md:rounded-md md:m-4 shadow-2xl"
          src="/images/home/hello2.png"
        />
        {/* <img className={imgStyle} className="h-[160px] m-2" src="/images/y2.png" /> */}
      </main>
    </>
  );
}
