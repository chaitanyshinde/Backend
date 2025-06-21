import mongoose from "mongoose";

const HospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    coordinates: {
      latitude: Number,
      longitude: Number,
    },
    hospitalType: {
      type: String,
      enum: [
        "Government",
        "Private",
        "Semi-Government",
        "Corporate",
        "Charitable",
      ],
      required: true,
    },
    category: {
      type: String,
      enum: [
        "General",
        "Specialty",
        "Super Specialty",
        "Multi Specialty",
        "Teaching",
        "Research",
      ],
      required: true,
    },
    departments: {
      name: String,
      head: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", HospitalSchema);
