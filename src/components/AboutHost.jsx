import React from "react";
import lady from "./../assets/lady.jpg";
import { ArrowRight } from "lucide-react";

const AboutHost = () => {
  return (
    <section className="relative w-full h-[500px] ">
      <img
        src={lady}
        alt="Host"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col justify-center h-full pl-12 w-2/3 text-white ">
        <h2 className="text-3xl font-bold mb-4">About the Host</h2>
        <p className="mb-6 max-w-lg">
          "I've spent 6+ years discovering the real Bali—what most people never
          get to see. I created BaliWithFlow to share that magic with escapes
          who crave depth, soul, and effortless beauty in every detail."
        </p>

        <div className="flex gap-4">
          <button className="w-30 md:w-40 lg:w-40 bg-amber-400 text-white py-2 rounded-2xl flex items-center justify-center gap-2">
            <span>Reserve for Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-transparent border border-white px-5 py-2 rounded">
            Plan Personal Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHost;
