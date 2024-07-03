import { Select, TextInput, Button, Textarea } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Seminars from "../components/Seminars";

const Application = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    fullName: "",
    currentInstitution: "",
    seminarInterestedIn: "Select a seminar",
    statementOfInterest: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      toast.error("You must be logged in");
      navigate("/sign-in");
      return;
    }

    try {
      const res = await fetch("/api/seminar/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      if (res.ok) {
        toast(
          "Thank you! Your form has been submitted successfully. \n\nWe will notify or reach out to you shortly.",
          {
            duration: 6000,
          }
        );
        setFormData({
          fullName: "",
          currentInstitution: "",
          seminarInterestedIn: "Select a seminar",
          statementOfInterest: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div id="seminar" className="p-2">
      <h1 className="text-5xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Apply for Upcoming Seminar's and Placements drives
      </h1>
      <p className="text-white text-start mb-8">
        Don't miss out on the chance to advance your career with our upcoming
        seminars and placement drives. Join industry leaders and network with
        top companies to secure your next big opportunity. Start your journey
        towards success with CareerConnect today!
      </p>

      <Seminars />

      <div className="container w-full mx-auto flex flex-col justify-center items-center py-6 lg:flex-row gap-4">
        <div className="flex-1 w-11/12">
          <img
            src="/assets/seminar.png"
            alt="Home"
            className="w-full h-auto"
          />
        </div>
        <div className="flex w-full lg:w-1/2 flex-col sm:flex-row gap-4 items-center p-4">
          <div className="w-full flex flex-col justify-center items-center">
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4 justify-between">
                <TextInput
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  id="fullName"
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />

                <TextInput
                  type="text"
                  placeholder="Current Institution/Organization"
                  required
                  value={formData.currentInstitution}
                  id="currentInstitution"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentInstitution: e.target.value,
                    })
                  }
                />

                <Select
                  id="seminarInterestedIn"
                  value={formData.seminarInterestedIn}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seminarInterestedIn: e.target.value,
                    })
                  }
                  className="w-full"
                >
                  <option value="Uncategorized">Select a seminar</option>
                  <option value="Machine Learning Fundamentals">
                    Machine Learning Fundamentals
                  </option>
                  <option value="Web Development Trends">
                    Web Development Trends
                  </option>
                  <option value="Digital Marketing Strategies">
                    Digital Marketing Strategies
                  </option>
                  <option value="Blockchain Technology Overview">
                    Blockchain Technology Overview
                  </option>
                  <option value="Artificial Intelligence Applications">
                    Artificial Intelligence Applications
                  </option>
                  <option value="Cybersecurity Essentials">
                    Cybersecurity Essentials
                  </option>
                  <option value="Data Science Bootcamp">
                    Data Science Bootcamp
                  </option>
                  <option value="UX/UI Design Principles">
                    UX/UI Design Principles
                  </option>
                  <option value="Cloud Computing Solutions">
                    Cloud Computing Solutions
                  </option>
                  <option value="Entrepreneurship Workshop">
                    Entrepreneurship Workshop
                  </option>
                  <option value="Virtual Reality Insights">
                    Virtual Reality Insights
                  </option>
                  <option value="Mobile App Development Techniques">
                    Mobile App Development Techniques
                  </option>
                </Select>

                <Textarea
                  type="text"
                  placeholder="Brief Statement of Interest"
                  required
                  value={formData.statementOfInterest}
                  id="statementOfInterest"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      statementOfInterest: e.target.value,
                    })
                  }
                  className="h-full"
                />
              </div>

              <Button type="submit" gradientDuoTone="purpleToPink">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
