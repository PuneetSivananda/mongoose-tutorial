import Blog from "../models/blog.js";
import fs from "fs";
import { config } from "dotenv";

config({ path: "../../../.env" });

export const CreateBlogPost = async () => {
  try {
    var dbList = fs.readFileSync(process.env.JSON_FILE_PATH, "utf-8");
    var listItems = JSON.parse(dbList);
    const results = listItems.map((element) => {
      return {
        title: element.title,
        snippet: element.snippet,
        body: element.body,
      };
    });

    return await Blog.insertMany(results)
      .then((insertManyOpResult) => {
        console.log("BULK insert OK");
        console.log(JSON.stringify(insertManyOpResult, null, 2));
      })
      .catch((err) => {
        console.log("BULK insert error");
        console.log(JSON.stringify(err, null, 2));
      });
  } catch (err) {
    console.error("Error reading the database");
  }
};

// Return a single blog find by the id
export const GetBlogById = async () => {
  try {
    return await Blog.findOne()
      .then((blog) => blog)
      .catch((err) => {
        console.err(err);
      });
  } catch (err) {
    console.err(`Error Retrieving the Blog by id: ${blogId}`);
  }
};

// Edit a Blog title based on the id given
export const EditBlogById = async ({ blogId, text }) => {
  try {
    return await Blog.findOneAndUpdate(
      { _id: blogId }, // filter
      { title: text }, // update the document
      {
        new: true, // returns the updated Value
      }
    );
  } catch (err) {
    console.error(`Eroor editing the blog by id: ${blogId}`);
  }
};

export const DeleteAllBlogPosts = async () => {
  try {
    return await Blog.deleteMany({})
      .then((deleteManyOpResult) => {
        console.log("BULK Delete OK");
        console.log(JSON.stringify(deleteManyOpResult, null, 2));
      })
      .catch((err) => {
        console.log("BULK Delete error");
        console.log(JSON.stringify(err, null, 2));
      });
  } catch (err) {
    console.error("Error deleting records from database");
  }
};
