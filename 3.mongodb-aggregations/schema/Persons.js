import { Schema, model } from "mongoose";

export const personSchema = new Schema({
  index: Number,
  name: String,
  isActive: Boolean,
  registered: Date,
  age: Number,
  gender: String,
  eyeColor: String,
  favoriteFruit: String,
  company: {
    title: String,
    email: String,
    phone: String,
    location: {
      country: String,
      address: String,
    },
  },
  tags: [String],
});

const Person = model("Person", personSchema);

export default Person;
