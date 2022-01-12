import classNames from "classnames";

function MobileHeader({ title }) {
  const navStyle = "hover:bg-sky-100 px-3 md:px-5 md:py-2 rounded transition-all duration-500";

  console.log("mobile header");

  return (
    <>
      <div
        className={classNames(
          "flex flex-row justify-center z-[1000] pt-2 pb-1 bg-rose-800/70 backdrop-blur-lg text-white"
        )}
      >
        <a href="/" className={classNames("flex flex-row items-center")}>
          {/* <img
            className={classNames("w-[100px] h-[100px] border-4 p-2 border-black rounded-sm")}
            src="/images/profile.jpg"
          /> */}
          <div className={classNames("flex flex-col items-center", "md:items-left")}>
            <h1 className={classNames("text-7xl font-bold font-['monofett'] mx-5 tracking-wider")}>
              {title}
            </h1>
            <h2 className={classNames("text-xl")}>Lottie Thorsen • Cosmetologist</h2>
          </div>
        </a>
      </div>
      <div className="w-full sticky justify-center top-0 flex flex-row z-[1000] bg-rose-800/50 backdrop-blur-lg text-white">
        <nav
          className={classNames(
            "text-md flex flex-row w-full justify-evenly leading-loose  text-xl",
            "md:flex-row-reverse md:my-0 md:ml-auto md:text-2xl"
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

export default MobileHeader;
