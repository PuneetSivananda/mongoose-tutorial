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

// Group

console.log("=============Results=start===============");

const results = db.persons.aggregate([
  // Stage 1
  { $group: { _id: "$age" } },
]);

console.log(results);

console.log("=============Results=End=================");
