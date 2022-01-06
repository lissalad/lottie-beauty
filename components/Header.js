function Header({ title }) {
  const navStyle = "hover:bg-sky-100 px-5 rounded transition-all duration-500 my-2";

  return (
    <header className="bg-white flex w-fit h-screen mx-0 px-9 py-5 flex-col">
      <img className="w-40 m-5 rounded p-1 border-4 border-gray-300" src="/images/profile.jpg" />
      <div className="mt-3 mb-12">
        <h1 className="text-7xl font-bold font-['Bebas_Neue'] tracking-wider">{title}</h1>
        <h2 className="text-xl">Lottie Thorsen • Cosmetologist</h2>
      </div>
      <nav className="text-3xl w-full mt-12 leading-loose text-right">
        <ul>
          <li className={navStyle}>Hair</li>
          <li className={navStyle}>Makeup</li>
          <li className={navStyle}>About the Artist</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
