import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { experts } from "../constants";

const Experts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % (experts.length - 2)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experts.length - 3 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experts.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-2">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Meet Our Mentor Team
      </h2>
      <p className="text-lg text-blue-800 mb-8">
        Our team of mentors is composed of seasoned professionals from various
        technology domains, each possessing a rich reservoir of knowledge and
        experience. From software engineering to data science, cybersecurity to
        web development, our mentors are proficient in a wide range of
        specializations. Their passion for innovation and knack for
        problem-solving make them ideal guides for your placement journey. They
        are committed to providing you with comprehensive guidance and
        high-quality solutions tailored to your needs. Explore our team of
        mentors below and discover the guiding forces that will accompany you
        throughout your placement journey.
      </p>

      <div className="relative select-none">
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
        {experts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between items-center text-center w-full">
            <div>
              <p className="text-lg font-semibold text-gray-700">No Experts</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {experts
              .slice(currentIndex, currentIndex + 3)
              .map((expert, index) => (
                <div
                  key={index}
                  className={`bg-white m-auto rounded-lg shadow-lg p-6 h-full flex flex-col justify-between items-center text-center w-full ${
                    index >= 1 ? "hidden md:block" : ""
                  } ${index >= 2 ? "hidden lg:block" : ""} ${
                    index === 2 ? "md:hidden" : ""
                  }`}
                >
                  <img
                    src={expert.uploadLink || "https://via.placeholder.com/150"}
                    alt={expert.name}
                    className="w-full h-40 object-cover rounded-t-lg mb-2"
                  />

                  <div className="font-bold text-xl mb-2">{expert.name}</div>

                  <div className="text-gray-700 text-base mb-2">
                    {expert.degree}
                  </div>

                  <div className="flex justify-center mb-2 items-center text-yellow-400">
                    {[...Array(expert.stars || 0)].map((_, index) => (
                      <FaStar key={index} size={30} />
                    ))}
                    {expert.stars === undefined && (
                      <span>No rating available</span>
                    )}
                  </div>

                  <p className="text-gray-700">
                    <strong>Specialization: </strong>
                    {expert.specialization.join(", ")}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experts;
