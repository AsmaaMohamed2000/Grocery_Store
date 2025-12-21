import React from "react";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../ContextCard/contexts/CartProvider";

function Favourites() {
  const { state, addToLikedItems } = useCart();
  const likedItems = state.likedItems;

  const handleUnlike = (item) => {
    addToLikedItems(item);
  };

  if (likedItems.length === 0) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <p className="text-center  text-xl mt-10">No favourites yet.</p>;
      </div>
    );
  }

  return (
    <div className="mt-30">
      <div className=" cardItems  max-w-[80%] mb-14  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 md:gap-y-12 md:gap-x-6 gap-7 gap-y-10 md:max-w-[90%] mx-auto">
        {likedItems.map((item) => (
          <div key={item.id} className="bg-zinc-100 p-5 cards  rounded-xl">
            <div className="flex justify-between">
              {/*  Unlike button */}
              <button
                onClick={() => handleUnlike(item)}
                className="text-2xl text-red-600"
              >
                <FaHeart />
              </button>
            </div>

            <div className="w-full h-40">
              <img
                className="w-full h-full object-contain"
                src={item.src}
                alt={item.title}
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="text-xl font-bold mt-6 mb-3">
                $ {Number(item.price).toFixed(2)}
              </p>

              {/* No quantity here — favourites are not cart items */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourites;
