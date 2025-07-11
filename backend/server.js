import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "mongoose";
import connectDB from "./config/mongodb.js";
import pkg from "@eslint/js";
import connectCloudinary from "./config/cloudinary.js";
const { js } = pkg;

//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

//api
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log("Server started on PORT: " + port);
});
