import mongoose, { connect } from "mongoose";
import { config } from "dotenv";
import CreateBlogPost from "./dispatchers/create.js";

config({ path: "../.env" });

let dbURI = `${process.env.MONGO_URL}` + "/node-tuts";
console.log(dbURI);

connect(dbURI, {
  useNewUrlParser: true,
})
  .then(async (result) => {
    console.log("Connected to db");
    // call the create command here
    await CreateBlogPost();
  })
  .then(() => {
    mongoose.connection.close();
    console.log("Disconnecting");
    setTimeout(() => {
      process.exit();
    }, 2000);
  })
  .catch((err) => {
    console.error(err);
  });
