import Head from "next/head";
import classNames from "classnames";

export default function About() {
  const captionStyle = "text-sm mt-1 mb-3 text-center text-gray-900 md:text-lg";
  const hairGallery = "shadow-lg";
  const textStyle = classNames(
    "indent-5 text-md leading-normal md:leading-loose mt-2",
    "md:text-xl md:px-12 md:font-bold md:mt-4"
  );
  const linkStyle = "mb-2 underline text-pink-700 md:text-xl";
  const sectionStyle = "mb-8 flex flex-col md:mb-24";

  return (
    <div>
      <Head>
        <title>Prettie • About</title>
      </Head>
      <main className={classNames("mx-3", "md:flex md:flex-col md:items-center text-red-900")}>
        <div className="md:max-w-5xl bg-sky-200/30 px-4 md:px-48">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-4xl mt-6 font-['Libre_Baskerville'] italic">
              About the Artist
            </h1>
            <h2 className={classNames("text-2xl tracking-widestmt-2 mb-5")}>Lottie Thorsen</h2>
          </div>

          {/* COVER */}
          <section className={classNames(sectionStyle, "")}>
            <img className={classNames("shadow-lg md:w-[600px] md:mx-auto")} src="/images/y3.jpg" />
            <div className="px-3 mx-auto my-2 md:px-8 text-center">
              <p className={classNames(textStyle, "")}>
                Meet Lottie Thorsen, artist of makeup and hair. Lottie is currently in school
                learning all about hair, makeup and skin at the San Francisco Institute of Esthetics
                & Cosmetology (SFIEC). Her primary focus is in theatrical makeup and color
                specialty. She loves SFX and prosthetic work. She intends to work in the stage and
                screen industry.
              </p>
            </div>
          </section>

          {/* HER OWN HAIR */}
          <section className={classNames(sectionStyle, "")}>
            <div className="">
              <img className={hairGallery} src="/images/y4.jpg" />
              <img className={hairGallery} src="/images/y4.jpg" />
              <img className={hairGallery} src="/images/y4.jpg" />
              <img className={hairGallery} src="/images/y4.jpg" />
            </div>
            <div>
              <p className={classNames(textStyle, "p-2")}>
                Among her peers, Lottie has always had a reputation for her hair. Her look is always
                changing as she experiments with new colors and combinations. In public, strangers
                often approach her to compliment the bold style. After years of coloring her own
                hair, she found this was something she wants to pursue and share with others.
              </p>
            </div>
          </section>

          {/* LEARNING SFX */}
          <section className={classNames(sectionStyle)}>
            <img className="md:mx-auto shadow-lg" src="/images/about/pooralice.jpg" />
            <p className={classNames(textStyle, "text-center md:px-20")}>
              In fourth grade Lottie discovered her interest for Makeup. She began learning on her
              own, with the help of Youtube tutorials.
            </p>
          </section>

          {/* PINTEREST */}
          <section
            className={classNames(sectionStyle, "items-center md:flex md:px-9 md:text-left")}
          >
            <a className="flex" href="https://www.pinterest.com/calvinssister/luk-buk/">
              <img
                className="w-[60px] mx-auto md:w-[170px] md:m-2 hover:w-[180px] transition-transform duration-500"
                src="/images/pinterest.png"
              />
            </a>
            <p className={classNames(textStyle, "px-12 mx-5 text-center md:px-4")}>
              She finds inspiration for her work in many places. For school she keeps a look book of
              inspiration, in the form of a Pinterest board. See what is inspiring Lottie today!
            </p>
          </section>

          {/* SHOW EXAMPLES */}
          <section className={classNames(sectionStyle, "md:flex md:flex-col")}>
            <div className="md:flex md:flex-row md:justify-between">
              <div className="md:mx-3">
                <img className="shadow-lg" src="/images/about/lionking.jpeg" />
                <p className={captionStyle}>Broadway&apos;s The Lion King</p>
              </div>
              <div className="md:mx-3">
                <img className="shadow-lg" src="/images/about/repogenetic.png" />
                <p className={captionStyle}>Repo! The Genetic Opera (2008)</p>
              </div>
            </div>
            <p className={classNames(textStyle, "md:mt-9")}>
              With a passion for working in the screen and stage industry, Lottie finds inspiration
              in the movies and productions she sees. In the Broadway production of The Lion King,
              Lottie appreciated the bold use of color. In contrast, the makeup in the film Repo!
              The Genetic Opera (2008) impressed Lottie for its creepy yet beautifully mystical
              tone.
            </p>
          </section>

          {/* GOODBYE */}
          <section className="">
            <img className="shadow-lg" src="/images/y4.jpg" />
            <div className="pb-4">
              <p className={classNames(textStyle, "")}>
                With the threat of Covid, SFIEC has been holding online classes for the majority of
                the year. From her home, Lottie practices on the hair of model dolls. She looks
                forward to returning back to school in person to train and collaborate with her
                fellow creative minded peers. In May, she will graduate from the program and begin
                her career as makeup artist and hair styling. Follow her Instagram to stay up to
                date on her work.
              </p>
              <div
                className={classNames(
                  "flex flex-col mt-4 mb-5 underline indent-0 items-center text-pink-800",
                  "md:mt-24 md:mb-7 md:m-8"
                )}
              >
                <a className={linkStyle} href="https://sfiec.edu/">
                  San Francisco Institute of Esthetics and Cosmetology
                </a>
                <a className={linkStyle} href="https://www.instagram.com/lottiedrinksblood/">
                  @LOTTIEDRINKSBLOOD
                </a>
                <a className={linkStyle} href="https://www.imdb.com/seen/nm10223261/">
                  Lottie Thorsen IMDB
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
