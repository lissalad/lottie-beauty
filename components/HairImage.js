import Link from "next/link";
import classNames from "classnames";

function HairImage({ image, caption }) {
  const imgStyle = "max-w-[600px] md:w-[300px]";
  const figCapStyle =
    "text-2xl absolute opacity-0 group-hover:opacity-100 absolute w-full text-center bg-lime-500/40 py-8 bottom-0 transition-all duration-200";

  return (
    <div className="relative group border-4 flex justify-center m-4">
      <img className={imgStyle} src={image} />
      <p className={figCapStyle} styles="background-color:blue;">
        {caption}
      </p>
    </div>
  );
}

export default HairImage;
