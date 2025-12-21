import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

function Process() {
  const renderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={` ${
          item.id === 2 || item.id === 4 ? "sm:self-end " : "self-start"
        } mt-12 sm:mt-0  flex  sm:flex-col justify-center items-center `}
      >
        <span className="hidden sm:flex   xl:w-18 xl:h-18 md:w-12 md:h-12 w-8 h-8 flex items-center justify-center outline-dashed lg:outline-4 outline-2 outline-zinc-800 bg-zinc-800 text-white outline-offset-7 rounded-full  text-8xl  bg-zinc-800  ">
          {item.number}
        </span>
        <div className="flex items-center lg:mt-8 mt-4">
          <div>
            <span className="md:w-10 md:h-10  w-8 h-8   lg:mr-8 mr-4 text-white xl:w-15 xl:h-15 lg:w-12 lg:h-12 rounded-full flex justify-center items-center text-xl md:text-3xl     flex bg-gradient-to-b from-orange-400 to-orange-500">
              {item.icon}
            </span>
          </div>
          <div>
            <h4 className="md:text-lg sm:text-md text-lg text-zinc-800 xl:text-2xl lg:text-xl font-bold ">
              {item.title}
            </h4>
            <p className="text-zinc-600 mt-2 xl:text-md text-sm">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section
      id="Process"
      className="xl:px-14 md:px-10 px-4 mx-auto xl:max-w-[95%] max-w-[98%]  py-20"
    >
      <div className="w-fit mr-auto">
        <Heading hilight="Our" header="Process" />
      </div>
      <div className="sm:flex  xl:h-[430px] lg:h-[370px] sm:h-[330px] mt-16    sm:mt-20 gap-0  xl:gap-10 justify-center">
        {renderSteps}
      </div>
    </section>
  );
}

export default Process;
const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader ",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader ",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader ",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader ",
    icon: <BsTruck />,
  },
];
