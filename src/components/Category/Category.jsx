import React from "react";
import Heading from "../Heading/Heading";
import fruitsCat from "../../assets/fruits-and-veggies-CgQreu9v.webp";
import seaFoodCat from "../../assets/meat-and-seafood-ByaGhSDD.webp";
import dairyCat from "../../assets/dairy-and-eggs-nhE5E7Q0.webp";
import { Link } from "react-router-dom";
function Category() {
  return (
    <section>
      <div className="lg:px-14 md:px-8 mx-auto max-w-[1200px]">
        <Heading hilight="Shop" header="by category" />
        <div className="flex md:flex-wrap items-center justify-center flex-col md:flex-row md:gap-10 lg:gap-8 xl:gap-8  mt-10 ">
          {category.map((item) => {
            return (
              <div
                key={item.id}
                className=" mt-4  flex flex-col max-w-[300px] sm:max-w-[400px] md:w-[45%] lg:w-[30%]"
              >
                <div className="w-full min-h-[200px] relative -mb-10">
                  <img className="absolute bottom-0" src={item.src} alt="" />
                </div>
                <div className="bg-zinc-100 rounded-xl py-16 pb-8 px-8">
                  <h3 className="text-zinc-800 text-xl   font-bold ">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm    mt-3 mb-6">
                    {item.description}
                  </p>
                  <Link
                    className="bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg lg:text-lg hover:scale-110 font-bold  text-white px-4 py-2 sm:px-5 lg:px-4 sm:py-2 lg:py-1  "
                    to={item.path}
                  >
                    See All
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic, and full of flavor — that’s our promise.Shop a vibrant variety of fruits and vegetables anytime.Your healthy lifestyle starts with every bite.",
    src: fruitsCat,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Meat & SeaFood",
    description:
      "Quality meats and seafood, responsibly sourced and perfectly fresh.Ideal for grilling, cooking, or creating your signature dishes.Taste the difference .",
    src: seaFoodCat,
    path: "/seafood",
  },
  {
    id: 3,
    title: "Dairy & Eggs",
    description:
      "Discover the finest selection of dairy delights and farm-fresh eggs.Creamy, natural, and full of flavor.Wholesome goodness for every moment of your day.",
    src: dairyCat,
    path: "/dairy",
  },
];
