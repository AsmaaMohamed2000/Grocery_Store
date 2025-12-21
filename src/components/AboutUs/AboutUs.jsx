import React from "react";
import fresh from "../../assets/fresh-fruits.png";
import { useNavigate } from "react-router-dom";
function AboutUs() {
  const Navigate = useNavigate();
  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${fresh})`,

        backgroundRepeat: "no-repeat",
      }}
      className={`w-full pt-5  bg-cover
bg-right `}
    >
      <div className="mx-auto max-w-[80%] mt-25 py-12">
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">About Us</h3>
          <h2 className="lg:text-3xl md:text-2xl text-lg font-bold text-gray-800 leading-snug">
            Your trusted source for fresh & organic goodness
          </h2>

          <p className="text-gray-600 mt-4 md:max-w-[70%] text-sm md:text-md  leading-relaxed">
            At Grocify, we believe that healthy living starts with clean,
            natural food. From day one, our mission has been to deliver 100%
            organic fruits and vegetables — fresh, flavorful, and straight from
            trusted farms.
          </p>

          <p className="text-gray-600 mt-3 md:max-w-[70%] text-sm md:text-md leading-relaxed">
            We are committed to quality, purity, and sustainability, ensuring
            that your family enjoys nutritious food without harmful chemicals.
            Your health is our priority.
          </p>

          <ul className="mt-5 space-y-2 text-sm md:text-md  text-gray-700">
            <li>✔ 100% Fresh & Organic</li>
            <li>✔ Direct from trusted farms</li>
            <li>✔ Fast & safe delivery</li>
            <li>✔ Premium quality at the best prices</li>
          </ul>

          <button
            onClick={() => {
              Navigate("/Proces");
            }}
            className="mt-6 px-4  md:py-2 py-1 text-sm bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
