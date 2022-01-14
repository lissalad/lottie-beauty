// console.log("desktop header");

//   return (
//     <div className="flex flex-row w-full items-center justify-between">
//       {/* <header className="flex flex-row justify-center z-[1000] pt-2 pb-1 bg-white/70"> */}
//       {/* <div> */}
//       <a href="/" className={classNames("flex flex-row items-center")}>
//         <img
//           className={classNames("w-[100px] h-[100px] border-4 p-2 border-black rounded-sm")}
//           src="/images/profile.jpg"
//         />
//         <div className={classNames("mt-3 mb-3 flex flex-col", "md:items-left")}>
//           <h1 className={classNames("text-7xl font-bold font-['Bebas_Neue'] mx-5 tracking-wider")}>
//             {title}
//           </h1>
//           <h2 className={classNames("text-xl")}>Lottie Thorsen • Cosmetologist</h2>
//         </div>
//       </a>
//       {/* </div> */}
//       {/* </header> */}
//       <div className=" sticky justify-center top-0 flex flex-row backdrop-blur z-[1000] bg-white/50">
//         <nav
//           className={classNames(
//             "text-md flex flex-row w-full justify-evenly leading-loose  text-xl",
//             "md:flex-row-reverse md:my-0 md:ml-auto md:text-2xl"
//           )}
//         >
//           <a href="/abouttheartist" className={navStyle}>
//             About the Artist
//           </a>
//           <p className="">•</p>
//           <a href="/hair" className={navStyle}>
//             Hair
//           </a>
//           <a href="/makeup" className={navStyle}>
//             Makeup
//           </a>
//           <a href="/sfx" className={navStyle}>
//             SFX
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default DesktopHeader;

// function DesktopHeader({ title }) {
// const navStyle = "hover:bg-sky-100 px-3 md:px-5 md:py-2 rounded transition-all duration-500";

<div className="flex flex-col h-100  mt-4">
  {/* LOTTIE THORSEN */}
  <div
    className={classNames(
      "flex flex-row justify-center py-3 w-full bg-lime-200 ",
      "md:flex-row md:justify-center"
    )}
  >
    <h1 className={classNames("text-6xl text-center", "md:text-9xl md:flex")}>Lottie Thorsen</h1>
  </div>
  <div className="mx-4">
    {/* TEXT */}
    <div className="flex items-center md:mt-4 ">
      {/* <img className="" src="/images/medea.png" /> */}
      <p className="text-lg my-2 indent-6 md:w-[40%] leading-snug">
        Lottie is currently training in cosmetology at the San Francisco Institute of Esthetics &
        Cosmetology. Her focus is in makeup and color specialty. She loves SFX and prosthetic work.
        Someday she intends to work in the stage and screen industry. She has experience as a makeup
        artist for short film Medea (2018).
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
        <img className=" h-[150px] border-4 border-black md:h-80 mb-4" src="/images/lottie.jpg" />
      </div>
    </>
  </div>
</div>;

import Head from "next/head";
import Carousel from "../components/Carousel";
import classNames from "classnames";

