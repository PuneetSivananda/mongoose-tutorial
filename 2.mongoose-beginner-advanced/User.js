import { Schema, model, SchemaTypes } from "mongoose";

const addresSchema = new Schema({
  street: String,
  city: String,
});

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  bestFriend: SchemaTypes.ObjectId,
  hobbies: [String],
  address: addresSchema,
});

export const User = model("User", userSchema);
