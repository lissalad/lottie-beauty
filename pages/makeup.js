import Head from "next/head";
import Image from "next/image";
import GalleryImage from "../components/GalleryImage";

export default function Hair() {
  return (
    <>
      <Head>
        <title>Prettie • Makeup</title>
      </Head>

      {/* <!-- MAIN --> */}
      <main className="flex flex-wrap justify-center flex-row items-center w-screen relative z-[50] md:mt-3 mb-6">
        <GalleryImage image="/images/filler/mu1.jpg" caption="filler" />
        <GalleryImage image="/images/filler/mu2.jpg" caption="filler" />
        <GalleryImage image="/images/filler/candy.jpg" caption="filler" />
        <GalleryImage image="/images/filler/mu3.jpg" caption="filler" />
        <GalleryImage image="/images/filler/mu4.jpg" caption="filler" />
        <GalleryImage image="/images/filler/mu5.jpg" caption="filler" />
        <GalleryImage image="/images/filler/mu6.jpg" caption="filler" />
        <GalleryImage image="/images/filler/butterfly.jpg" caption="filler" />
      </main>
    </>
  );
}
