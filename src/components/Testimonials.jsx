import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Av1 from "../assets/av1.png";
import Av2 from "../assets/av2.png";
import Av3 from "../assets/av3.png";

const reviews = [
  {
    stars: 5,
    text: "We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike I’ll never forget — every detail felt like it was made for us. I didn’t worry once. It was honestly the best week of our lives.",
    name: "Emily & Josh",
    location: "Newlyweds, NYC",
    image: Av1,
  },
  {
    stars: 5,
    text: "I booked a few day trips to get out of Canggu and wow… life-changing. I saw a sunrise from the top of a volcano, had lunch with a local family, and worked from a bamboo treehouse with the best WiFi I’ve had in months. Totally inspired.",
    name: "Lena Ray",
    location: "Solo Traveler, Berlin",
    image: Av2,
  },
  {
    stars: 5,
    text: "Flora’s guide made everything so easy. It’s like your well-traveled best friend whispering in your ear: Skip this, go here, trust me. I downloaded it the night before my flight and felt totally ready. Worth 10x the price.",
    name: "Thomas",
    location: "First-Time Visitor, London",
    image: Av3,
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const prevReview = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - itemsPerSlide : prev - 1
    );
  };

  const nextReview = () => {
    setIndex((prev) => (prev >= reviews.length - itemsPerSlide ? 0 : prev + 1));
  };

  return (
    <section className="px-6 md:px-12 py-12 bg-cream">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl text-green-900 font-bold mb-4">
          What our escapees say about us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how escapees from around the world experienced the real Bali —
          curated with care, heart, and local soul.
        </p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
        {reviews.slice(index, index + itemsPerSlide).map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 max-w-sm w-full flex flex-col"
          >
            <div className="text-yellow-500 mb-3 text-lg">
              {"★".repeat(review.stars)}
            </div>

            <p className="text-gray-800 mb-6 leading-relaxed">{review.text}</p>

            <div className="mt-auto pt-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover mb-2"
              />
              <p className="font-semibold text-gray-900 leading-tight">
                {review.name}
              </p>
              <p className="text-sm text-gray-500">{review.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevReview}
          className="p-2 border rounded-full hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextReview}
          className="p-2 border rounded-full hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
