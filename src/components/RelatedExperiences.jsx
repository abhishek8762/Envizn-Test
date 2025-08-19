import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import like1 from "./../assets/like1.jpg";
import like2 from "./../assets/like2.jpg";
import like3 from "./../assets/like3.jpg";

const recommendations = [
  {
    id: 1,
    image: like1,
    tags: ["Canggu", "Half Day Trip", "Private"],
    title: "Surf in Canggu",
    price: "From IDR 35,00,000.00/ person",
    description:
      "Wake up, grab your board and head to the beach while it’s still quiet. This is your moment to catch your first wave — and do it with someone who knows the sea best.",
  },
  {
    id: 2,
    image: like2,
    tags: ["Canggu", "Half Day Trip", "Private/Group"],
    title: "Balinese Healing in Retreat",
    price: "From IDR 60,00,000.00/ person",
    description:
      "You know that moment when you realise you’ve been carrying too much — in your body, your head, your heart? This is the kind of space that helps you release it.",
  },
  {
    id: 3,
    image: like3,
    tags: ["Canggu", "Full Day Trip", "Private"],
    title: "Balinese Day with a local family",
    price: "From IDR 15,00,000.00/ person",
    description:
      "Slow down. Watch the light move across the rice fields. Learn how to make coconut oil the way it’s been done for generations. This is Bali with soul.",
  },
];

const Recommendations = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // detect screen width and adjust cards per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // mobile: 1 card
      } else {
        setItemsPerSlide(3); // desktop: 3 cards
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? recommendations.length - itemsPerSlide : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= recommendations.length - itemsPerSlide ? 0 : prev + 1
    );
  };

  return (
    <section className="px-8 py-12 bg-white">
      <div className="text-center mb-10">
        <div className="text-3xl md:text-5xl text-green-900 font-bold mb-4">
          You may also like
        </div>
      </div>

      <div className="flex justify-center gap-6">
        {recommendations.slice(index, index + itemsPerSlide).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-green-800 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-green-700 font-semibold mb-2">{item.price}</p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {item.description}
              </p>

              <div className="flex gap-2 mt-auto">
                <button className="bg-green-900 text-white px-4 py-2 rounded-2xl">
                  Book Escape
                </button>
                <button className="underline px-4 py-2">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="p-2 border rounded-full hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 border rounded-full hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Recommendations;
