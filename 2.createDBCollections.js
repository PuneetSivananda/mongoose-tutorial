import { connect } from "mongoose";
import { config } from "dotenv";

config();
var url = process.env.MONGO_URL;

const client = connect(url, {})
  .then(() => {
    console.log("Connected to mongodb successfully");
  })
  .catch((err) => console.error(err));
