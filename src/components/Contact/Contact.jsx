import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [status, setStatus] = useState("");

  const onSubmit = (data) => {
    setStatus("Sending...");

    emailjs
      .send("service_4qv4ty7", "template_nqnkn62", data, "LpWoPihqVR9mnLS31")
      .then(() => {
        setStatus("Message Sent Successfully ✔️");
        reset();
      })
      .catch(() => setStatus("Failed to Send ❌"));
  };

  return (
    <section className=" bg-gray-50 py-35 md:py-40  lg:px-4" id="contact">
      <div className="max-w-[90%]  mx-auto  grid  sm:grid-cols-2 gap-7 md:gap-7 lg:gap-14">
        {/* LEFT — FORM */}
        <div className="bg-white contactform  shadow-xl p-2 md:p-8 rounded-2xl">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-bold">
            Contact Us
          </h2>
          <p className="text-gray-600 lg:text-md text-sm mt-8 mb-4">
            We’re here to help you with your grocery needs.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-md lg:text-lg">
                Full Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                className={`w-full border rounded-lg p-2  outline-orange-600 ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-600 text-md mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-md lg:text-lg">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                })}
                className={`w-full border rounded-lg p-2  outline-orange-600 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="text-red-600 text-md mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium text-md lg:text-lg">
                Phone (optional)
              </label>
              <input
                {...register("phone")}
                className="w-full border rounded-lg p-2  outline-orange-600"
                placeholder="Phone number"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-md lg:text-lg">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                className={`w-full border rounded-lg p-3 outline-orange-600 ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-md mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2   rounded-lg font-medium hover:bg-orange-500 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center mt-3 text-lg text-green-700 font-medium">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* RIGHT — INFO */}
        <div className="space-y-8 sm:p-1 p-3 md:p-8  rounded-2xl">
          <h3 className="xl:text-3xl lg:text-2xl text-xl font-bold">
            Get in Touch
          </h3>
          <p className="text-gray-600 lg:text-md text-sm">
            Got questions about delivery, fresh products, or your order? We're
            always here to help!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-orange-400 text-lg lg:text-2xl" />
              <span className="xl:text-xl lg:text-lg text-sm md:text-md">
                support@groceryshop.com
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-orange-400 text-lg lg:text-2xl" />
              <span className="xl:text-xl lg:text-lg text-sm md:text-md">
                +20 100 000 0000
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-orange-400 text-lg lg:text-2xl" />
              <span className="xl:text-xl lg:text-lg text-sm md:text-md">
                Cairo, Egypt
              </span>
            </div>
          </div>

          <div>
            <h4 className="xl:text-2xl lg:text-xl text-lg font-semibold mb-3">
              Follow Us
            </h4>
            <div className="flex gap-4 text-orange-600 lg:text-xl text-lg xl:text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
