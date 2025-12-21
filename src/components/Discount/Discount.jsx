import React from "react";
import fruitsFresh from "../../assets/fresh-fruits.png";
function Discount() {
  return (
    <section
      className="bg-zinc-100 mt-24 bg-contain bg-right bg-no-repeat "
      style={{ backgroundImage: `url(${fruitsFresh})` }}
    >
      <div className="bg-zinc-100 sm:bg-transparent  py-10 mx-auto max-w-[100%] md:max-w-[98%] xl:max-w-[90%] md:px-8 sm:px-3 px-8  flex flex-col sm:flex-row flex-wrap ">
        <span className="lg:text-6xl md:text-5xl  text-4xl mb-4 sm:mb-0 font-bold h-fit sm:self-center text-orange-500  sm:-rotate-90">
          20%
        </span>
        <div className="xl:max-w-[700px] max-w-[500px] ">
          <h3 className=" lg:text-4xl md:text-3xl text-2xl text-zinc-800 font-bold ">
            First order discount!
          </h3>
          <p className="text-zinc-600 my-5 text-sm lg:text-md ">
            Enjoy an exclusive first order discount on our grocery website! shop
            fresh essentials and save big on your first purchase , fast delivery
            and quality guaranteed
          </p>
          <button
            className='[white-space:nowrap]
    bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg text-md outline-none border-0 hover:scale-110 font-bold  text-white px-3 py-1 " onClick={handleShopNow}>{isInCart ? "Remove From Cart" : "Add To Cart"}</button>
      '
          >
            Get a discount
          </button>
        </div>
      </div>
    </section>
  );
}

export default Discount;
