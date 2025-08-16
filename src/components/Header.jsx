import React from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center px-8 py-4 bg-orange-100">
      <div className="text-2xl font-bold text-light-green">BaliWithFlow</div>

      <nav className="flex flex-grow justify-end space-x-6 text-green-950 mr-6">
        <a href="#">Home</a>
        <a href="#">Experiences</a>
        <a href="#">Guide</a>
        <a href="#" className="flex">
          Itineraries <ChevronDown size={25} />
        </a>
        <a href="#">FAQ</a>
      </nav>

      <button className="bg-green-900 text-white px-4 py-2 rounded-3xl">
        Book a call
      </button>
    </header>
  );
};

export default Header;
