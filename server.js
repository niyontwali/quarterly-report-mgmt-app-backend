import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";

dotenv.config();

// imported routes
import activityRoutes from "./src/routes/activity.js";

// express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// logger middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to the App",
  });
});

// use our routes
app.use("/api/activities", activityRoutes);

// Port
const port = process.env.PORT;

//MONGO_DB_URI
const DB_URI = process.env.MONGO_DB_URI;

// connection to DB
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("MONGO DB connected");
    // listen to requests
    app.listen(port, () => {
      console.log(`Server listen on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
