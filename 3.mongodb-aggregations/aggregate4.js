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

// Group by Multiple fields

console.log("=============Results=start===============");

const results = db.persons.aggregate([
  // Stage 1
  { $group: { _id: "$eyeColor" } },
]);

console.log(results);

console.log("=============Results=End=================");
