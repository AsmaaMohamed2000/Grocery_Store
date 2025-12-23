import React from "react";
import { FaLeaf, FaIndustry, FaCheckCircle, FaTruck } from "react-icons/fa";

function Proces() {
  return (
    <section id="proces" className="w-[90%] mx-auto mt-30 py-16 bg-gray-50">
      <div className="  ">
        <h3 className="text-orange-500 text-2xl font-semibold mb-2">
          Our Process
        </h3>
        <h2 className="xl:text-3xl lg:text-2xl md:text-xl md:text-4xl font-bold text-gray-800 mb-12">
          How We Bring Freshness to Your Table
        </h2>

        <div className="   grid md:grid-cols-2 gap-10 lg:gap-20 xl:gap-x-30">
          {/* Sourcing */}
          <div className="bg-white p-6 flex lg:gap-9 gap-4 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-orange-500 text-3xl lg:text-4xl mb-4 ">
              <FaLeaf />
            </div>
            <div>
              <h4 className="lg:text-xl text-md  font-bold mb-2 text-gray-800">
                Sourcing
              </h4>
              <p className="text-gray-600 text-sm md:text-md lg:text-lg">
                We partner with trusted organic farms to handpick the freshest
                fruits and vegetables. Each supplier is carefully evaluated to
                ensure sustainable farming and chemical-free produce.
              </p>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="bg-white p-6 flex lg:gap-9 gap-4 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-orange-500 text-3xl lg:text-4xl mb-4 ">
              <FaIndustry />
            </div>
            <div>
              <h4 className="lg:text-xl text-md  font-bold mb-2 text-gray-800">
                Manufacturing
              </h4>
              <p className="text-gray-600">
                Our state-of-the-art processing ensures that all produce is
                cleaned, sorted, and packaged safely. We maintain strict hygiene
                protocols to preserve the natural taste and nutrients.
              </p>
            </div>
          </div>

          {/* Quality Control */}
          <div className="bg-white p-6 flex lg:gap-9 gap-4 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-orange-500 text-3xl lg:text-4xl mb-4 ">
              <FaCheckCircle />
            </div>
            <div>
              <h4 className="lg:text-xl text-md  font-bold mb-2 text-gray-800">
                Quality Control
              </h4>
              <p className="text-gray-600">
                Every batch undergoes rigorous inspections for freshness,
                ripeness, and overall quality. Only the finest fruits and
                vegetables are approved for delivery to our customers.
              </p>
            </div>
          </div>

          {/* Logistics */}
          <div className="bg-white p-6 flex lg:gap-9 gap-4  rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-orange-500 text-3xl lg:text-4xl mb-4 ">
              <FaTruck />
            </div>
            <div>
              <h4 className="lg:text-xl text-md font-bold mb-2 text-gray-800">
                Logistics
              </h4>
              <p className="text-gray-600">
                Our fast and reliable delivery network ensures your orders reach
                you fresh and on time. We use temperature-controlled
                transportation to maintain peak freshness from farm to table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proces;
