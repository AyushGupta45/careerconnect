import {
  Modal,
  Select,
  TextInput,
  Button,
  Spinner,
  Textarea,
} from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { IoCloudUpload } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Seminars from "../components/Seminars";

const Application = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [fileUploadProgress, setFileUploadProgress] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    currentInstitution: "",
    seminarInterestedIn: "Select a seminar",
    statementOfInterest: "",
    resumeUploadLink: "",
  });
  const navigate = useNavigate();
  const filePickerRef = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleUploadFile = async (file) => {
    if (!currentUser) {
      toast.error("You must be logged in");
      navigate("/sign-in");
      return;
    }
    try {
      if (!file) {
        toast.error("Please Upload File");
        return;
      }

      const storage = getStorage();
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setFileUploadProgress(progress.toFixed(0));
        },
        () => {
          toast.error("File upload failed");
          setFileUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFileUploadProgress(null);
            setFormData({ ...formData, resumeUploadLink: downloadURL });
            filePickerRef.current.value = "";
          });
        }
      );
    } catch (error) {
      toast.error("File Upload failed");
      setFileUploadProgress(null);
    }
  };

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
          resumeUploadLink: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div id="seminar">
      <h1 className="text-4xl mb-4 font-bold text-blue-900 text-center my-4">
        Apply for Upcoming Seminar's and Placements drives
      </h1>
      <p className="text-lg text-blue-800 mb-8">
        Don't miss out on the chance to advance your career with our upcoming
        seminars and placement drives. Join industry leaders and network with
        top companies to secure your next big opportunity. Start your journey
        towards success with CareerConnect today!
      </p>
      <Seminars/>
      <div className="bg-blue-100 container w-full mx-auto flex flex-col justify-center items-center py-6 lg:flex-row gap-4">
        <div className="flex-1 w-11/12">
          <img
            src="/assets/350_REpWIE1BUiAxNDctMTI.jpg"
            alt="Home"
            className="w-full h-auto  mix-blend-multiply"
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
                <div className="flex flex-row gap-4">
                  <div className="w-full flex flex-col gap-4">
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
                  <div className="flex w-full items-center justify-center">
                    <input
                      id="resumeUpload"
                      type="file"
                      accept=".pdf, .doc, .docx"
                      onChange={(e) => handleUploadFile(e.target.files[0])}
                      ref={filePickerRef}
                      hidden
                    />
                    <div
                      className="flex flex-col items-center justify-center w-full h-48 cursor-pointer rounded-lg border border-gray-300 bg-gray-50 pb-6 pt-5 px-2"
                      onClick={
                        formData.resumeUploadLink !== ""
                          ? null
                          : () => filePickerRef.current.click()
                      }
                    >
                      {fileUploadProgress && fileUploadProgress < 100 ? (
                        <div className="w-32 h-32 flex items-center justify-center rounded-full">
                          <Spinner aria-label="Uploading..." size="xl" />
                        </div>
                      ) : (
                        <>
                          {formData.resumeUploadLink !== "" ? (
                            <>
                              <FaCircleCheck className="mb-4 h-8 w-8 text-green-500" />
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Resume Uploaded
                                </span>
                              </p>
                            </>
                          ) : (
                            <>
                              <IoCloudUpload className="mb-4 h-8 w-8 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload resume
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                PDF, DOC, or DOCX (Maximum file size: 2MB)
                              </p>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
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
