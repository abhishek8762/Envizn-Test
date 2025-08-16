import { MapPin, Clock, Users, Briefcase, Earth } from "lucide-react";
import hero1 from "./../assets/hero1.png";
import hero2 from "./../assets/hero2.jpg";
import hero3 from "./../assets/hero3.png";
import hero4 from "./../assets/hero4.png";
import hero5 from "./../assets/hero5.png";
import hero6 from "./../assets/hero6.png";

const Hero = () => {
  return (
    <section className="justify center px-4 py-12 bg-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 ">
        <div className="flex flex-col gap-4">
          <img
            src={hero1}
            alt="Rice fields"
            className="object-cover rounded-xl w-full h-40 md:h-72"
          />
          <img
            src={hero2}
            alt="Statue"
            className="object-cover rounded-xl w-full h-40 md:h-72"
          />
        </div>

        <img
          src={hero3}
          alt="Landscape"
          className="object-cover rounded-xl w-full h-52 md:h-145"
        />

        <div className="flex flex-col gap-4">
          <img
            src={hero4}
            alt="Rice fields"
            className="object-cover rounded-xl w-full h-40 md:h-72"
          />
          <img
            src={hero5}
            alt="Statue"
            className="object-cover rounded-xl w-full h-40 md:h-72"
          />
        </div>
        <img
          src={hero6}
          alt="Landscape"
          className="object-cover rounded-xl w-full h-52 md:h-145"
        />
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <div className="text-5xl text-green-900 font-bold mb-4 md:-mt-135 lg:-mt-145">
          Balinese Day with a Local Family
        </div>
        <p className="text-lg text-gray-700 mb-10 ">
          Immerse yourself in the heart of Balinese culture by spending a day
          with a local family. This authentic experience offers a unique glimpse
          into daily life, traditions, and the warmth of Balinese hospitality.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4 bg-orange-100 border-1 rounded-4xl shadow-sm p-6 text-center max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <MapPin className="text-orange-500 mb-2" />
          <span className="font-medium">Location</span>
          <span className="text-gray-600 text-sm">Kaleki</span>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="text-orange-500 mb-2" />
          <span className="font-medium">Duration</span>
          <span className="text-gray-600 text-sm">Morning 9-12</span>
        </div>
        <div className="flex flex-col items-center">
          <Users className="text-orange-500 mb-2" />
          <span className="font-medium">Escapees</span>
          <span className="text-gray-600 text-sm">8</span>
        </div>
        <div className="flex flex-col items-center">
          <Briefcase className="text-orange-500 mb-2" />
          <span className="font-medium">Type of trip</span>
          <span className="text-gray-600 text-sm">Private</span>
        </div>
        <div className="flex flex-col items-center">
          <Earth className="text-orange-500 mb-2" />
          <span className="font-medium">Category</span>
          <span className="text-gray-600 text-sm">Full day trip</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
