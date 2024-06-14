import{Card} from"flowbite-react";
const About = () => {
  return (
    <div className="bg-blue-100 flex justify-center p-2 pb-8 w-full" id="about">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row">
          <img
            src="/assets/350_REpWIE1BUiAxNDctMTM.jpg"
            alt="Home"
            className="w-full h-auto mix-blend-multiply md:w-1/2"
          />
          <Card className="mx-auto hover:shadow-lg transition duration-300 ease-in-out glassy-effect rounded-lg shadow-lg mt-4 md:mt-0 md:ml-4">
            <h5 className="text-lg text-blue-800 text-start mb-4">
              Welcome! We're your career companion, offering top-notch services
              tailored to your placement needs. We understand the importance of
              deadlines and deliver timely assistance to help you excel in your
              career journey. Our approach is fully customized, providing
              solutions that reflect your unique requirements and promote
              professional growth. Whether you need help with a quick task or a
              complex project, we've got you covered. Count on us for reliable,
              consistent support every step of the way.
            </h5>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
