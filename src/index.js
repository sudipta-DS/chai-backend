import express from "express";
import connectionDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`server connected successfully at PORT : ${process.env.PORT}`);
  connectionDB();
});
