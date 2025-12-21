import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="whitespace-nowrap
    bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 cursor-pointer rounded-lg lg:text-xl hover:scale-110 font-bold  text-white px-4 py-2 sm:px-5 lg:px-8 sm:py-2 lg:py-3  "
    >
      {props.desc}
    </button>
  );
}

export default Button;
