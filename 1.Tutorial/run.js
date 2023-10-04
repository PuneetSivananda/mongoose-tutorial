import mongoose, { connect } from "mongoose";
import { config } from "dotenv";
import CreateBlogPost from "./dispatchers/index.js";

config({ path: "../.env" });

let dbURI = `${process.env.MONGO_URL}` + "/node-tuts";
console.log(dbURI);

connect(dbURI, {
  useNewUrlParser: true,
})
  .then(async (result) => {
    console.log("Connected to db");
    // call the create command here
    // seed Data
    const seedData = await CreateBlogPost();
    console.log("Querying the data");
    // Query Data and display the results in console.
    // Edit a document, display before and after
    // Delete a document based on the id
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
