import Link from "next/link";
import classNames from "classnames";

function Header({ title }) {
  const navStyle =
    "hover:bg-sky-100 px-4 rounded transition-all duration-500 w-100 whitespace-nowrap";

  return (
    <>
      <header
        className={classNames(
          "bg-red-50 flex px-9 py-5 flex-col h-fit z-[1000] justify-left self-start",
          "lg:"
        )}
      >
        <a className="flex flex-row" href="/">
          <img
            className={classNames(
              "w-[150px] h-[150px] mr-2 rounded p-2 border-4 border-pink-900/[.6]",
              "xs:max-w-10"
            )}
            src="/images/profile.jpg"
          />
          <div className="mt-3 mb-12">
            <h1 className="text-7xl font-bold font-['Bebas_Neue'] mx-3 tracking-wider">{title}</h1>
            <h2 className="text-xl text-center">Lottie Thorsen • Cosmetologist</h2>
          </div>
        </a>
      </header>
      <nav className="text-2xl flex flex-row sticky top-0 w-screen leading-loose justify-evenly z-[1000] bg-pink-200/80 backdrop-blur">
        <a className={navStyle}>About the Artist</a>
        <p>•</p>
        <a href="/hair" className={navStyle}>
          Hair
        </a>
        <a className={navStyle}>Makeup</a>
        <a className={navStyle}>SFX</a>
      </nav>
    </>
  );
}

export default Header;
