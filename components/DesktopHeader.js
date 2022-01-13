import classNames from "classnames";

function DesktopHeader({ title }) {
  const navStyle =
    "hover:bg-pink-300/40 px-7 whitespace-nowrap flex items-center transition-all duration-300 text-4xl p-6 hover:text-5xl ";
  console.log("desktop header");

  // londrina outline for handwritten outline
  // monofett is real bubbly
  // rampart one handwritten but shading
  // tourney very gamer
  // bungee outline also gamer but all caps

  return (
    <div className="flex flex-row justify-between items-center shadow-lg top-0 sticky z-[1000] px-12 bg-rose-800/70 backdrop-blur-lg flex-wrap text-slate-200 ">
      <div className="flex flex-wrap whitespace-wrap">
        <a href="/" className={classNames("flex flex-row items-center")}>
          <div className={classNames("flex flex-row items-center self-center my-2")}>
            <h1
              className={classNames(
                "text-[120px] font-bold font-['monofett'] leading-[100px] mb-4 mr-12 hover:text-[130px] transition-all duration-200"
              )}
            >
              {title}
            </h1>
            <div
              className={classNames(
                "flex flex-row whitespace-wrap flex-wrap text-[1.9rem] w-fit tracking-widest"
              )}
            >
              <div className="whitespace-nowrap flex flex-row justify-left">
                <h2>Lottie Thorsen</h2>
                <p className="mx-4"> • </p>
              </div>
              <h2> Cosmetologist</h2>
            </div>
          </div>
        </a>
      </div>
      <div className="">
        <nav className="flex flex-grow-1 flex-row-reverse xs:bg-black items-center text-white ">
          <a href="/abouttheartist" className={navStyle}>
            About the Artist
          </a>
          <p className="text-4xl p-6">•</p>
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
    </div>
  );
}

export default DesktopHeader;
