import fs from "fs";
import mongoose from "mongoose";
import { personSchema } from "./schema/Persons.js";

const uri = "mongodb://localhost:27017/mydb";
let collectionName = "persons";
let dataPath = `./data/Persons.json`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    try {
      const PersonModel = mongoose.model(collectionName, personSchema);
      const jsonData = fs.readFileSync(dataPath, "utf8");
      const parsedData = JSON.parse(jsonData);

      await PersonModel.insertMany(parsedData);

      console.log("Data inserted into MongoDB");
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      mongoose.disconnect();
    }
  });
