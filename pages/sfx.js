import Head from "next/head";
import Image from "next/image";
import GalleryImage from "../components/GalleryImage";

export default function sfx() {
  return (
    <>
      <Head>
        <title>Prettie • SFX</title>
      </Head>

      {/* <!-- MAIN --> */}
      <main className="flex flex-wrap justify-center flex-row items-center w-screen relative z-[50] py-6">
        <GalleryImage image="/images/sfx/1.jpg" caption="Knife Fight" />
        <GalleryImage image="/images/sfx/2.jpg" caption="Tectonic Plates" />
        <GalleryImage image="/images/sfx/3.jpg" caption="Force a Smile :/" />
        <GalleryImage image="/images/sfx/4.jpg" caption="Flap" />
        <GalleryImage image="/images/sfx/5.jpg" caption="Oh No There's a Key Behind My Eyeball" />
        <GalleryImage image="/images/sfx/6.jpg" caption="The Cravings" />
        <GalleryImage image="/images/sfx/7.jpg" caption="Pew Pew Pew" />
        <GalleryImage image="/images/sfx/8.jpg" caption="Arizona Haha Not Again" />
        <GalleryImage image="/images/sfx/9.jpg" caption=":0" />
        <GalleryImage image="/images/sfx/10.jpg" caption="Wolf" />
        <GalleryImage image="/images/sfx/11.jpg" caption="Multiplication" />
        <GalleryImage image="/images/sfx/12.jpg" caption="I Hate School" />
        <GalleryImage image="/images/sfx/13.jpg" caption="Hole" />
        <GalleryImage image="/images/sfx/14.jpg" caption="Stitches?" />
        <GalleryImage image="/images/sfx/15.jpg" caption="Pitchfork" />
        <GalleryImage image="/images/sfx/16.jpg" caption="Snacky" />
      </main>
    </>
  );
}
