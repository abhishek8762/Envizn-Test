import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center px-6 py-4 bg-orange-100">
      <div className="text-2xl font-bold text-light-green">BaliWithFlow</div>

      <div className="ml-auto hidden md:flex items-center gap-6">
        <nav className="flex items-center gap-6 text-green-950">
          <a href="#">Home</a>
          <a href="#">Experiences</a>
          <a href="#">Guide</a>
          <a href="#" className="flex items-center">
            Itineraries <ChevronDown size={18} className="ml-1" />
          </a>
          <a href="#">FAQ</a>
        </nav>

        <button className="bg-green-900 text-white px-4 py-2 rounded-3xl">
          Book a call
        </button>
      </div>

      <button
        className="ml-auto md:hidden text-green-900"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-orange-100 shadow-md border-t">
          <nav className="flex flex-col gap-4 px-6 py-4 text-green-950">
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              Experiences
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              Guide
            </a>
            <a
              href="#"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Itineraries <ChevronDown size={18} className="ml-1" />
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
            <button
              className="bg-green-900 text-white px-4 py-2 rounded-3xl mt-2"
              onClick={() => setIsOpen(false)}
            >
              Book a call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
