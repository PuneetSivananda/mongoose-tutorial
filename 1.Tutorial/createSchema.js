import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: "../.env" });

let dbURI = `${process.env.MONGO_URL}` + "/node-tuts";
console.log(dbURI);

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error(err);
  });
