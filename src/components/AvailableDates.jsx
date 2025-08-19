import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AvailableDates = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const savedDate = localStorage.getItem("selectedDate");
    return savedDate ? new Date(savedDate) : null;
  });

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("paidusers");
    return savedPage ? Number(savedPage) : 1;
  });

  useEffect(() => {
    if (selectedDate) {
      localStorage.setItem("selectedDate", selectedDate.toISOString());
    } else {
      localStorage.removeItem("selectedDate");
    }
  }, [selectedDate]);

  useEffect(() => {
    localStorage.setItem("paidusers", currentPage);
  }, [currentPage]);

  return (
    <section className="lg:px-17 md:px-17 px-12 py-8">
      <div className="text-3xl text-green-900 font-bold mb-4 ">
        Next Available Dates
      </div>
      <div className="bg-white p-1 rounded">
        <div className="atsro-section1">
          <div className="total-container-users border-none  ">
            <Calendar
              onChange={(date) => {
                setSelectedDate(date);
                setCurrentPage(1);
              }}
              value={selectedDate}
              c
            />
            {/* <button
              className="date-clear mt-4 px-3 py-1 border rounded"
              onClick={() => {
                setSelectedDate(null);
                setCurrentPage(1);
              }}
            >
              Clear
            </button> */}
          </div>
        </div>
      </div>

      {selectedDate && (
        <>
          <div className="text-2xl text-green-900 font-bold mb-4 ">
            Book slot for{" "}
            {selectedDate.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
          </div>
          <button className="bg-white border border-green-700 px-4 py-2 mt-4 rounded-2xl">
            {" "}
            9 am - 12 am
          </button>
        </>
      )}
    </section>
  );
};

export default AvailableDates;
