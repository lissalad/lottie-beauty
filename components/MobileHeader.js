import classNames from "classnames";
import Link from "next/link";

function MobileHeader({ title }) {
  const navStyle = "hover:bg-pink-200/40 px-3 transition-all duration-500";

  console.log("mobile header");

  return (
    <>
      <div className="flex flex-row justify-center z-[1000] pt-2 pb-1 bg-rose-800/70 backdrop-blur-lg text-white">
        <Link passHref href="/">
          <a className="flex flex-row items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-7xl font-bold font-['monofett'] mx-5 -mt-3">{title}</h1>
              <h2 className="text-xl tracking-widest">Lottie Thorsen • Cosmetologist</h2>
            </div>
          </a>
        </Link>
      </div>
      <div className="w-full sticky justify-center top-0 flex flex-row z-[1000] bg-rose-800/50 backdrop-blur-lg text-white">
        <nav className="text-md flex flex-row w-full justify-evenly leading-loose">
          <Link passHref href="/abouttheartist">
            <a className={navStyle}>About the Artist</a>
          </Link>
          <p className="">•</p>
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
    </>
  );
}

export default MobileHeader;
