import React, {  useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
function Footer() {
  const [val, setval] = useState("");
  return (
    <section className="bg-zinc-100 py-20 ">
      <div className="mx-auto flex gap-9 flex-wrap md:max-w-[95%] px-8 max-w-[100%] md:px-12 lg:px-8">
        <div className="flex-1 basis-[300px]">
          <a
            className="xl:text-4xl text-3xl lg:text-3xl md:text-2xl font-bold"
            href=""
          >
            {" "}
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          <p className="text-zinc-600  mt-6 max-w-[340px] text-md">
            {" "}
            Fresh groceries delivered to your doorstep — quality you can trust.
          </p>
          <p className="text-zinc-800 mt-6 ">2025 &copy; all right reserved</p>
        </div>
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800  text-xl  md:text-xl font-bold ">
              Company
            </h5>
          </li>
          <li className="mt-6">
            <Link
              className="hover:text-orange-500 text-zinc-800  "
              to="/aboutUs"
            >
              About
            </Link>
          </li>
          <li className="mt-6">
            <Link className="hover:text-orange-500 text-zinc-800  " to="">
              FAQ
            </Link>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800  text-xl  md:text-xl font-bold ">
              Support
            </h5>
          </li>
          <li className="mt-6">
            <Link className="hover:text-orange-500 text-zinc-800  " to="">
              Support Center
            </Link>
          </li>
          <li className="mt-6">
            <a
              className="hover:text-orange-500 text-zinc-800  "
              href="#customer"
            >
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <Link
              className="hover:text-orange-500 text-zinc-800  "
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div>
          <h5 className="text-zinc-800 text-xl  md:text-xl font-bold ">
            Stay Connected
          </h5>
          <p className="text-zinc-600 mt-6">
            Question for feedback ? <br /> we'd love to hear from you
          </p>
          <div className="mt-8 p-1 rounded-lg">
            <input
              value={val}
              onChange={(e) => setval(e.target.value)}
              className="bg-white md:p-3 p-2  focus:outline-none"
              type="email"
              id="email"
              placeholder="Email Address"
            />
            <button
              onClick={() => setval("")}
              className="bg-orange-400 md:p-3 p-2 rounded-lg text-white text-2xl"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Footer);
