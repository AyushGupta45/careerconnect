import React from "react";
import { Card } from "flowbite-react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { faqs } from "../constants";

function Faq() {
  const [isOpen, setIsOpen] = React.useState(Array(faqs.length).fill(false));

  const toggleAccordion = (index) => {
    const newIsOpen = Array(faqs.length).fill(false);
    newIsOpen[index] = !isOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div
      className="container mx-auto px-4 pb-8 select-none cursor-pointer"
      id="faq"
    >
      <h1 className="text-5xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        FAQ's
      </h1>
      <div className="grid grid-cols-1 gap-4 w-full ">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="bg-neutral-800 rounded-lg shadow-lg border-neutral-600 border-2 focus:ring-neutral-500 focus:border-neutral-500"
          >
            <div className="p-4" onClick={() => toggleAccordion(index)}>
              <div className="flex justify-between items-center">
                <h3 className="text-md text-white text-start font-semibold">
                  {faq.question}
                </h3>
                <button className="text-white focus:outline-none font-black text-xl">
                  {isOpen[index] ? <BsChevronUp /> : <BsChevronDown />}
                </button>
              </div>
              {isOpen[index] && (
                <p className="text-gray-300 text-sm text-start mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Faq;
