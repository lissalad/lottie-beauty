import Link from "next/link";
import classNames from "classnames";

function Header({ title }) {
  const navStyle = "hover:bg-sky-100 px-4 rounded transition-all duration-500 whitespace-nowrap";

  return (
    <>
      <div
        className={classNames(
          "w-[100vh] bg-pink-200 relative z-[1000]",
          "md:w-[300px] md:h-screen md:px-7 md:fixed"
        )}
      >
        <header
          className={classNames(
            "flex px-9 pt-5 flex-row h-fit z-[1000]",
            "md:pr-0 md:bg-transparent md:px-0"
          )}
        >
          <a className={classNames("flex flex-row items-left", "md:flex-col")} href="/">
            <img
              className={classNames(
                "max-w-10 w-40 mr-8 rounded p-2 border-4 border-pink-900/[.6]",
                "md:w-50 md:mr-0"
              )}
              src="/images/profile.jpg"
            />
            <div className={classNames("mt-3 mb-3 flex flex-col xs:items-center", "md:items-left")}>
              <h1
                className={classNames(
                  "text-8xl font-bold font-['Bebas_Neue'] mx-5 tracking-wider",
                  "md:mx-0 md:text-left md:text-7xl"
                )}
              >
                {title}
              </h1>
              <h2
                className={classNames(
                  "text-3xl whitespace-nowrap xs:items-center",
                  "md:text-left md:text-2xl"
                )}
              >
                Lottie Thorsen • Cosmetologist
              </h2>
            </div>
          </a>
        </header>
        <nav
          className={classNames(
            "text-4xl flex flex-row sticky top-0 leading-loose py-2 z-[1000] backdrop-blur justify-evenly",
            "md:flex-col-reverse md:text-right md:bg-black/0 md:mt-12 "
          )}
        >
          <a href="/abouttheartist" className={navStyle}>
            About the Artist
          </a>
          <p className="md:opacity-0">•</p>
          <a href="/hair" className={navStyle}>
            Hair
          </a>
          <a className={navStyle}>Makeup</a>
          <a className={navStyle}>SFX</a>
        </nav>
      </div>
    </>
  );
}

export default Header;
