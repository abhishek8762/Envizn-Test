import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    stars: 5,
    text: "We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike I’ll never forget — every detail felt like it was made for us. I didn’t worry once. It was honestly the best week of our lives.",
    name: "Emily & Josh",
    location: "Newlyweds, NYC",
  },
  {
    stars: 5,
    text: "I booked a few day trips to get out of Canggu and wow… life-changing. I saw a sunrise from the top of a volcano, had lunch with a local family, and worked from a bamboo treehouse with the best WiFi I’ve had in months. Totally inspired.",
    name: "Lena Ray",
    location: "Solo Traveler, Berlin",
  },
  {
    stars: 5,
    text: "Flora’s guide made everything so easy. It’s like your well-traveled best friend whispering in your ear: Skip this, go here, trust me. I downloaded it the night before my flight and felt totally ready. Worth 10x the price.",
    name: "Thomas",
    location: "First-Time Visitor, London",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // watch screen size and adjust how many items to show
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // mobile: 1 review at a time
      } else {
        setItemsPerSlide(3); // desktop: show all 3
      }
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
    <section className="px-8 py-12 bg-cream">
      <div className="text-center mb-8">
        <div className="text-3xl md:text-5xl text-green-900 font-bold mb-4">
          What our escapees say about us
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how escapees from around the world experienced the real Bali —
          curated with care, heart, and local soul.
        </p>
      </div>

      <div className="flex justify-center gap-6">
        {reviews.slice(index, index + itemsPerSlide).map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 max-w-sm flex flex-col"
          >
            <div className="text-yellow-500 mb-3">
              {"★".repeat(review.stars)}
            </div>
            <p className="text-gray-800 mb-4">{review.text}</p>
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.location}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
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
