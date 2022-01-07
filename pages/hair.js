import Head from "next/head";
import Image from "next/image";

const imgStyle = "w-[20rem] h-auto";
const figCapStyle =
  "text-xl text-black opacity-0 group-hover:opacity-100 absolute inset-y-3/4 inset-x-1/2";
const figStyle = "relative m-4 group";

export default function Hair() {
  return (
    <>
      <Head>
        <title>Prettie • Hair</title>
      </Head>

      {/* <!-- MAIN --> */}
      <main className="flex flex-wrap justify-evenly flex-row items-center">
        <div className={figStyle}>
          <img className={imgStyle} src="/images/filler/buns.png" />
          <p className={figCapStyle}>Hello</p>
        </div>
        <img className={imgStyle} src="/images/filler/long.jpg" />
        <img className={imgStyle} src="/images/filler/upbraid.jpg" />
        <img className={imgStyle} src="/images/filler/bun.jpg" />
        <img className={imgStyle} src="/images/filler/pony.png" />
        <img className={imgStyle} src="/images/filler/gray.jpg" />
        <img className={imgStyle} src="/images/filler/short.jpg" />
        <img className={imgStyle} src="/images/filler/maid.jpg" />
      </main>
    </>
  );
}
