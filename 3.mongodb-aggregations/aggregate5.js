/**
 * Aggregation Stages
 * -  match
 * -  group *
 * -  project
 * -  sort
 * -  count
 * -  limit
 * -  skip
 * -  out
 */

// Match and Group Stages
console.log("=============Results=start===============");

const results = db.persons.aggregate([
  // Stage 1
  { $match: { gender: "female" } },
  // Stage 2
  {
    $group: {
      _id: {
        age: "$age",
        eyeColor: "$eyeColor",
        gender: "$gender",
      },
    },
  },
]);

console.log(results);

console.log("=============Results=End=================");
