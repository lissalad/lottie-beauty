import Head from "next/head";
import Carousel from "../components/Carousel";
import classNames from "classnames";

export default function About() {
  const textStyle = "text-lg indent-5 mt-5";

  return (
    <div>
      <Head>
        <title>Prettie • About</title>
      </Head>
      <main className="flex flex-wrap justify-center flex-row items-center relative z-[50] my-3 mx-6">
        {/* <Carousel /> */}
        <h2 className="font-['rampart_one'] text-3xl rounded-tr-2xl rounded-tl-2xl bg-lime-300/95 py-3 px-5 ">
          Lottie Thorsen
        </h2>
        <section className="flex flex-col items-center">
          <img className="shadow-xl p-6 bg-white " src="/images/y3.jpg" />
          <p className={textStyle}>
            Meet Lottie Thorsen, artist of makeup and hair. Lottie is currently in school learning
            all about hair, makeup and skin at the San Francisco Institute of Esthetics &
            Cosmetology (SFIEC). Her primary focus is in theatrical makeup and color specialty. She
            loves SFX and prosthetic work. She intends to work in the stage and screen industry.
          </p>
        </section>
        <section className="flex flex-col items-center my-5">
          <img classname="" src="/images/about/pooralice.jpg" />
          <p className={textStyle}>
            In fourth grade Thorsen discovered her interest for Makeup. She began learning on her
            own, with the help of Youtube tutorials.
          </p>
        </section>
        <section className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <img className="w-[100px]" src="/images/y4.jpg" />
            <img className="w-[100px]" src="/images/y4.jpg" />
            <img className="w-[100px]" src="/images/y4.jpg" />
          </div>
          <p className={textStyle}>
            Among her peers, Lottie has always had a reputation for her hair. Her look is always
            changing as she experiments with new colors and combinations. In public, strangers often
            approach her to compliment the bold style. After years of coloring her own hair, she
            found this was something she wants to pursue and share with others.
          </p>
        </section>
        <section className="flex flex-col items-start ">
          <p className="text-lg indent-5 mt-5">
            She finds inspiration for her work in many places. For school she keeps a "look book" of
            inspiration, in the form of a Pinterest board. See what is inspiring Lottie today!
          </p>
          <a href="https://www.pinterest.com/calvinssister/luk-buk/">
            <img className="m-2 w-[50px] mx-2" src="/images/pinterest.png" />
          </a>
        </section>
        <section className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col mt-3 items-center ">
              <img className="w-[130px] mb-1 mr-3" src="/images/about/lionking.jpeg" />
              <p className="text-sm whitespace-nowrap">Broadway's The Lion King</p>
            </div>
            <div className="flex flex-col items-center ml-3">
              <img className="w-[190px] mb-1" src="/images/about/repogenetic.png" />
              <p className="text-sm">Repo! The Genetic Opera (2008)</p>
            </div>
          </div>
          <p className={textStyle}>
            With a passion for working in the screen and stage industry, Lottie finds inspiration in
            the movies and productions she sees. In Broadway's production of The Lion King, Lottie
            appreciated the ______ makeup. In contrast, the makeup in the film Repo! The Genetic
            Opera (2008) impressed Lottie for its ____.
          </p>
        </section>
        <section className="flex flex-col items-center justify-evenly">
          <img className="w-[180px] mt-3 mb-1 mx-2" src="/images/y4.jpg" />
          <p className={textStyle}>
            With the threat of Covid, SFIEC has been holding online classes for the majority of the
            year. From her home, Lottie practices on the hair of model dolls. She looks forward to
            returning back to school in person to train and collaborate with her fellow creative
            minded peers. In May, she will graduate from the program and begin her career as makeup
            artist and hair styling. Follow her Instagram to stay up to date on her work.
          </p>
        </section>
      </main>
    </div>
  );
}
