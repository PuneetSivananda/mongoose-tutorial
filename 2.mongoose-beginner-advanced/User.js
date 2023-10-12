import { Schema, model, SchemaTypes } from "mongoose";

const addresSchema = new Schema({
  street: String,
  city: String,
});

const userSchema = new Schema({
  name: String,
  age: { type: Number, min: 1, max: 100 },
  email: {
    type: String,
    minLength: 10,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: SchemaTypes.ObjectId,
  hobbies: [String],
  address: addresSchema,
});

export const User = model("User", userSchema);
