import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { useCart } from "../ContextCard/contexts/CartProvider";
import { FiMinus } from "react-icons/fi";
import { useAuth } from "../AuthContext";
import Swal from "sweetalert2";
function Cards({ id, src, title, price }) {
  const {
    state,
    decreaseQuantity,
    addToCart,
    addToLikedItems,
    increaseQuantity,
  } = useCart();
  const { currentUser } = useAuth();

  const item = { id, title, price, src };

  const isInCart = state.cart.some((c) => c.id === id);
  const isLiked = state.likedItems.some((l) => l.id === id);

  const handleShopNow = () => {
    addToCart(item, isInCart);
    {
      !currentUser
        ? Swal.fire({
            icon: "warning",
            timer: 1700,
            title: "Please log in ",
            showCancelButton: false,
            showConfirmButton: false,
          })
        : isInCart
        ? Swal.fire({
            icon: "success",
            timer: 1700,
            title: "Removed From Cart successfully",
            showCancelButton: false,
            showConfirmButton: false,
          })
        : Swal.fire({
            icon: "success",
            timer: 1700,
            title: "Added to Cart successfully",
            showCancelButton: false,
            showConfirmButton: false,
          });
    }

  };

  const handlePlus = () => {
    increaseQuantity(item);
  };

  const handleMinus = () => {
    decreaseQuantity(item);
  };

  const handleLove = () => {
    addToLikedItems(item); 
    {
      !currentUser
        ? Swal.fire({
            icon: "warning",
            timer: 1700,
            title: "Please Log in ",
            showCancelButton: false,
            showConfirmButton: false,
          })
        : isLiked
        ? Swal.fire({
            icon: "success",
            timer: 1700,
            title: "Removed from favourites successfully",
            showCancelButton: false,
            showConfirmButton: false,
          })
        : Swal.fire({
            icon: "success",
            timer: 1700,
            title: " Added to Favourites Successfully",
            showCancelButton: false,
            showConfirmButton: false,
          });
    }
  };
  return (
    <div className="bg-zinc-100 p-5 shadow-lg rounded-xl cards  ">
      <div className="flex justify-between">
        {/*  LIKE */}
        <button onClick={handleLove} className="text-2xl">
          <FaHeart className={isLiked ? "text-red-600" : "text-zinc-400"} />
        </button>

        {/*  ADD QUANTITY */}
        <div>
          <button
            onClick={handlePlus}
            className="bg-gradient-to-b from-orange-300 to-orange-500 mr-2 text-white text-md px-2 py-1 rounded-lg"
          >
            <FaPlus />
          </button>
          <button
            onClick={handleMinus}
            className="bg-gradient-to-b from-orange-300 to-orange-500 text-white text-md px-2 py-1 rounded-lg"
          >
            <FiMinus />
          </button>
        </div>
      </div>

      <div className="w-full h-40 ">
        <img className="w-full h-full object-contain" src={src} alt={title} />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-xl font-bold mt-6 mb-3">
          $ {Number(price).toFixed(2)}
        </p>
        <button
          className="[white-space:nowrap]
    bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg text-md outline-none border-0 hover:scale-110 font-bold  text-white px-3 py-1 "
          onClick={handleShopNow}
        >
          {isInCart ? "Remove From Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default Cards;
