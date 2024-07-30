import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async () => {
  try {
    const dbConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Database connected successfully at ${dbConnectionInstance.connection.port}`
    );
  } catch (error) {
    console.log("ERROR : ", error.message);
    process.exit(1);
  }
};

export default connectionDB;
