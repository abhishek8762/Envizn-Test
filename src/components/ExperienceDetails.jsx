import React from "react";
import { ArrowRight, Gem, Leaf, Heart, Compass } from "lucide-react";

const ExperienceDetails = () => {
  return (
    <section className="lg:px-17 md:px-17 px-12 py-8 flex">
      <div className="w-2/3">
        <div className="text-3xl text-green-900 font-bold mb-7">
          Experience a Day with a Balinese Family
        </div>
        <p className="mb-4">
          Slow down. Watch the light move across the rice fields. Learn how to
          make coconut oil the way it's been done for generations. This is Bali
          with soul — the part you don't find in guidebooks.
        </p>
        <p className="mb-4">
          How can I connect with locals without feeling forced or touristy? You
          spend a day with Tiwi and her family. You help make offerings, walk
          their land, cook lunch together, and share stories. No performance.
          Just presence.
        </p>
        <div className="text-2xl text-green-900 font-bold mb-3">
          What's Included?
        </div>

        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <Gem className="text-orange-500 w-5 h-5" />
            <span>Walk through the rice fields with Tiwi</span>
          </li>
          <li className="flex items-center gap-3">
            <Leaf className="text-orange-500 w-5 h-5" />
            <span>Learn how to make offerings & coconut oil</span>
          </li>
          <li className="flex items-center gap-3">
            <Heart className="text-orange-500 w-5 h-5" />
            <span>Cook & enjoy an authentic Balinese lunch</span>
          </li>
          <li className="flex items-center gap-3">
            <Compass className="text-orange-500 w-5 h-5" />
            <span>Option to stay overnight in the family home</span>
          </li>
        </ul>
      </div>

      <div className="w-2/4 lg:w-1/4 bg-orange-100 border-r-2 border-r-orange-600 border-b-2 border-b-orange-600 p-6  rounded shadow">
        <div className="flex items-center mb-4">
          <span className="text-yellow-400">★★★★★</span>
          <span className="ml-2 font-bold">4.9 (201)</span>
        </div>
        <p className="font-bold text-green-900 mb-3">From IDR 150.000/Person</p>
        <button className="text-black font-extralight underline mt-0 mb-4 ">
          Show Prices
        </button>
        <select className="w-full bg-white border border-dark-green py-2 mb-2">
          <option>Guests</option>
        </select>
        <input
          type="text"
          placeholder="Date and Time"
          className="w-full bg-white border border-dark-green py-2 mt-3 mb-3"
        />
        <input
          type="text"
          placeholder="Select Add Ons"
          className="w-full bg-white border border-dark-green mt-3 mb-3 py-2 "
        />

        <button className="w-30 md:w-40 lg:w-40 bg-green-900 text-white py-2 rounded-2xl flex items-center justify-center gap-2">
          <span>Reserve for Free</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default ExperienceDetails;
