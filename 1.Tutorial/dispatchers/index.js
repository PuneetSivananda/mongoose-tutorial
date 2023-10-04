import Blog from "../models/blog.js";
import fs from "fs";
import { config } from "dotenv";

config({ path: "../../../.env" });

const CreateBlogPost = async () => {
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

export default CreateBlogPost;
