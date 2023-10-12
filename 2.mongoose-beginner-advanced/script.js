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

  // const user = await User.create({
  //   name: "Gray",
  //   age: 10,
  //   hobbies: ["WeightLifting", "Skiiing"],
  //   address: {
  //     street: "Main St.",
  //   },
  //   email: "Gray@user.com",
  // });
  // console.log(user);

  // find user by id
  // const user = await User.findById("6527881c84171fb29cb9ad1f");
  // console.log(user);

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
  // const deletedUser = await User.deleteOne({ name: "Kyle" });
  // console.log(deletedUser);

  // mongoose queries
  const whereUser = await User.where("name").equals("Kyle");
  console.log("====================where query======================");
  console.log(whereUser);

  const ageGt12 = await User.where("age").gt("12");
  console.log("====================where age > 12====================");
  console.log(ageGt12);

  const ageGt12NameKyle = await User.where("age")
    .gt(12)
    .where("name")
    .equals("Kyle");
  console.log("===const==========where age > 12 and name = kyle============");
  console.log(ageGt12NameKyle);

  const ageLt12NameKyle = await User.where("age")
    .lt(12)
    .where("name")
    .equals("Kyle");
  console.log("=============where age < 12 and name = kyle============");
  console.log(ageLt12NameKyle);

  const usersLessThan40 = await User.where("age").lt(40).limit(1);
  console.log("=============where age < 40 ===========================");
  console.log(usersLessThan40);

  const usersEquals10 = await User.where("age").equals(10).limit(1);
  console.log("=============where age = 10 ===========================");
  console.log(usersEquals10);

  // add Best Friend to Kyle
  console.log("================best friend ===========================");
  kyle[0].bestFriend = "65279ff3cb1f969365b1ff27";
  await kyle[0].save();
  console.log(kyle);

  const getKyle = await User.where("name")
    .equals("Kyle")
    .where("age")
    .gt(12)
    .populate("bestFriend")
    .limit(1);
  console.log("================populate best friend ====================");
  console.log(getKyle);

  console.log("============Custom Hooks for the model====================");
  const userSpeak = await User.findOne({ name: "Kyle" });
  userSpeak.sayHi();
}
