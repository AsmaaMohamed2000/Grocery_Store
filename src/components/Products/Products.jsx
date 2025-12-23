import React, { useState } from "react";
import Heading from "../Heading/Heading";
import productList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

function Products() {
  const categories = ["ALL", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTap, setActiveTap] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(8);
  let filtered =
    activeTap === "ALL"
      ? productList
      : productList.filter((itm) => itm.category === activeTap);
  let renderCards = filtered.slice(0, visibleCount).map((item) => {
    return (
      <Cards
        key={item.id}
        id={item.id}
        src={item.image}
        title={item.name}
        price={item.price}
      />
    );
  });
  return (
    <section>
      <div
        id="products"
        className="mt-8 py-8 mx-auto max-w-[94%]   sm:max-w-[90%] md:max-w-[95%] xl:max-w-[100%]  px-4 md:px-6 xl:px-0"
      >
        <Heading hilight="Our" header="Products" />
        <div className="flex flex-wrap gap-3 justify-center mt-16">
          {categories.map((item) => {
            return (
              <button
                onClick={() => {
                  setActiveTap(item);
                }}
                className={`rounded-lg cursor-pointer outline-none border-0 px-3 py-1 text-md  ${
                  activeTap === item
                    ? "bg-gradient-to-b from-orange-300 to-orange-500 text-white"
                    : "bg-zinc-100"
                }`}
                key={item}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="max-w-[550px] md:max-w-[800px]  lg:max-w-[1200px] 2xl:max-w-[1300px] mx-auto cardItems sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 2xl:gap-x-12 md:gap-y-12 md:gap-x-5 gap-7 gap-y-10 sm:gap-x-10 mt-24">
          {renderCards}
        </div>
        <div className="text-center mt-16  ">
          <div className="text-center mt-16">
            {filtered.length > 8 &&
              (visibleCount < filtered.length ? (
                <button
                  className='[white-space:nowrap]
    bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg text-md outline-none border-0 hover:scale-110 font-bold  text-white px-3 py-1 " onClick={handleShopNow}>{isInCart ? "Remove From Cart" : "Add To Cart"}</button>
    '
                  onClick={() => setVisibleCount(filtered.length)}
                >
                  View All
                </button>
              ) : (
              
                <button
                  className='[white-space:nowrap]
    bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg text-md outline-none border-0 hover:scale-110 font-bold  text-white px-3 py-1 " onClick={handleShopNow}>{isInCart ? "Remove From Cart" : "Add To Cart"}</button>
    '
                  onClick={() => setVisibleCount(8)}
                >
                  View Less
                </button>
              
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
