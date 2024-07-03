import { cardData } from "../constants";
import React, { useState, useEffect } from "react";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-2">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Unlock Your Career Potential with Us
        </h1>
        <p className="text-white text-start mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          molestiae at iure obcaecati perspiciatis debitis magnam ipsum quia
          voluptas aspernatur voluptate possimus architecto, error corrupti
          necessitatibus cumque quam reprehenderit velit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <>
          <div
            className="bg-neutral-800 hover:bg-neutral-700 border border-[#2a2928] max-w-md mx-auto py-10 px-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 hover:duration-150 transition duration-150 ease-in-out"
            key={currentIndex}
          >
            <h5 className="text-xl font-bold text-white mb-4 flex justify-center items-center gap-2">
              {React.createElement(cardData[currentIndex].icon, {
                className: "inline text-white",
                style: { fontSize: "1.1em" },
              })}
              {cardData[currentIndex].title}
            </h5>
            <p className="text-gray-300">
              {cardData[currentIndex].description}
            </p>
          </div>

          <div
            className="bg-neutral-800 hover:bg-neutral-700 border border-[#2a2928] max-w-md mx-auto py-10 px-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 hover:duration-150 transition duration-150 ease-in-out"
            key={(currentIndex + 1) % cardData.length}
          >
            <h5 className="text-xl font-bold text-white mb-4 flex justify-center items-center gap-2">
              {React.createElement(
                cardData[(currentIndex + 1) % cardData.length].icon,
                {
                  className: "inline text-white",
                  style: { fontSize: "1.1em" },
                }
              )}
              {cardData[(currentIndex + 1) % cardData.length].title}
            </h5>
            <p className="text-gray-300">
              {cardData[(currentIndex + 1) % cardData.length].description}
            </p>
          </div>

          <div
            className="bg-neutral-800 hover:bg-neutral-700 border border-[#2a2928] max-w-md mx-auto py-10 px-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 hover:duration-150 transition duration-150 ease-in-out"
            key={(currentIndex + 2) % cardData.length}
          >
            <h5 className="text-xl font-bold text-white mb-4 flex justify-center items-center gap-2">
              {React.createElement(
                cardData[(currentIndex + 2) % cardData.length].icon,
                {
                  className: "inline text-white",
                  style: { fontSize: "1.1em" },
                }
              )}
              {cardData[(currentIndex + 2) % cardData.length].title}
            </h5>
            <p className="text-gray-300">
              {cardData[(currentIndex + 2) % cardData.length].description}
            </p>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cards;
