import Head from "next/head";
import Image from "next/image";
import HairImage from "../components/HairImage";

export default function sfx() {
  return (
    <>
      <Head>
        <title>Prettie • SFX</title>
      </Head>

      {/* <!-- MAIN --> */}
      <main className="flex flex-wrap justify-center flex-row items-center w-[100vh] md:ml-[300px] bg-gray-900 py-5">
        <HairImage image="/images/sfx/1.jpg" caption="knife fight" />
        <HairImage image="/images/sfx/2.jpg" caption="tectonic plates" />
        <HairImage image="/images/sfx/3.jpg" caption="force a smile :/" />
        <HairImage image="/images/sfx/4.jpg" caption="flap" />
        <HairImage image="/images/sfx/5.jpg" caption="knife fight" />
        <HairImage image="/images/sfx/6.jpg" caption="tectonic plates" />
        <HairImage image="/images/sfx/7.jpg" caption="force a smile :/" />
        <HairImage image="/images/sfx/8.jpg" caption="flap" />
        <HairImage image="/images/sfx/9.jpg" caption="knife fight" />
        <HairImage image="/images/sfx/10.jpg" caption="tectonic plates" />
        <HairImage image="/images/sfx/11.jpg" caption="force a smile :/" />
        <HairImage image="/images/sfx/12.jpg" caption="flap" />
        <HairImage image="/images/sfx/13.jpg" caption="knife fight" />
        <HairImage image="/images/sfx/14.jpg" caption="tectonic plates" />
        <HairImage image="/images/sfx/15.jpg" caption="force a smile :/" />
        <HairImage image="/images/sfx/16.jpg" caption="flap" />
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
