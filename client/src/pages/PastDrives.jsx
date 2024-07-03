import React from "react";
import { pastDrives } from "../constants";
import { Carousel } from "flowbite-react";
import { carousel } from "../custometheme";

const PastDrives = () => {
  return (
    <div className="container mx-auto p-2" id="past-drives">
      <h1 className="text-5xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Past Drives
      </h1>
      <p className="text-white text-start mb-8">
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
              className="w-full h-full object-cover rounded-t-3xl  shadow-md"
            />
            <div className="w-full">
              <div className="bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 text-white p-4 ">
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
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PastDrives;
