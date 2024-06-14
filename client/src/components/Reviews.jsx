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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(
        (currentIndex) => (currentIndex + 1) % (reviews.length - 2)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  const goToPrevious = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-2 relative" id="reviews">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Client Testimonials
      </h2>
      <p className="text-lg text-blue-800 mb-8">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews
              .slice(currentReviewIndex, currentReviewIndex + 3)
              .map((review, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-10 h-full flex flex-col justify-between items-center text-center w-full transition-opacity duration-500 ${
                    index >= 1 ? "hidden md:block" : ""
                  } ${index >= 2 ? "hidden lg:block" : ""} ${
                    index === 2 ? "md:hidden" : ""
                  }`}
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-700 mb-4">
                      {review.description}
                    </p>
                    <p className="flex justify-center items-center text-yellow-400 gap-x-4">
                      {[...Array(review.stars)].map((_, index) => (
                        <FaStar key={index} size={30} />
                      ))}
                    </p>
                    <div>
                      <p className="text-gray-800 font-bold mt-2">
                        @{review.userId.username}
                      </p>
                      <p className="text-gray-500 text-sm">{`Date: ${new Date(
                        review.createdAt
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}`}</p>
                    </div>
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
