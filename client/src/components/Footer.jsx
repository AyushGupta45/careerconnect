import { Card } from "flowbite-react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { contactInfo, words } from "../constants";

const FooterCom = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToElement = (elementId, offsetTop) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = offsetTop;
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-8 mb-2">
        <Card className="w-full sm:w-1/2 rounded-xl bg-neutral-800 cursor-pointer border-none relative">
          <FaGraduationCap className="w-full h-full text-neutral-700 rotate" />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl font-semibold">
            {words[currentIndex].toUpperCase()}
          </p>
        </Card>

        <Card className="w-full rounded-xl order-3 sm:order-2 bg-neutral-800 border-none">
          <p className="text-gray-300 font-medium font-manrope md:text-[28px] md:leading-[43px] text-[28px] leading-[38px] p-6 md:p-0">
            CareerConnect is a pioneering platform dedicated to{" "}
            <span className="font-semibold text-white">
              facilitating student placement journeys
            </span>
            . It simplifies access to new opportunities and enhances{" "}
            <span className="font-semibold text-white">
              career navigation with efficiency and ease
            </span>
            .
          </p>
        </Card>

        <Card className="w-full sm:w-1/2 order-2 sm:order-3 lg:w-1/2 rounded-xl bg-neutral-800 border-none">
          <div className="flex flex-col  text-gray-400 max-h-72 overflow-y-auto scroll-hidden">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 hover:bg-neutral-700 p-4 rounded-lg"
              >
                {React.createElement(item.icon, {
                  className: "inline text-white",
                  style: { fontSize: "1.25em" },
                })}
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-white font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.info}
                  </a>
                ) : (
                  <span className="text-white font-bold">{item.info}</span>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="flex flex-col sm:flex-row justify-between py-4">
        <div className="text-lg text-gray-300">
          <p className="tracking-widest text-center">
            &#169; {new Date().getFullYear()} {`CareerConnect Private Limited`}
          </p>
        </div>
        <div className="text-md font-bold flex gap-10 justify-center items-center">
          <Link
            as={"div"}
            className="hover:underline text-center text-gray-300"
            onClick={() => {
              scrollToElement("");
            }}
          >
            Privacy Policy
          </Link>
          <Link
            as={"div"}
            to={"/about"}
            className="hover:underline text-center text-gray-300"
            onClick={() => {
              scrollToElement("about", 120);
            }}
          >
            About
          </Link>
          <Link
            as={"div"}
            className="hover:underline text-center text-gray-300"
            onClick={() => {
              scrollToElement("");
            }}
          >
            Terms of Service
          </Link>
          <Link
            as={"div"}
            to={"/sign-in"}
            className="hover:underline text-center text-gray-300"
            onClick={() => {
              scrollToElement("");
            }}
          >
            Login as Admin
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterCom;
