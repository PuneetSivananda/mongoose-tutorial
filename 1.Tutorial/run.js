import mongoose, { connect } from "mongoose";
import { config } from "dotenv";
import { CreateBlogPost, DeleteAllBlogPosts } from "./dispatchers/index.js";

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
    console.log("Creating Database and seeding data...");
    await CreateBlogPost();
    console.log("Create DB completed...");
    // Query Data and display the results in console.
    // Edit a document, display before and after
    // Delete a document based on the id
    // Delete all records in the db
    console.log("Deleting all the records in the database...");
    await DeleteAllBlogPosts();
    console.log("Deletion Successfull");
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
