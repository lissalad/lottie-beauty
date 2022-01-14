import classNames from "classnames";
import Link from "next/link";

function DesktopHeader({ title }) {
  const navStyle =
    "hover:bg-pink-300/40 whitespace-nowrap flex items-center transition-all duration-300 text-2xl p-3 hover:text-3xl ";
  console.log("desktop header");

  // londrina outline for handwritten outline
  // monofett is real bubbly
  // rampart one handwritten but shading
  // tourney very gamer
  // bungee outline also gamer but all caps

  return (
    <div className="flex flex-row justify-between items-center shadow-lg top-0 sticky z-[1000] px-12 bg-rose-800/70 backdrop-blur-lg flex-wrap text-slate-200 ">
      <div className="flex flex-wrap whitespace-wrap">
        <Link passHref href="/">
          <a className={classNames("flex flex-row items-center")}>
            <div className={classNames("flex flex-row items-center self-center my-2")}>
              <h1
                className={classNames(
                  "text-[100px] font-bold font-['monofett'] leading-[100px] mb-4 mr-12 hover:text-[110px] transition-all duration-200"
                )}
              >
                {title}
              </h1>
              <div
                className={classNames(
                  "flex flex-row whitespace-wrap flex-wrap text-2xl w-fit tracking-widest"
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
        </Link>
      </div>
      <div className="">
        <nav className="flex flex-grow-1 flex-row-reverse xs:bg-black items-center text-white ">
          <Link passHref href="/abouttheartist">
            <a className={navStyle}>About the Artist</a>
          </Link>
          <p className="text-4xl p-6">•</p>
          <Link passHref href="/hair">
            <a className={navStyle}>Hair</a>
          </Link>
          <Link passHref href="/makeup">
            <a className={navStyle}>Makeup</a>
          </Link>
          <Link passHref href="/sfx">
            <a className={navStyle}>SFX</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default DesktopHeader;
