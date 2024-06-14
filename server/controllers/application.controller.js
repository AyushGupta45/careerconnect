import Application from "../models/application.model.js";

export const applyForSeminar = async (req, res) => {
  try {
    const {
      fullName,
      currentInstitution,
      seminarInterestedIn,
      statementOfInterest,
      resumeUploadLink,
    } = req.body;

    const finalResumeUploadLink = resumeUploadLink || "https://pdfobject.com/pdf/sample.pdf";

    const newApplication = new Application({
      userId: req.user.id,
      fullName,
      currentInstitution,
      seminarInterestedIn,
      statementOfInterest,
      resumeUploadLink: finalResumeUploadLink,
    });

    await newApplication.save();
    res.status(200).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getapplications = async (req, res, next) => {
  try {
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const applications = await Application.find()
      .sort({ updatedAt: sortDirection })
      .populate("userId", "username");
    res.status(200).json({ applications });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
};
