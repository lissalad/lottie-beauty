import Link from "next/link";
import classNames from "classnames";

function Header({ title }) {
  const navStyle = "hover:bg-sky-100 rounded transition-all duration-500";

  return (
    // <div
    //   className={classNames(
    //     "flex bg-pink-200/50 w-[100vh] z-[1000] flex-col backdrop-blur",
    //     "md:w-screen md:flex-row md:items-end md:justify-between"
    //   )}
    // >
    <>
      <header className={classNames("flex flex-row justify-center z-[1000] pt-2 pb-2 bg-white/50")}>
        <a href="/" className={classNames("flex flex-row items-center")}>
          <img
            className={classNames("w-[100px] h-[100px] border-4 p-2 border-black rounded-sm")}
            src="/images/profile.jpg"
          />
          <div className={classNames("mt-3 mb-3 flex flex-col items-center", "md:items-left")}>
            <h1
              className={classNames("text-7xl font-bold font-['Bebas_Neue'] mx-5 tracking-wider")}
            >
              {title}
            </h1>
            <h2 className={classNames("text-xl")}>Lottie Thorsen • Cosmetologist</h2>
          </div>
        </a>
      </header>
      <div className="w-full sticky justify-center top-0 flex flex-row z-[1000] bg-white/50">
        <nav
          className={classNames(
            "text-md flex flex-row w-full justify-evenly leading-loose backdrop-blur ",
            "md:flex-row-reverse md:mb-2 md:mr-2 md:ml-auto"
          )}
        >
          <a href="/abouttheartist" className={navStyle}>
            About the Artist
          </a>
          <p className="">•</p>
          <a href="/hair" className={navStyle}>
            Hair
          </a>
          <a href="/makeup" className={navStyle}>
            Makeup
          </a>
          <a href="/sfx" className={navStyle}>
            SFX
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
