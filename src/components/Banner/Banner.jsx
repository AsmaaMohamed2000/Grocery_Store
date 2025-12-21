import React from "react";

function Banner(props) {
  return (
    <div
      className=" bg-center bg-cover h-[50vh] mt-25 flex justify-center items-center relative"
      style={{ backgroundImage: `url(${props.src})` }}
    >
      <h2 className="xl:text-5xl lg:text-3xl sm:text-2xl text-xl z-5 text-zinc-800 bg-white p-5 rounded-xl font-bold ">
        {props.title}
      </h2>
      <div className="bg-black/40 absolute inset-0"></div>
    </div>
  );
}

export default Banner;
