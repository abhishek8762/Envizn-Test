// src/components/ExperienceSlider.js
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import high1 from "./../assets/high1.png";
import high2 from "./../assets/high2.png";

const slides = [
  {
    img: high1, // replace with your imported image
    caption: "Balinese Day with a local family",
  },
  {
    img: high2,
    caption: "Visit a local temple",
  },
];

const ExperienceSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-3xl px-10 lg:px-15">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-green-900">
          Experience Highlights
        </h2>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5 text-green-900" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <ArrowRight className="w-5 h-5 text-green-900" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {slides.slice(current, current + 2).map((slide, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={slide.img}
              alt={slide.caption}
              className="rounded-2xl object-cover w-full h-64"
            />
            <p className="mt-2 font-medium">{slide.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSlider;
