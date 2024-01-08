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
  { $group: { _id: { age: "$age", eyeColor: "$eyeColor" } } },
  // Stage 2
  { $match: { "_id.age": { $gt: 30 } } },
]);

console.log(results);

console.log("=============Results=End=================");
