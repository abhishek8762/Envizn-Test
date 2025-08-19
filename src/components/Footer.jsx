// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10 mt-10 relative">
      <div className="absolute inset-0 bg-[url('/src/assets/leaf-pattern.png')] opacity-10"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-4">
          <h1 className="text-yellow-500 font-bold text-xl lg:-mt-2 lg:mb-8">
            Baliwithflow
          </h1>
        </div>

        <nav className="flex justify-center gap-6 mb-13 text-sm">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Experiences
          </a>
          <a href="#" className="hover:underline">
            Guide
          </a>
          <a href="#" className="hover:underline">
            Itineraries
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
        </nav>

        <hr className="border-gray-400 mb-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
          <p>© 2024 Bali With Flow. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Terms of Service
            </a>
            <a href="#" className="underline">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
