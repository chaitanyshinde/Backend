import mongoose from "mongoose";

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    medicalLicenseNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    education: [
      {
        degree: String,
        institution: String,
        year: Number,
        location: String,
      },
    ],
    certifications: [
      {
        name: String,
        issuingBody: String,
        issueDate: Date,
        expiryDate: Date,
        certificateNumber: String,
      },
    ],
    experience: {
      type: Number,
      required: true,
    },
    workHistory: [
      {
        hospitalName: String,
        department: String,
        position: String,
        startDate: Date,
        endDate: Date,
        responsibilities: String,
      },
    ],
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
      },
    ],
    currentHospital: {
      name: String,
      department: String,
      position: String,
      startDate: Date,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
