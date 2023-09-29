import mongoose, { connect, Schema, model } from "mongoose";
import { config } from "dotenv";

config();

const sampleSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
});

const sample = model("Sample", sampleSchema);

var url = process.env.MONGO_URL;
console.log(url);
const connStr = url + "/sampleData";
const client = connect(connStr, {})
  .then(async () => {
    console.log("Connected to mongodb successfully");
    await sample.create({ firstName: "Peter", lastName: "Thiel" });
  })
  .then(() => {
    mongoose.connection.close();
    console.log("Disconnecting");
    setTimeout(() => {
      process.exit();
    }, 2000);
  })
  .catch((err) => console.error(err));
