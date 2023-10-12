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
  /**
    const user = await User.create({
    name: "Kyle",
    age: 30,
    hobbies: ["WeightLifting", "Bowling"],
    address: {
      street: "Main St.",
    },
    email: "sample@user.com",
  });
  **/

  // find user by id
  const user = await User.findById("6527881c84171fb29cb9ad1f");
  console.log(user);

  // find all users that match
  const kyle = await User.find({ name: "Kyle" });
  console.log(kyle);

  // find first or one match from collection
  const findOne = await User.findOne({ name: "Kyle" });
  console.log(findOne);

  // check if user exists in the db
  const oneUser = await User.exists({ name: "Kyle" });
  console.log(oneUser);

  // delete one user
  const deletedUser = await User.deleteOne({ name: "Kyle" });
  console.log(deletedUser);
}
