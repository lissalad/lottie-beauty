import Head from "next/head";
import Carousel from "../components/Carousel";
import classNames from "classnames";

export default function About() {
  const captionStyle = "text-sm text-center indent-0 whitespace-nowrap md:text-3xl md:mb-7";

  return (
    <div>
      <Head>
        <title>Prettie • About</title>
      </Head>
      <main
        className={classNames(
          "flex flex-wrap justify-center flex-row items-center relative z-[50] m-3 text-lg indent-9 leading-normal",
          "md:text-4xl md:mx-[70px] md:leading-relaxed"
        )}
      >
        {/* <Carousel /> */}

        <section className="flex flex-col md:flex-row m-3 items-center">
          <img
            className={classNames("shadow-xl p-6 bg-white ", "md:w-[1000px]")}
            src="/images/y3.jpg"
          />
          <div className="flex flex-col items-center md:items-start md:mt-[60px]">
            <h2
              className={classNames(
                "font-['rampart_one'] text-3xl rounded-br-2xl shadow-xl indent-0 px-3 rounded-bl-2xl bg-lime-300/95 py-3",
                "md:rounded-bl-none md:rounded-tr-2xl md:text-9xl"
              )}
            >
              Lottie Thorsen
            </h2>
            <p className="mt-5">
              Meet Lottie Thorsen, artist of makeup and hair. Lottie is currently in school learning
              all about hair, makeup and skin at the San Francisco Institute of Esthetics &
              Cosmetology (SFIEC). Her primary focus is in theatrical makeup and color specialty.
              She loves SFX and prosthetic work. She intends to work in the stage and screen
              industry.
            </p>
          </div>
        </section>
        <div className="flex justify-center flex-col md:items-center">
          {/* HER OWN HAIR */}
          <section className="flex flex-col items-center my-3">
            <div className="flex flex-row items-center">
              <img className="w-[100px] shadow-xl" src="/images/y4.jpg" />
              <img className="w-[100px] shadow-xl" src="/images/y4.jpg" />
              <img className="w-[100px] shadow-xl" src="/images/y4.jpg" />
            </div>
            <p className="mt-3">
              Among her peers, Lottie has always had a reputation for her hair. Her look is always
              changing as she experiments with new colors and combinations. In public, strangers
              often approach her to compliment the bold style. After years of coloring her own hair,
              she found this was something she wants to pursue and share with others.
            </p>
          </section>
          {/* LEARNING SFX */}
          <section
            className={classNames("flex flex-col items-center my-5 ", "md:items-start md:mr-auto ")}
          >
            <img classname="shadow-xl" src="/images/about/pooralice.jpg" />
            <p className="mt-3">
              In fourth grade Thorsen discovered her interest for Makeup. She began learning on her
              own, with the help of Youtube tutorials.
            </p>
          </section>
        </div>
        <section className="w-[260px] mb-4 text-center ml-auto">
          <a href="https://www.pinterest.com/calvinssister/luk-buk/">
            <img className="w-[70px] m-1 float-right md:w-[150px]" src="/images/pinterest.png" />
          </a>
          <p className="md:w-[500px]">
            She finds inspiration for her work in many places. For school she keeps a "look book" of
            inspiration, in the form of a Pinterest board. See what is inspiring Lottie today!
          </p>
        </section>
        {/* SHOW EXAMPLES */}
        <section className="flex flex-col md:flex-col my-5">
          <div className="flex flex-row justify-around md:items-center my-3">
            <div className="flex flex-col -mt-9 items-center">
              <img className="w-[130px] md:w-[700px] shadow-xl" src="/images/about/lionking.jpeg" />
              <p className={captionStyle}>Broadway's The Lion King</p>
            </div>
            <div className="md:flex md:flex-col md:items-center md:mx-9">
              <img
                className="w-[190px] md:w-[700px] shadow-xl"
                src="/images/about/repogenetic.png"
              />
              <p className={captionStyle}>Repo! The Genetic Opera (2008)</p>
            </div>
          </div>
          <p className="md:mx-4 md:w-[900px] mt-3">
            With a passion for working in the screen and stage industry, Lottie finds inspiration in
            the movies and productions she sees. In Broadway's production of The Lion King, Lottie
            appreciated the ______ makeup. In contrast, the makeup in the film Repo! The Genetic
            Opera (2008) impressed Lottie for its ____.
          </p>
        </section>
        <section className="flex flex-col items-center justify-evenly m-3 md:flex-row">
          <img className="md:w-[180px] mt-3 mb-1 shadow-xl" src="/images/y4.jpg" />
          <p className="my-3 md:w-[900px]">
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
