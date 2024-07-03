import { useEffect } from "react";

const About = () => {
  const graduatesCount = 1000;
  const projectsCount = 3000;
  const applicantsCount = 100;

  useEffect(() => {
    const countUp = (element, end) => {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16.67);

      const animateCount = () => {
        start += increment;
        if (start < end) {
          element.innerText = Math.ceil(start) + "+";
          requestAnimationFrame(animateCount);
        } else {
          element.innerText = end + "+";
        }
      };

      animateCount();
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const endValue = parseInt(element.getAttribute("data-end"), 10);
          countUp(element, endValue);
          observer.unobserve(element);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    const elements = document.querySelectorAll(".count-up");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="flex justify-center p-2 pb-8 w-full" id="about">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <h1 className="text-5xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              About Us
            </h1>
            <img
              src="/assets/aboutus.png"
              alt="Home"
              className="w-full"
            />
          </div>
          <div className="w-full max-w-md mx-auto my-auto p-6 rounded-2xl shadow-md">
            <h5 className="text-lg text-gray-200 text-start mb-8">
              Welcome! We're your career companion, offering{" "}
              <span className="font-black text-white">top-notch</span> services
              tailored to your needs. We prioritize{" "}
              <span className="font-black text-white">deadlines</span> and
              provide timely assistance for your career success. Our approach is
              customized, reflecting your{" "}
              <span className="font-black text-white">unique</span> requirements
              and promoting{" "}
              <span className="font-black text-white">professional growth</span>
              . Count on us for{" "}
              <span className="font-black text-white">
                reliable, consistent
              </span>{" "}
              support.
            </h5>

            <div className="text-white flex flex-row justify-between">
              <div className="text-center">
                <h1
                  className="count-up text-4xl font-bold"
                  data-end={graduatesCount}
                >
                  0+
                </h1>
                <p>Graduated</p>
              </div>
              <div className="text-center">
                <h1
                  className="count-up text-4xl font-bold"
                  data-end={projectsCount}
                >
                  0+
                </h1>
                <p>School Projects</p>
              </div>
              <div className="text-center">
                <h1
                  className="count-up text-4xl font-bold"
                  data-end={applicantsCount}
                >
                  0+
                </h1>
                <p>Applicants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
