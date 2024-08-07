import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    videoFile: { type: String, required: true },
    thumbnail: { type: String, required: true },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String, //Cloudinary description
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const videoModel = new mongoose.model("Video", videoSchema);

export default videoModel;
