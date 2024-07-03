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
      <h2 className="text-5xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Meet Our Mentor Team
      </h2>
      <p className="text-white text-start mb-8">
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {experts
              .slice(currentIndex, currentIndex + 3)
              .map((expert, index) => (
                <div
                  key={index}
                  className={`bg-neutral-800 hover:bg-neutral-700 border border-[#2a2928] hover:shadow-lg hover:scale-[1.03] hover:duration-150 transition duration-150 ease-in-out max-w-md mx-auto rounded-tr-3xl rounded-bl-3xl p-6 md:p-4 lg:p-0 lg:py-4 shadow-lg h-full flex flex-col items-center text-center w-full ${
                    index >= 1 ? "hidden md:block" : ""
                  } ${index >= 2 ? "hidden lg:block" : ""} ${
                    index === 2 ? "md:hidden" : ""
                  }`}
                >
                  <img
                    src={expert.uploadLink || "https://via.placeholder.com/150"}
                    alt={expert.name}
                    className="w-64 h-64 m-auto object-cover rounded-full mb-2"
                  />

                  <div className="font-bold text-white text-xl mb-2">{expert.name}</div>

                  <div className="text-gray-300 text-base h-12 mb-2 m-auto w-full lg:w-10/12">
                    {expert.degree}
                  </div>

  

                  <p className="text-gray-400 m-auto w-10/12">
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
