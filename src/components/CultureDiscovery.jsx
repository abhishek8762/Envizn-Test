import React from "react";
import { ArrowRight, Gem, Leaf, Heart, Compass } from "lucide-react";

const CultureDiscovery = () => {
  return (
    <section className="lg:px-17 md:px-17 px-12 py-8 ">
      <div className="text-2xl text-green-900 font-bold mb-4">
        Discover Local Culture with a Balinese Family (Tiwi)
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
      <button className="text-dark-green underline mt-7 ml-5">
        Show Details
      </button>
    </section>
  );
};

export default CultureDiscovery;
