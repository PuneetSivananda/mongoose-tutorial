import Blog from "../models/blog.js";
import fs from "fs";
import { config } from "dotenv";

config({ path: "../../../.env" });

const CreateBlogPost = async () => {
  try {
    var dbList = fs.readFileSync(process.env.JSON_FILE_PATH, "utf-8");
    var listItems = JSON.parse(dbList);
    const results = listItems.map((element) => {
      return new Blog({
        title: element.title,
        snippet: element.snippet,
        body: element.body,
      });
    });

    var bulkOps = [];
    // [populate gasStation as needed]
    // Each document should look like this: (note the 'upsert': true)
    results.forEach((element) => {
      let upsertDoc = {
        insertOne: {
          document: element,
        },
      };
      bulkOps.push(upsertDoc);
    });
    console.log(bulkOps);
    Blog.bulkWrite(bulkOps)
      .then((bulkWriteOpResult) => {
        console.log("BULK update OK");
        console.log(JSON.stringify(bulkWriteOpResult, null, 2));
      })
      .catch((err) => {
        console.log("BULK update error");
        console.log(JSON.stringify(err, null, 2));
      });
  } catch (err) {
    console.error("Error reading the database");
  }
};

export default CreateBlogPost;
