import React, { useEffect } from "react";
import Cards from "../components/Cards";
import Reviews from "../components/Reviews";
import Content from "../components/Content";
import AddReview from "../components/AddReview";
import About from "./About";
import Faq from "../components/Faq";
import Experts from "../components/Experts";
import Application from "./Application";
import PastDrives from "./PastDrives";

const Home = () => {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: "url('assets/background.svg')" }}
    >
      <div className="m-auto text-center w-full sm:w-9/12 sm:px-0 z-10">
        <Content />
        <hr className="my-8 border-t border-gray-400" />
        <Application />
        <hr className="my-8 border-t border-gray-400" />
        <Cards />
        <hr className="my-8 border-t border-gray-400" />
        <About />
        <hr className="my-8 border-t border-gray-400" />
        <Experts />
        <hr className="my-8 border-t border-gray-400" />
        <PastDrives />
        <hr className="my-8 border-t border-gray-400" />
        <Reviews />
        <hr className="my-8 border-t border-gray-400" />
        <AddReview />
        <hr className="my-8 border-t border-gray-400" />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
