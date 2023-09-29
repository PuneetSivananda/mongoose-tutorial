const mongoose = require("mongoose");
import { config } from "dotenv";

config();

main()
  .then(() => {
    console.log("Connected to the server");
  })
  .then(() => {
    const data = mongoose.connection.db.admin().command({
      listDatabases: 1,
    });
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect();
}
