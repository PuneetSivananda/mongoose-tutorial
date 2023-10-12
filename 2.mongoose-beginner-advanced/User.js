import { Schema, model, SchemaTypes } from "mongoose";

const addresSchema = new Schema({
  street: String,
  city: String,
});

const userSchema = new Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
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
  bestFriend: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addresSchema,
});

export const User = model("User", userSchema);
