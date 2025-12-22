import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cust1 from "../../assets/customer1-C1pDPVLK.webp";
import cust2 from "../../assets/customer2-CO6kEFHQ.webp";
import cust3 from "../../assets/customer3-PocJ9rGJ.webp";
import cust4 from "../../assets/customer4-5qRM4Jtl.webp";
import cust5 from "../../assets/customer5-BO9N9mpm.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

function Customer() {
  return (
    <section id="customer" className="mb-20">
      <div className="mx-auto max-w-[92%] mt-20">
        <Heading hilight="Customers" header="Saying" />
        <div className="py-5 flex justify-end gap-x-4">
          <button className="custom-prev text-xl  flex justify-center  items-center cursor-pointer hover:text-white  hover:bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg  w-9 h-9 bg-zinc-100">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-xl flex justify-center  items-center cursor-pointer hover:text-white  hover:bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg  w-9 h-9 bg-zinc-100">
            <IoIosArrowForward />
          </button>
        </div>
        <Swiper
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          loop={true}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          modules={[Navigation]}
        >
          {reviews.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-5" key={item.id}>
                <div className="flex gap-5 items-center">
                  <div className="w-13 h-13 overflow-hidden rounded-full ">
                    <img loading="lazy" src={item.src} alt="" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">{item.name} </h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-lg mt-4 text-yellow-500">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-zinc-600 text-sm">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Customer;
const reviews = [
  {
    id: 1,
    name: "Alyaa Ahmed",
    profession: "Food Blogger",
    rating: 5,
    para: "Great quality fruits and vegetables! Delivery was fast and everything arrived fresh.",
    src: cust1,
  },
  {
    id: 2,
    name: "Ali Mathews",
    profession: "Chef",
    rating: 4,
    para: "Loved the organic section. A few items were out of stock, but overall a good experience.",
    src: cust2,
  },
  {
    id: 3,
    name: "Michael Lee",
    profession: "Fitness Trainer",
    rating: 3,
    para: "Good variety of healthy products. Would love to see more protein snack options.",
    src: cust4,
  },
  {
    id: 4,
    name: "Alyaa Ahmed",
    profession: "Teacher",
    rating: 5,
    para: "Affordable prices and fast delivery. Their dairy products are always fresh",
    src: cust3,
  },
  {
    id: 5,
    name: "Aya Ali ",
    profession: "Marketing Specialist",
    rating: 4,
    para: "Smooth experience overall. Delivery was a bit late, but the groceries were fresh",
    src: cust5,
  },
];
