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
  const user = new User({
    name: "Puneet",
    age: 30,
  });
  await user.save().then(() => console.log("User Saved"));
  console.log(user);
}
