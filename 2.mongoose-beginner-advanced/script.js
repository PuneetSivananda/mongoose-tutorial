import mongoose, { connect } from "mongoose";
import { config } from "dotenv";
import { User } from "./User.js";

config({ path: "../.env" });

let dbURI = `${process.env.MONGO_URL}` + "/node-tuts";
console.log(dbURI);

connect(dbURI, {
  useNewUrlParser: true,
})
  .then(async (result) => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error(err);
  });

run().then(() => {
  mongoose.connection.close();
  console.log("Disconnecting");
  setTimeout(() => {
    process.exit();
  }, 2000);
});
async function run() {
  // Create User
  const user = await User.create({
    name: "Kyle",
    age: 31,
    hobbies: ["WeightLifting", "Bowling"],
    address: {
      street: "Main St.",
    },
  });

  console.log(user);
}