export default function About() {
  const captionStyle = "text-sm text-center indent-0 whitespace-nowrap md:text-3xl md:mb-7";
  const hairGallery = "w-[70px] shadow-xl md:w-[400px]";

  return (
    <div>
      <Head>
        <title>Prettie • About</title>
      </Head>
      <main
        className={classNames(
          "flex flex-wrap justify-center flex-row relative z-[50] m-3 text-lg indent-9 leading-normal",
          "md:text-4xl md:mx-[70px] md:leading-loose "
        )}
      >
        <h1 className="md:text-8xl text-4xl my-[2vw] indent-0 text-center">About the Artist</h1>

        {/* COVER */}
        <section className="flex flex-col w-full m-3 items-center md:mb-[20vw] md:mt-[3vw] md:items-center">
          <div className="flex flex-row flex-wrap items-start">
            <img
              className={classNames("shadow-xl p-6 bg-white ", "md:w-[50vw]")}
              src="/images/y3.jpg"
            />
            <h2
              className={classNames(
                "font-['rampart_one'] text-3xl rounded-br-2xl shadow-xl indent-0 px-3 rounded-bl-2xl bg-lime-300/95 py-3",
                "md:rounded-bl-none md:rounded-tr-2xl md:text-8xl md:p-5 md:mt-9"
              )}
            >
              Lottie Thorsen
            </h2>
          </div>
          <p className="mt-5 md:mx-12 md:ml-auto md:w-[34vw] md:-mt-[24vw]">
            Meet Lottie Thorsen, artist of makeup and hair. Lottie is currently in school learning
            all about hair, makeup and skin at the San Francisco Institute of Esthetics &
            Cosmetology (SFIEC). Her primary focus is in theatrical makeup and color specialty. She
            loves SFX and prosthetic work. She intends to work in the stage and screen industry.
          </p>
        </section>

        {/* HER OWN HAIR */}
        <section className="flex flex-col items-center my-3 md:justify-evenly md:mt-12 md:w-full md:items-start ">
          <div className="flex flex-row flex-wrap items-center justify-center md:ml-auto w-full">
            <img className={hairGallery} src="/images/y4.jpg" />
            <img className={hairGallery} src="/images/y4.jpg" />
            <img className={hairGallery} src="/images/y4.jpg" />
            <img className={hairGallery} src="/images/y4.jpg" />
          </div>
          <div>
            <p className="mt-3 md:w-[60vw] md:mt-[90px] md:ml-[10vw] md:mr-auto ">
              Among her peers, Lottie has always had a reputation for her hair. Her look is always
              changing as she experiments with new colors and combinations. In public, strangers
              often approach her to compliment the bold style. After years of coloring her own hair,
              she found this was something she wants to pursue and share with others.
            </p>
          </div>
        </section>

        {/* <div className="flex flex-col"> */}
        {/* LEARNING SFX */}
        <section
          className={classNames(
            "flex flex-col my-6",
            " md:items-center md:justify-end md:flex-col-reverse"
          )}
        >
          <img classname="shadow-xl" width="500" src="/images/about/pooralice.jpg" />
          <p className="text-center">
            In fourth grade Lottie discovered her interest for Makeup. She began learning on her
            own, with the help of Youtube tutorials.
          </p>
        </section>

        {/* PINTEREST */}
        <section className="m-4 text-center md:w-[30vw] md:flex md:flex-col md:items-center md:my-[10vw] md:mr-auto">
          <a href="https://www.pinterest.com/calvinssister/luk-buk/">
            <img
              className="w-[60px] m-2 float-right md:w-[150px] md:float-none md:mb-4"
              src="/images/pinterest.png"
            />
          </a>
          <p className="">
            She finds inspiration for her work in many places. For school she keeps a "look book" of
            inspiration, in the form of a Pinterest board. See what is inspiring Lottie today!
          </p>
        </section>
        {/* </div> */}
        {/* SHOW EXAMPLES */}
        <section className="flex flex-col mb-3 md:mb-[15vw]">
          <div className="flex flex-col w-full justify-center items-center md:flex-row-reverse md:justify-evenly">
            <div className="flex flex-col items-center m-4 md:m-9">
              <img className="w-[190px] md:w-[700px] shadow-xl" src="/images/about/lionking.jpeg" />
              <p className={captionStyle}>Broadway's The Lion King</p>
            </div>
            <div className="flex flex-col items-center md:m-9">
              <img className=" md:w-[700px] shadow-xl" src="/images/about/repogenetic.png" />
              <p className={captionStyle}>Repo! The Genetic Opera (2008)</p>
              <p className="md:mx-12 md:w-[40vw] mt-3 md:mt-[5vw]">
                With a passion for working in the screen and stage industry, Lottie finds
                inspiration in the movies and productions she sees. In Broadway's production of The
                Lion King, Lottie appreciated the ______ makeup. In contrast, the makeup in the film
                Repo! The Genetic Opera (2008) impressed Lottie for its ____.
              </p>
            </div>
          </div>
        </section>

        {/* GOODBYE */}
        <section className="flex flex-col items-start flex-wrap justify-evenly m-3 md:flex-row">
          <img className="md:w-[60%] mt-3 mb-1 shadow-xl" src="/images/y4.jpg" />
          <div className="flex flex-col ml-5">
            <p className="my-3  md:ml-6 ">
              With the threat of Covid, SFIEC has been holding online classes for the majority of
              the year. From her home, Lottie practices on the hair of model dolls. She looks
              forward to returning back to school in person to train and collaborate with her fellow
              creative minded peers. In May, she will graduate from the program and begin her career
              as makeup artist and hair styling. Follow her Instagram to stay up to date on her
              work.
            </p>
            <div
              className={classNames(
                "flex flex-col mt-4 mb-5 underline indent-0 items-center text-pink-800",
                "md:mt-6 md:mb-[4vw] md:m-8"
              )}
            >
              <a className="whitespace-nowrap underline mb-2 " href="https://sfiec.edu/">
                San Francisco Institute of Esthetics and Cosmetology
              </a>
              <a
                className="whitespace-nowrap w-fit mb-2"
                href="https://www.instagram.com/lottiedrinksblood/"
              >
                @LOTTIEDRINKSBLOOD
              </a>
              <a className="w-fit mb-2" href="https://www.imdb.com/seen/nm10223261/">
                Lottie Thorsen IMDB
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
