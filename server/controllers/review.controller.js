import Review from "../models/review.modal.js";

export const review = async (req, res) => {
  const { stars, description, userId } = req.body;

  try {
    const newReview = new Review({
      userId: userId,
      stars: stars,
      description: description,
    });
    await newReview.save();
    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add review" });
  }
};

export const getreviews = async (req, res, next) => {
  try {
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const reviews = await Review.find()
      .sort({ updatedAt: sortDirection })
      .populate("userId", "username");
    res.status(200).json({ reviews });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};