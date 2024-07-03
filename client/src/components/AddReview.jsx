import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button, Textarea, Label } from "flowbite-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddReview = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({ description: "", stars: 3 });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      navigate("/sign-in");
      toast.error("You must be logged in");
      return;
    }

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: currentUser._id }),
      });

      if (res.ok) {
        setFormData({ description: "", stars: 3 });
        toast.success("Review Added successfully!");
      } else {
        toast.error("Error Creating Review");
      }
    } catch (error) {
      toast.error("Error:", error.message);
    }
  };

  return (
    <>
      <h2 className="text-5xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Add a Review
      </h2>

      <div className="w-11/12 sm:w-9/12 m-auto bg-neutral-800 py-10 px-5 sm:px-10 rounded-tr-3xl rounded-bl-3xl shadow-md">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="mb-4 flex justify-center items-center flex-col">
              <div className="flex gap-x-4">
                {[1, 2, 3, 4, 5].map((starCount) => (
                  <FaStar
                    size={30}
                    key={starCount}
                    id="star"
                    className={`cursor-pointer ${
                      starCount <= formData.stars
                        ? "text-yellow-300"
                        : "text-gray-200"
                    } text-2xl`}
                    onClick={() =>
                      setFormData({ ...formData, stars: starCount })
                    }
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <Textarea
                type="text"
                placeholder="Leave a review..."
                required
                id="description"
                className="w-full bg-neutral-700 rounded-tr-3xl rounded-bl-3xl border-neutral-700 border-2 focus:ring-neutral-500 focus:border-neutral-500"
                rows={5}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
          </div>

          <Button type="submit" className="mb-4 text-neutral-200 rounded-none rounded-tr-xl rounded-bl-xl " gradientDuoTone="purpleToPink">
            Add Review
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddReview;
