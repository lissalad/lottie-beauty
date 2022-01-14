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
      <main className="flex flex-wrap justify-center flex-row w-screen relative md:mt-3 mb-6">
        {/* <img className={imgStyle} className="h-[220px] m-2 " src="/images/y3.png" /> */}
        <img
          // className={imgStyle}
          className="h-[500px] md:h-[1200px] rounded-sm md:m-4 shadow-2xl"
          src="/images/y1.png"
        />
        <img
          className={classNames({ imgStyle }, "h-[200px] md:h-[700px] rounded-sm m-4 shadow-xl")}
          src="/images/y4.png"
        />

        {/* <img className={imgStyle} className="h-[160px] m-2" src="/images/y2.png" /> */}
      </main>
    </>
  );
}
