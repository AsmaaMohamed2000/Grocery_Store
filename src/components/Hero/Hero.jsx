import React from "react";
import Grocery from "../../assets/grocery-DbBKyT1r.webp";
function Hero() {
  return (
    <section className="lg:px-20">
      <div className="  min-h-screen  mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center gap-x-15">
        <div className="flex-1 mt-35 md:mt-0">
          <span className="bg-orange-100 text-orange-600 text-xs sm:text-sm lg:text-lg px-5 py-2 rounded-full ">
            Explore Best Quality{" "}
          </span>
          <h1 className="2xl:text-7xl/20 sm:text-4xl/16 text-3xl/13 xl:text-5xl/17 md:text-3xl/12 lg:text-4xl/14 mt-5 font-bold">
            Tasty organic <span className="text-orange-500">fruits</span> &{" "}
            <span className="text-orange-500">veggies</span>
          </h1>
          <p className="text-zinc-600 lg:text-md md:text-sm mt-5 mb-10">
            Fresh, flavorful, and 100% organic. Taste nature’s goodness in every
            bite , Nourish your body with pure, organic produce..
          </p>
          <a
            href="#products"
            className="bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg lg:text-lg hover:scale-110 font-bold  text-white px-4 py-2 sm:px-5 lg:px-5 sm:py-2 lg:py-2  "
          >
            Shop Now
          </a>
        </div>
        <div className="md:flex-1 mt-6 md:mt-0">
          <img
            className="scale-80 sm:scale-75 md:scale-100"
            src={Grocery}
            alt="" loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
