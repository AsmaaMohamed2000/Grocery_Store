import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { useCart } from "../ContextCard/contexts/CartProvider";

function Cart() {
  const { state, addToCart, decreaseQuantity, increaseQuantity } = useCart();
  const [opened, setopened] = useState(false);
  const [price, setprice] = useState("");
  const cart = state.cart; 
  const totalPrice = () => {
    const price = state.cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    setprice(price);
    setopened(true);
  };
  const handleRemove = (item) => {
    addToCart(item, true); 
  };
  const handleMinus = (item) => {
    decreaseQuantity(item);
  };
  const handlePlus = (item) => {
    increaseQuantity(item);
  };

  if (cart.length === 0) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <p className="text-center  text-xl mt-10">Your cart is empty.</p>;
      </div>
    );
  }

  return (
    <div className="mt-44">
      <div className=" cardItems  max-w-[80%] mb-14  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 md:gap-y-12 md:gap-x-6 gap-7 gap-y-10 md:max-w-[90%] mx-auto">
        {cart.map((item) => (
          <div key={item.id} className="bg-zinc-100  cards p-5  rounded-xl">
            <div className="flex justify-between">
              {/*  Increase Quantity */}
              <button
                onClick={() => handlePlus(item)}
                className="bg-gradient-to-b from-orange-300 to-orange-500 text-white text-lg px-2 py-1 rounded-lg"
              >
                <FaPlus />
              </button>
              <button
                onClick={() => handleMinus(item)}
                className="bg-gradient-to-b from-orange-300 to-orange-500 text-white text-md px-2 py-1 rounded-lg"
              >
                <FiMinus />
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

              <p className="text-xl font-bold mb-4">
                Quantity: {item.quantity}
              </p>

              {/* Remove From Cart Button */}
              <button
                className="[white-space:nowrap]
    bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg text-md outline-none border-0 hover:scale-110 font-bold  text-white px-3 py-1 "
                onClick={() => handleRemove(item)}
              >
                {" "}
                Remove From Cart{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <button
          onClick={totalPrice}
          className="[white-space:nowrap]
    bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg text-md outline-none border-0 hover:scale-110 font-bold  text-white px-3 py-1 "
        >
          Total Price{" "}
        </button>
      </div>
      {opened && (
        <div className="fixed inset-0 bg-[#313030FF]/50 flex justify-center items-center">
          <div className="bg-white flex flex-col justify-center p-7 rounded-xl ">
            <h2 className="text-xl text-center font-bold">
              Total Price : $ {price.toFixed(3)}
            </h2>
            <button
              onClick={() => setopened(false)}
              className="[white-space:nowrap] mt-7
    bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg text-md outline-none border-0 hover:scale-110 font-bold  text-white px-3 py-1 "
            >
              Confirm Shopping
            </button>
            <p className="text-xl text-center mt-3 font-bold">OR</p>
            <button
              onClick={() => setopened(false)}
              className="[white-space:nowrap] mt-5
    bg-gradient-to-b from-red-500 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg text-md outline-none border-0 hover:scale-110 font-bold  text-white px-3 py-1 "
            >
              Cancle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
