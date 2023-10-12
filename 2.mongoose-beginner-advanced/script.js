import mongoose, { connect } from "mongoose";
import { config } from "dotenv";
import { User } from "./User.js";

config({ path: "../.env" });

let dbURI = `${process.env.MONGO_URL}` + "/node-tuts";
console.log(dbURI);

connect(dbURI, {
  useNewUrlParser: true,
}).then(async () => {
  console.log("Connected to db");
});

run()
  .then(() => {
    mongoose.connection.close();
    console.log("Disconnecting");
    setTimeout(() => {
      process.exit();
    }, 2000);
  })
  .catch((err) => {
    console.err(err);
    mongoose.connection.close();
  });
async function run() {
  // Create User
  const user = await User.create({
    name: "Kyle",
    age: 30,
    hobbies: ["WeightLifting", "Bowling"],
    address: {
      street: "Main St.",
    },
    email: "sample@user.com",
  });

  console.log(user);
}
