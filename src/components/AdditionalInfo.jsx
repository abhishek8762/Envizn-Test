import React, { useState } from "react";
import maps from "./../assets/maps.png";

const AdditionalInfo = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section className="justify-center px-12 py-8 ">
      <div className="text-3xl text-green-900  font-bold mb-4 ">
        Additional Information
      </div>
      <div className="divide-y divide-gray-300">
        <div className="py-3">
          <button
            onClick={() => toggleSection("meet")}
            className="flex items-center gap-2 w-full text-left"
          >
            <span>Where will we meet?</span>
            <span>{openSections["meet"] ? "-" : "+"}</span>
          </button>
          {openSections["meet"] && (
            <div className="mt-2">
              <img src={maps} alt="Map" className="mb-2 w-85 h-60  " />
              <p className="mb-5">
                Pickup & Drop-off Location: Your hotel or villa within Ubud,
                Canggu, Seminyak, or Sanur areas driver
              </p>

              <p className="mb-5">
                Pickup Time: 7:30 AM – We’ll confirm the exact time based on
                your location{" "}
              </p>
              <p className="mb-5">
                Drop-off Time: Around 4:30 PM (depending on traffic and group
                pace)
              </p>
              <p className="mb-5">
                {" "}
                Private Transfers: Clean, air-conditioned vehicle with a
                friendly local
              </p>
            </div>
          )}
        </div>

        <div className="py-3">
          <button
            onClick={() => toggleSection("start")}
            className="flex items-center gap-2 w-full text-left"
          >
            <span>Start and Ends</span>
            <span>{openSections["start"] ? "-" : "+"}</span>
          </button>
          {openSections["start"] && <p className="mt-2">Lorem Ipsium...</p>}
        </div>

        <div className="py-3">
          <button
            onClick={() => toggleSection("suitability")}
            className="flex items-center gap-2 w-full text-left"
          >
            <span>Suitability / Accessibility</span>
            <span>{openSections["suitability"] ? "-" : "+"}</span>
          </button>
          {openSections["suitability"] && (
            <p className="mt-2">Lorem Ipsium...</p>
          )}
        </div>

        <div className="py-3">
          <button
            onClick={() => toggleSection("cancellation")}
            className="flex items-center gap-2 w-full text-left"
          >
            <span>Cancellation and other policies</span>
            <span>{openSections["cancellation"] ? "-" : "+"}</span>
          </button>
          {openSections["cancellation"] && (
            <p className="mt-2">Lorem Ipsium...</p>
          )}
        </div>

        <div className="py-3">
          <button
            onClick={() => toggleSection("pack")}
            className="flex items-center gap-2 w-full text-left"
          >
            <span>What to Pack?</span>
            <span>{openSections["pack"] ? "-" : "+"}</span>
          </button>
          {openSections["pack"] && <p className="mt-2">Lorem Ipsium...</p>}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
