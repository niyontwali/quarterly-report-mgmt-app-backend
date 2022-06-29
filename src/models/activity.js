import mongoose from "mongoose";

const { Schema } = mongoose;

const ActivitySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    quarter: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Activity", ActivitySchema)