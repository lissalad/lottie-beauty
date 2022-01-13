import Link from "next/link";
import classNames from "classnames";

function galleryImage({ image, caption }) {
  const imgStyle = "w-full md:w-[600px] rounded-sm ";
  const figCapStyle =
    "text-5xl absolute opacity-0 group-hover:opacity-100 absolute w-full text-center bg-lime-500/40 backdrop-blur py-8 bottom-0 transition-all duration-500";

  return (
    <div className="relative group flex justify-center m-2">
      <img className={imgStyle} src={image} />
      <p className={figCapStyle} styles="background-color:blue;">
        {caption}
      </p>
    </div>
  );
}

export default galleryImage;
