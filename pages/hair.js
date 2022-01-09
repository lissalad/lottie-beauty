import Head from "next/head";
import Image from "next/image";
import HairImage from "../components/HairImage";

export default function Hair() {
  return (
    <>
      <Head>
        <title>Prettie • Hair</title>
      </Head>

      {/* <!-- MAIN --> */}
      <main className="flex flex-wrap justify-center flex-row items-center md:ml-[300px] md:w-100">
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        {/* <img className={imgStyle} src="/images/filler/long.jpg" />
        <img className={imgStyle} src="/images/filler/upbraid.jpg" />
        <img className={imgStyle} src="/images/filler/bun.jpg" />
        <img className={imgStyle} src="/images/filler/pony.png" />
        <img className={imgStyle} src="/images/filler/gray.jpg" />
        <img className={imgStyle} src="/images/filler/short.jpg" />
        <img className={imgStyle} src="/images/filler/maid.jpg" /> */}
      </main>
    </>
  );
}
