import Head from "next/head";
import Image from "next/image";
import GalleryImage from "../components/GalleryImage";

export default function Hair() {
  return (
    <>
      <Head>
        <title>Prettie • Hair</title>
      </Head>

      {/* <!-- MAIN --> */}
      <main className="flex flex-wrap justify-center flex-row items-center w-screen relative z-[50] md:mt-3 mb-6">
        <GalleryImage image="/images/hair/hair12.png" caption="Corls" />
        <GalleryImage image="/images/hair/hair5.jpg" caption="Snip Snap" />
        <GalleryImage image="/images/hair/hair13.jpg" caption="Corly Corly" />
        <GalleryImage image="/images/hair/hair14.jpg" caption="Get Blown" />
        <GalleryImage image="/images/hair/hair15.jpg" caption="Orange" />
        <GalleryImage image="/images/hair/hair1.jpg" caption="Hehe He Holds Da Brush" />
        <GalleryImage image="/images/hair/hair2.jpg" caption="Rope Bwaid!" />
        <GalleryImage image="/images/hair/hair3.jpg" caption="Mmm Smooth" />
        <GalleryImage image="/images/hair/hair7.jpg" caption="Mommy" />
        <GalleryImage image="/images/hair/hair10.jpg" caption="Evil Vixen Woman" />
        <GalleryImage image="/images/hair/hair4.jpg" caption="Twisty" />
        <GalleryImage image="/images/hair/hair6.jpg" caption="Ooo Firey" />
        <GalleryImage image="/images/hair/hair8.jpg" caption="Beach Blonde" />
        <GalleryImage image="/images/hair/hair9.jpg" caption="Wind Blown Swept" />
      </main>
    </>
  );
}
