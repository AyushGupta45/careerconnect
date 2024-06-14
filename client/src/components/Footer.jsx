import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaGraduationCap,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const FooterCom = () => {
  const scrollToElement = (elementId, offsetTop) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = offsetTop;
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  const path = useLocation().pathname;

  return (
    <div className="bg-blue-200 py-6 gap-4 overflow-hidden">
      <div className="w-full mx-auto flex flex-col justify-center items-center">
        <div>
          <Link
            to="/"
            className="font-bold text-4xl flex flex-col justify-center items-center"
          >
            <FaGraduationCap className="w-36 h-auto md:h-full rounded-full text-blue-800" />
            <p className="text-3xl text-black">CareerConnect</p>
          </Link>
        </div>
        <hr className="w-full border border-gray-800 my-6" />

        <div className="flex justify-center items-center gap-20">
          <div>
            <a href="#" className="text-black text-lg">
              <FaFacebookSquare size={30} />
            </a>
          </div>
          <div>
            <a href="#" className="text-black text-lg">
              <FaInstagramSquare size={30} />
            </a>
          </div>
          <div>
            <a href="#" className="text-black text-lg">
              <FaTwitterSquare size={30} />
            </a>
          </div>
          <div>
            <a href="#" className="text-black text-lg">
              <FaGithubSquare size={30} />
            </a>
          </div>
        </div>
        <hr className="w-full border border-gray-800 my-6" />

        <div className="text-lg text-black m-auto">
          <p className="tracking-widest text-center">
            &#169; {new Date().getFullYear()} {`CareerConnect Pivate Limited`}
          </p>
        </div>
        <hr className="w-full border border-gray-800 my-6" />

        <div className="text-md font-bold text-black gap-x-10 gap-y-4 grid grid-cols-2 md:grid-cols-3">
          <Link
            as={"div"}
            className="hover:underline m-auto"
            onClick={() => {
              scrollToElement("");
            }}
          >
            Privacy Policy
          </Link>
          <Link
            as={"div"}
            className="hover:underline m-auto"
            onClick={() => {
              scrollToElement("about", 120);
            }}
          >
            About
          </Link>
          <Link
            as={"div"}
            className="hover:underline m-auto"
            onClick={() => {
              scrollToElement("");
            }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCom;
