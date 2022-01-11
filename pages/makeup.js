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
      <main className="flex flex-wrap justify-center flex-row items-center w-screen relative z-[50]">
        <GalleryImage image="/images/hair/hair1.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair2.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair3.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair7.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair10.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair11.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair4.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair5.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair6.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair8.jpg" caption="amazing hair!" />
        <GalleryImage image="/images/hair/hair9.jpg" caption="amazing hair!" />
      </main>
    </>
  );
}
