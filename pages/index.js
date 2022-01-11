import Head from "next/head";

const imgStyle = " m-1";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prettie</title>
      </Head>

      {/* <!-- MAIN --> */}
      <main className="flex flex-wrap justify-center flex-row w-screen md:w-screen relative">
        {/* <img className={imgStyle} className="h-[220px] m-2 " src="/images/y3.jpg" /> */}
        <img
          className={imgStyle}
          className="h-[500px] md:h-[900px] m-2 md:border-[10px] border-4 rounded-sm border-black md:m-5"
          src="/images/y1.jpg"
        />
        <img
          className={imgStyle}
          className="h-[200px] md:h-[600px] m-2 md:border-[10px] border-4 rounded-sm border-black md:m-5"
          src="/images/y4.jpg"
        />

        {/* <img className={imgStyle} className="h-[160px] m-2" src="/images/y2.jpg" /> */}
      </main>
    </>
  );
}
