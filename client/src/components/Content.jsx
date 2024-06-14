import { FaGraduationCap } from "react-icons/fa6";

const Content = () => {
  return (
    <div className="container w-full mx-auto flex flex-col justify-center items-center py-6 lg:flex-row gap-4">
      <div className="flex-1 w-full order-2 lg:order-1">
        <img
          src="/assets/vecteezy_studying-and-learning-online-concept_1270244.svg"
          alt="Home"
          className="w-full h-auto  mix-blend-multiply"
        />
      </div>

      <div className="flex w-full lg:w-5/12 flex-col sm:flex-row gap-4 items-center order-1 lg:order-2">
        <div className="w-full">
          <div className="font-bold text-4xl flex flex-col justify-center items-center">
            <FaGraduationCap className="w-36 h-auto md:h-full rounded-full text-blue-800" />
            <p className="text-xl text-blue-800">CareerConnect</p>
          </div>
          <p className="text-blue-800 mt-5">
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
