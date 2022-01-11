import Head from "next/head";
import classNames from "classnames";

export default function About() {
  return (
    <div>
      <Head>
        <title>Prettie • About</title>
      </Head>
      {/* <main className="flex flex-col w-[100vh] items-center"> */}
      <main className="flex flex-wrap justify-center flex-row items-center w-screen relative z-[50]">
        <div className="flex flex-col h-100  mt-4">
          {/* LOTTIE THORSEN */}
          <div
            className={classNames(
              "flex flex-row justify-center py-3 w-full bg-lime-200 ",
              "md:flex-row md:justify-center"
            )}
          >
            <h1 className={classNames("text-6xl text-center", "md:text-9xl md:flex")}>
              Lottie Thorsen
            </h1>
          </div>
          <div className="mx-4">
            {/* TEXT */}
            <div className="flex items-center md:mt-4 ">
              {/* <img className="" src="/images/medea.png" /> */}
              <p className="text-lg my-2 indent-6 md:w-[40%] leading-snug">
                Lottie is currently training in cosmetology at the San Francisco Institute of
                Esthetics & Cosmetology. Her focus is in makeup and color specialty. She loves SFX
                and prosthetic work. Someday she intends to work in the stage and screen industry.
                She has experience as a makeup artist for short film Medea (2018).
              </p>
            </div>
            {/* PIC + SOCIALS */}

            {/* <div className="flex flex-row items-end justify-around md:flex-col-reverse"> */}
            <>
              <div className="flex flex-col leading-relaxed text-pink-900 underline text-md mx-4">
                <a className="whitespace-wrap underline ml-auto" href="https://sfiec.edu/">
                  San Francisco Institute of Esthetics and Cosmetology
                </a>
                <a
                  className="whitespace-nowrap w-fit ml-auto"
                  href="https://www.instagram.com/lottiedrinksblood/"
                >
                  @LOTTIEDRINKSBLOOD
                </a>
                <a className="w-fit ml-auto" href="https://www.imdb.com/seen/nm10223261/">
                  Lottie Thorsen IMDB
                </a>
              </div>
              <div className="w-fit -mt-10 ml-5 flex ">
                <img
                  className=" h-[150px] border-4 border-black md:h-80 mb-4"
                  src="/images/lottie.jpg"
                />
              </div>
            </>
          </div>
        </div>
      </main>
    </div>
  );
}
