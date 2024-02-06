import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/connection.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about our stack

const port = 8080;

app.get("/", (req, res) => {
  res.status(201).json("Home GET request");
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server connect on: ${port}`);
      });
    } catch (err) {
      console.log("IServer Connect Failed", err);
    }
  })
  .catch((err) => {
    console.log("Invalid Database connection", err);
  });
