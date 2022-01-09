import Head from "next/head";
import classNames from "classnames";

export default function About() {
  return (
    <div>
      <Head>
        <title>Prettie • About</title>
      </Head>
      {/* <main className="flex flex-col w-[100vh] items-center"> */}
      <main className="flex flex-wrap justify-center flex-row items-center w-[100vh] mt-5 px-12 md:ml-[300px] md:w-100 h-screen">
        <div className="flex flex-col items-left h-100">
          <div
            className={classNames(
              "flex flex-row items-end justify-left my-4",
              "md:flex-row-reverse md:justify-around"
            )}
          >
            <img className="w-60 h-60 border-4 border-black" src="/images/lottie.jpg" />
            <h1
              className={classNames(
                "text-8xl mx-9 w-5 whitespace-wrap",
                "md:text-9xl md:flex md:text-right md:mr-[20%]"
              )}
            >
              Lottie Thorsen
            </h1>
          </div>
          <div className="flex justify-center">
            <p className=" text-4xl mt-4 indent-6">
              Lottie is currently training in cosmetology at the San Francisco Institute of
              Esthetics & Cosmetology. Her focus is in makeup and color specialty. She loves SFX and
              prosthetic work. Someday she intends to work in the stage and screen industry. She has
              experience as a makeup artist for short film Medea (2018).
            </p>
          </div>

          <div className="mt-20 flex flex-col leading-relaxed text-pink-900 underline text-4xl md:mb-auto">
            <a className="whitespace-wrap text-3xl mb-7" href="https://sfiec.edu/">
              San Francisco Institute of Esthetics and Cosmetology
            </a>
            <a className="" href="https://www.instagram.com/lottiedrinksblood/">
              Instagram: @lottiedrinksblood
            </a>
            <a className="" href="https://www.imdb.com/seen/nm10223261/">
              Lottie Thorsen IMDB
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
