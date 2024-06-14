import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    currentInstitution: {
      type: String,
      required: true,
    },
    seminarInterestedIn: {
      type: String,
      required: true,
    },
    statementOfInterest: {
      type: String,
      required: true,
    },
    resumeUploadLink: {
      type: String,
      required: true,
      default:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
