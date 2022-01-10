import Head from "next/head";
import classNames from "classnames";

export default function About() {
  return (
    <div>
      <Head>
        <title>Prettie • About</title>
      </Head>
      {/* <main className="flex flex-col w-[100vh] items-center"> */}
      <main className="flex flex-wrap flex-row w-[100vh] md:w-fit mt-5 px-12 md:ml-[300px] md:w-100 h-screen">
        <div className="flex flex-col h-100 ">
          {/* LOTTIE THORSEN */}
          <div
            className={classNames(
              "flex flex-row justify-center py-3 w-full bg-lime-500/50",
              "md:flex-row md:justify-center"
            )}
          >
            <h1 className={classNames("text-8xl text-center", "md:text-9xl md:flex ")}>
              Lottie Thorsen
            </h1>
          </div>
          <div className="">
            {/* TEXT */}
            <div className="flex items-center md:mt-4 ">
              {/* <img className="" src="/images/medea.png" /> */}
              <p className="text-3xl mt-4 indent-6 md:w-[40%]">
                Lottie is currently training in cosmetology at the San Francisco Institute of
                Esthetics & Cosmetology. Her focus is in makeup and color specialty. She loves SFX
                and prosthetic work. Someday she intends to work in the stage and screen industry.
                She has experience as a makeup artist for short film Medea (2018).
              </p>
            </div>
            {/* PIC + SOCIALS */}

            <div className="flex flex-row items-end justify-around mt-10 md:flex-col-reverse">
              <div className="flex flex-col mb-6 leading-relaxed text-pink-900 underline text-3xl">
                <a
                  className="whitespace-nowrap"
                  href="https://www.instagram.com/lottiedrinksblood/"
                >
                  @LOTTIEDRINKSBLOOD
                </a>
                <a className="" href="https://www.imdb.com/seen/nm10223261/">
                  Lottie Thorsen IMDB
                </a>
              </div>
              <div className="">
                <img className=" h-60 border-4 border-black md:h-80" src="/images/lottie.jpg" />
              </div>
            </div>

            <div className="mt-6">
              <a className="whitespace-wrap text-3xl underline " href="https://sfiec.edu/">
                San Francisco Institute of Esthetics and Cosmetology
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
