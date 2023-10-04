import Blog from "../models/blog.js";
import fs from "fs";

const CreateBlogPost = async () => {
  var dbList = fs.readFileSync(
    "/Users/vn56bm8/Documents/mongod-tutorial/1.Tutorial/data/dummy.json",
    "utf-8"
  );
  var listItems = JSON.parse(dbList);

  console.log(listItems);
  console.log(listItems[2]);

  return await Blog.create({
    title: "Sunt laboris ex elit laboris velit est occaecat mollit ipsum.",
    snippet:
      "Culpa culpa commodo quis aute dolore nisi. Reprehenderit ut et ullamco dolor quis nostrud consectetur non officia qui nostrud anim nostrud.",
    body: "Aliqua adipisicing ipsum tempor laborum anim laborum magna irure laboris adipisicing. Cupidatat esse proident magna laborum laboris cupidatat aliqua do excepteur aliquip qui ex. Minim laborum nulla sint amet in minim amet duis.\r\nCillum laborum cupidatat ex consectetur. Pariatur do quis sint sunt et aliquip incididunt cillum excepteur Lorem mollit in quis consequat. Excepteur fugiat magna culpa cupidatat enim qui duis labore dolore commodo consequat. Labore Lorem mollit qui veniam dolore ex qui magna. Eu excepteur voluptate proident ut proident dolore do est. Mollit aliqua officia aliquip anim adipisicing commodo occaecat aliquip ullamco est commodo. Laboris cillum culpa nisi Lorem quis adipisicing qui eu tempor cillum.\r\n",
  });
};

export default CreateBlogPost;
