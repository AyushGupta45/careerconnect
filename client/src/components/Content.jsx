import React, { useEffect, useState } from "react";

const gradients = [
  "bg-gradient-to-r from-purple-400 to-pink-600",
  "bg-gradient-to-r from-blue-400 to-green-600",
  "bg-gradient-to-r from-indigo-400 to-purple-600",
  "bg-gradient-to-r from-teal-400 to-cyan-600",
];


const Content = () => {
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 2500); // 2.5 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container w-full flex flex-col justify-center items-center px-2 py-6 lg:flex-row gap-4">
      <div className="flex-1 w-full order-1 lg:order-2">
        <img
          src="/assets/maincontent.svg"
          alt="Home"
          className="w-full h-auto"
        />
      </div>

      <div className="flex w-full lg:w-[45%] flex-col sm:flex-row gap-4 items-center order-2 lg:order-1">
        <div className="w-full">
          <p
            className={`font-black text-transparent text-start text-5xl lg:text-6xl  bg-clip-text ${gradients[gradientIndex]}`}
          >
            "CareerConnect: Streamlining Student Placement Success"
          </p>

          <p className="text-white text-start mt-5">
            CareerConnect is a comprehensive platform designed to streamline the
            process of connecting students with placement opportunities.
            CareerConnect aims to simplify and enhance the student's journey
            towards securing meaningful career opportunities. Whether it's
            staying informed about the latest placement updates, exploring past
            placement drives, or actively applying for new opportunities,
            CareerConnect provides a centralized hub for students to navigate
            their career paths with ease and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
