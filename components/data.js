// console.log("desktop header");

//   return (
//     <div className="flex flex-row w-full items-center justify-between">
//       {/* <header className="flex flex-row justify-center z-[1000] pt-2 pb-1 bg-white/70"> */}
//       {/* <div> */}
//       <a href="/" className={classNames("flex flex-row items-center")}>
//         <img
//           className={classNames("w-[100px] h-[100px] border-4 p-2 border-black rounded-sm")}
//           src="/images/profile.jpg"
//         />
//         <div className={classNames("mt-3 mb-3 flex flex-col", "md:items-left")}>
//           <h1 className={classNames("text-7xl font-bold font-['Bebas_Neue'] mx-5 tracking-wider")}>
//             {title}
//           </h1>
//           <h2 className={classNames("text-xl")}>Lottie Thorsen • Cosmetologist</h2>
//         </div>
//       </a>
//       {/* </div> */}
//       {/* </header> */}
//       <div className=" sticky justify-center top-0 flex flex-row backdrop-blur z-[1000] bg-white/50">
//         <nav
//           className={classNames(
//             "text-md flex flex-row w-full justify-evenly leading-loose  text-xl",
//             "md:flex-row-reverse md:my-0 md:ml-auto md:text-2xl"
//           )}
//         >
//           <a href="/abouttheartist" className={navStyle}>
//             About the Artist
//           </a>
//           <p className="">•</p>
//           <a href="/hair" className={navStyle}>
//             Hair
//           </a>
//           <a href="/makeup" className={navStyle}>
//             Makeup
//           </a>
//           <a href="/sfx" className={navStyle}>
//             SFX
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default DesktopHeader;

// function DesktopHeader({ title }) {
// const navStyle = "hover:bg-sky-100 px-3 md:px-5 md:py-2 rounded transition-all duration-500";

<div className="flex flex-col h-100  mt-4">
  {/* LOTTIE THORSEN */}
  <div
    className={classNames(
      "flex flex-row justify-center py-3 w-full bg-lime-200 ",
      "md:flex-row md:justify-center"
    )}
  >
    <h1 className={classNames("text-6xl text-center", "md:text-9xl md:flex")}>Lottie Thorsen</h1>
  </div>
  <div className="mx-4">
    {/* TEXT */}
    <div className="flex items-center md:mt-4 ">
      {/* <img className="" src="/images/medea.png" /> */}
      <p className="text-lg my-2 indent-6 md:w-[40%] leading-snug">
        Lottie is currently training in cosmetology at the San Francisco Institute of Esthetics &
        Cosmetology. Her focus is in makeup and color specialty. She loves SFX and prosthetic work.
        Someday she intends to work in the stage and screen industry. She has experience as a makeup
        artist for short film Medea (2018).
      </p>
    </div>
    {/* PIC + SOCIALS */}

    {/* <div className="flex flex-row items-end justify-around md:flex-col-reverse"> */}
    <>
      <div className="flex flex-col leading-relaxed text-pink-900 underline text-md mx-4">
        <a className="whitespace-wrap underline ml-auto" href="https://sfiec.edu/">
          San Francisco Institute of Esthetics and Cosmetology
        </a>
        <a
          className="whitespace-nowrap w-fit ml-auto"
          href="https://www.instagram.com/lottiedrinksblood/"
        >
          @LOTTIEDRINKSBLOOD
        </a>
        <a className="w-fit ml-auto" href="https://www.imdb.com/seen/nm10223261/">
          Lottie Thorsen IMDB
        </a>
      </div>
      <div className="w-fit -mt-10 ml-5 flex ">
        <img className=" h-[150px] border-4 border-black md:h-80 mb-4" src="/images/lottie.jpg" />
      </div>
    </>
  </div>
</div>;
