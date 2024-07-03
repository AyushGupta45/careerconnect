import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { seminars } from "../constants";

const Seminars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % (seminars.length - 2)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? seminars.length - 3 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === seminars.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative select-none">
      {seminars.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between items-center text-center w-full">
          <div>
            <p className="text-lg font-semibold text-white">No Seminars</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full relative">
          <FaArrowLeft
            className="absolute top-1/2 -left-16 hidden md:block transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-900"
            size={30}
            onClick={goToPrevious}
          />
          <FaArrowRight
            className="absolute top-1/2 -right-16 hidden md:block transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-900"
            size={30}
            onClick={goToNext}
          />
          {seminars
            .slice(currentIndex, currentIndex + 3)
            .map((seminar, index) => (
              <div
                key={index}
                className={`bg-neutral-800 hover:bg-neutral-700 border border-[#2a2928] m-auto rounded-tl-3xl rounded-br-3xl shadow-md hover:shadow-lg p-6 h-full flex flex-col justify-between items-center text-center w-full hover:scale-105 hover:duration-150 transition duration-150 ease-in-out ${
                  index >= 1 ? "hidden md:block" : ""
                } ${index >= 2 ? "hidden lg:block" : ""} ${
                  index === 2 ? "md:hidden" : ""
                }`}
              >
                <div className="font-bold text-xl w-full text-start text-white mb-2">
                  {seminar.name}
                </div>
                <img
                  src={seminar.posterImage}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                  alt={seminar.name}
                />

                <div className="text-white text-start mb-2">
                  {seminar.description}
                </div>

                <p className="text-white text-start w-full mb-2">
                  <strong>Speaker: </strong>
                  {seminar.speaker}
                </p>
                <p className="text-white text-start w-full mb-2">
                  <strong>Date: </strong>
                  {seminar.date}
                </p>
                <p className="text-white text-start w-full mb-2">
                  <strong>Location: </strong>
                  {seminar.location}
                </p>
                <p className="text-white text-start w-full mb-2">
                  <strong>Duration: </strong>
                  {seminar.duration}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Seminars;
