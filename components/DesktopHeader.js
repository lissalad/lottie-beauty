import classNames from "classnames";

function DesktopHeader({ title }) {
  const navStyle =
    "hover:bg-sky-300/60 px-7 h-[200px] flex items-center transition-all duration-500 text-4xl p-6";
  const frame = "w-[150px] h-[150px] p-2 border-black border-[15px] rounded-sm";
  console.log("desktop header");

  // londrina outline for handwritten outline
  // monofett is real bubbly
  // rampart one handwritten but shading
  // tourney very gamer
  // bungee outline also gamer but all caps

  return (
    <>
      <div className="flex flex-row justify-between items-center shadow-lg top-0 sticky z-[1000] px-12 bg-rose-800/70 backdrop-blur-lg flex-wrap text-slate-200">
        <div className="">
          <a href="/" className={classNames("flex flex-row items-center")}>
            {/* <img
              className={classNames(
                "h-[170px] shadow-2xl rounded-sm border-r-[10px] border-b-[10px] mb-3 border-white pb-1 pr-1 bg-black"
              )}
              src="/images/profile.jpg"
            /> */}
            <div className={classNames("flex h-[200px] flex-col items-center leading-tight")}>
              <h1 className={classNames("text-[120px] font-bold font-['monofett'] mx-5 -my-2")}>
                {title}
              </h1>
              <h2 className={classNames("text-[25px] tracking-widest flex-nowrap")}>
                Lottie Thorsen • Cosmetologist
              </h2>
            </div>
          </a>
        </div>
        <div>
          <nav className="flex flex-row-reverse justify-right items-center w-[700px] text-white">
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
    </>
  );
}

export default DesktopHeader;
