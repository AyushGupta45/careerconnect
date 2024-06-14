import React from "react";
import { pastDrives } from "../constants";
import { Carousel } from "flowbite-react";
import { carousel } from "../custometheme";

const PastDrives = () => {
  return (
    <div className="container mx-auto p-2" id="past-drives">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Past Drives</h1>
      <p className="text-lg text-blue-800 mb-8">
        Check out our past placement drives and the companies we've partnered
        with! From leading tech giants to innovative startups, our partnerships
        span across various industries, providing diverse opportunities for our
        candidates. Explore how CareerConnect can help you connect with your
        dream job and build a successful career.
      </p>

      <Carousel theme={carousel} slide={false}>
        {pastDrives.map((drive, index) => (
          <div key={index} className="relative">
            <img
              src={drive.image}
              alt={drive.seminarName}
              className="w-full h-full object-cover rounded-t-lg shadow-md"
            />
            {/* <div className="absolute hidden md:block bottom-0 left-0 w-full">
              <div className="bg-gradient-to-b from-gray-500 via-gray-700 to-gray-900 text-white p-4 rounded-tl-lg">
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  {drive.seminarName}
                </h2>
                <p className="text-xs md:text-sm mb-2">
                  {drive.jobDescription}
                </p>
                <a
                  href={drive.documentLink}
                  className="text-blue-500 hover:underline"
                >
                  View Document
                </a>
              </div>
            </div> */}
            <div className="w-full">
              <div className="bg-gradient-to-b from-gray-500 via-gray-700 to-gray-900 text-white p-4">
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  {drive.seminarName}
                </h2>
                <p className="text-xs md:text-sm mb-2">{drive.jobDescription}</p>
                <a
                  href={drive.documentLink}
                  className="text-blue-500 hover:underline"
                >
                  View Document
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PastDrives;
