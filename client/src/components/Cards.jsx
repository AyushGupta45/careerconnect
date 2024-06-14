import { Card } from "flowbite-react";
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
    <div>
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-4xl font-bold text-blue-900 text-center">
          Unlock Your Career Potential with Our Platform
        </h1>
        <p className="text-center text-2xl text-blue-800">
          Discover premier opportunities perfectly aligned with your academic
          goals
        </p>
      </div>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <>
          <Card
            className="max-w-md mx-auto bg-white rounded-lg shadow-md border hover:shadow-lg transition duration-300 ease-in-out border-blue-400 glassy-effect"
            key={currentIndex}
          >
            <div className="p-8">
              <h5 className="text-xl font-bold text-blue-900 mb-4 flex justify-center items-center">
                {React.createElement(cardData[currentIndex].icon, {
                  className: "inline mr-2 text-blue-600",
                  style: { fontSize: "1.25em" },
                })}
                {cardData[currentIndex].title}
              </h5>
              <p className="text-gray-700">
                {cardData[currentIndex].description}
              </p>
            </div>
          </Card>

          <Card
            className="max-w-md hidden md:block mx-auto bg-white rounded-lg shadow-md border hover:shadow-lg transition duration-300 ease-in-out border-blue-400 glassy-effect"
            key={(currentIndex + 1) % cardData.length}
          >
            <div className="p-8">
              <h5 className="text-xl font-bold text-blue-900 mb-4 flex justify-center items-center">
                {React.createElement(
                  cardData[(currentIndex + 1) % cardData.length].icon,
                  {
                    className: "inline mr-2 text-blue-600",
                    style: { fontSize: "1.25em" },
                  }
                )}
                {cardData[(currentIndex + 1) % cardData.length].title}
              </h5>
              <p className="text-gray-700">
                {cardData[(currentIndex + 1) % cardData.length].description}
              </p>
            </div>
          </Card>

          <Card
            className="max-w-md hidden xl:block  mx-auto bg-white rounded-lg shadow-md border hover:shadow-lg transition duration-300 ease-in-out border-blue-400 glassy-effect"
            key={(currentIndex + 2) % cardData.length}
          >
            <div className="p-8">
              <h5 className="text-xl font-bold text-blue-900 mb-4 flex justify-center items-center">
                {React.createElement(
                  cardData[(currentIndex + 2) % cardData.length].icon,
                  {
                    className: "inline mr-2 text-blue-600",
                    style: { fontSize: "1.25em" },
                  }
                )}
                {cardData[(currentIndex + 2) % cardData.length].title}
              </h5>
              <p className="text-gray-700">
                {cardData[(currentIndex + 2) % cardData.length].description}
              </p>
            </div>
          </Card>
        </>
      </div>
    </div>
  );
};

export default Cards;
