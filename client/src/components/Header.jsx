import { Avatar, Button, Navbar, Dropdown } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { headerTheme } from "../custometheme";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [applications, setApplications] = useState([]);
  const scrollToElement = (elementId, offsetTop) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = offsetTop;
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (currentUser) {
      const fetchApplications = async () => {
        try {
          const res = await fetch("/api/seminar/applications");
          const data = await res.json();

          if (res.ok) {
            const filteredApplications = data.applications.filter(
              (application) => application.userId._id === currentUser._id
            );
            setApplications(filteredApplications);
          } else {
            toast.error(res);
          }
        } catch (e) {
          toast.error("Error fetching applications:", e);
        }
      };

      fetchApplications();
    }
  }, [currentUser]);

  const path = useLocation().pathname;

  return (
    <>
      <Navbar
        className="border-b-2 bg-blue-200 py-4 sticky top-0 left-0 w-full z-50 select-none"
        theme={headerTheme}
      >
        <Link
          to="/"
          className="whitespace-nowrap text-sm sm:text-xl font-semibold gap-2 flex items-center justify-center "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaGraduationCap size={40} className="text-blue-800" />
          <p className="text-lg text-blue-800">CareerConnect</p>
        </Link>

        <div className="flex gap-4 lg:order-2 items-center">
          {currentUser ? (
            <>
              <Navbar.Link
                active={location.pathname.startsWith("/dashboard")}
                as={"div"}
                className="font-bold text-md lg:text-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Link
                  to="/dashboard?tab=profile"
                  className="flex justify-center items-center gap-2"
                >
                  <Avatar
                    alt="user"
                    img={
                      currentUser.profilePicture ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    rounded
                  />
                  <span className="font-bold text-sm">
                    {currentUser.username}
                  </span>
                </Link>
              </Navbar.Link>
              <div className="relative">
                <Dropdown
                  className="w-96 h-48 overflow-y-auto"
                  arrowIcon={false}
                  inline
                  label={
                    <MdOutlineMessage size={28} className="cursor-pointer text-gray-700 lg:hover:text-cyan-700" />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-lg font-bold">
                      Registered Seminars
                    </span>
                  </Dropdown.Header>
                  {applications.length > 0 ? (
                    applications.map((application) => (
                      <Dropdown.Item>
                        <Navbar.Link
                          active={path === "/seminar-opportunities"}
                          as={"div"}
                          className="text-black font-bold"
                          onClick={() => {
                            scrollToElement("seminar", 100);
                          }}
                        >
                          <Link to="/seminar-opportunities">
                            {application.seminarInterestedIn}
                          </Link>
                        </Navbar.Link>
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item>
                      <div className="w-full flex justify-center items-center">
                        No applications submitted yet!!
                      </div>
                    </Dropdown.Item>
                  )}
                </Dropdown>
              </div>
            </>
          ) : (
            <>
              <Link to="/sign-in">
                <Button
                  gradientDuoTone="purpleToBlue"
                  outline
                  className="text-lg font-bold"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="text-lg font-bold"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link
            active={path === "/"}
            as={"div"}
            className="font-bold text-md lg:text-lg rounded-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Link to="/">Home</Link>
          </Navbar.Link>

          <Navbar.Link
            active={path === "/seminar-opportunities"}
            as={"div"}
            className="font-bold text-md lg:text-lg rounded-lg"
            onClick={() => {
              scrollToElement("seminar", 100);
            }}
          >
            <Link to="/seminar-opportunities">Seminars</Link>
          </Navbar.Link>

          <Navbar.Link
            active={path === "/past-drives"}
            as={"div"}
            className="font-bold text-md lg:text-lg rounded-lg"
            onClick={() => {
              scrollToElement("past-drives", 100);
            }}
          >
            <Link to="/past-drives">Past Drives</Link>
          </Navbar.Link>

          <Navbar.Link
            active={path === "/reviews"}
            as={"div"}
            className="font-bold text-md lg:text-lg rounded-lg"
            onClick={() => {
              scrollToElement("reviews", 100);
            }}
          >
            <Link to="/reviews">Reviews</Link>
          </Navbar.Link>

          <Navbar.Link
            active={path === "/faqs"}
            as={"div"}
            className="font-bold text-md lg:text-lg rounded-lg"
            onClick={() => {
              scrollToElement("faq", 100);
            }}
          >
            <Link to="/faqs">FAQ's</Link>
          </Navbar.Link>

          <Navbar.Link
            active={path === "/about"}
            as={"div"}
            className="font-bold text-md lg:text-lg rounded-lg"
            onClick={() => {
              scrollToElement("about", 120);
            }}
          >
            <Link to="/about">About Us</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
