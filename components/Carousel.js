import classNames from "classnames";

function Carousel({ images }) {
  const image = "w-[300px] h-[300px] ";

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative mx-auto p-5 shadow-2xl px-5 bg-white "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative flex items-center ">
        <div className="carousel-item active float-left my-auto">
          <img
            src="/images/prom/braidcrown1.jpg"
            className={image}
            alt="Separating Pieces of Hair"
          />
        </div>
        <div className="carousel-item float-left">
          <img src="/images/prom/braidcrown2.png" className={image} alt="Braiding Hair" />
        </div>
        <div className="carousel-item float-left">
          <img src="/images/prom/makeup.png" className={image} alt="Applying Makeup" />
        </div>
        {/* <div className="carousel-item float-left ">
          <img src="/images/prom/makeup3.jpg" className={image} alt="Applying Makeup" />
        </div> */}
      </div>
      <div className="flex flex-col">
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
