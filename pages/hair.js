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
      <main className="flex flex-wrap justify-center flex-row items-center w-screen relative z-[50]">
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
        <HairImage image="/images/filler/buns.png" caption="two buns very cute" />
      </main>
    </>
  );
}
