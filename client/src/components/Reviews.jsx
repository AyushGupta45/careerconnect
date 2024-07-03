import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await fetch("/api/review/getreviews");
        const data = await res.json();

        if (res.ok) {
          setReviews(data.reviews);
        } else {
          toast.error("error fetching");
        }
      } catch (e) {
        toast.error("Error fetching reviews:", e);
      }
    };

    fetchReview();
  }, []);

  const getReviewHeading = (stars) => {
    if (stars === 5) {
      return "Great Experience!";
    } else if (stars === 4) {
      return "Good Experience";
    } else if (stars === 3) {
      return "Average Experience";
    } else if (stars === 2) {
      return "Bad Experience";
    } else if (stars === 1) {
      return "Worst Experience";
    } else {
      return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(
        (currentIndex) => (currentIndex + 1) % (reviews.length - 3)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  const goToPrevious = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 4 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-2 relative" id="reviews">
      <h2 className="text-5xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Client Testimonials
      </h2>
      <p className="text-white text-start mb-4">
        We are committed to being your trusted partner in your career journey.
        Our placement support services offer top-notch assistance to help you
        excel in your professional pursuits. With our steadfast dedication to
        excellence and candidate satisfaction, we strive to provide reliable
        support for all your placement needs. Here’s what some of our successful
        candidates have shared about their experience with our services.
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

        {reviews.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between items-center text-center w-full">
            <div>
              <p className="text-lg font-semibold text-gray-700">
                No reviews yet
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-x-8 md:grid-cols-2">
            {reviews
              .slice(currentReviewIndex, currentReviewIndex + 4)
              .map((review, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 w-full bg-neutral-800 hover:bg-neutral-700 border border-[#2a2928] p-5 rounded-tl-2xl rounded-br-2xl mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
                >
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row justify-between w-full">
                      <p className="text-xs text-gray-300">
                        {review.userId.username}
                      </p>
                      <p className="text-gray-300 text-xs">{`Date: ${new Date(
                        review.createdAt
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}`}</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-full ">
                    <h3 className="text-xl font-bold text-white">
                      {getReviewHeading(review.stars)}
                    </h3>
                    <div className="text-xs flex flex-row items-center">
                      <p className="flex justify-center items-center text-yellow-300 gap-1">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            size={20}
                            className={
                              index < review.stars
                                ? "text-yellow-300"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 line-clamp-3">
                    {review.description}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
