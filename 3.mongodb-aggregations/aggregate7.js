/**
 * Aggregation Stages
 * -  match
 * -  group
 * -  project
 * -  sort
 * -  count *
 * -  limit
 * -  skip
 * -  out
 */

// Count Stage
console.log("=============Results=start===============");

const results = db.persons.aggregate([
  // Stage 1
  { $count: "allDocumentsCount" },
]);

console.log(results);

console.log("=============Results=End=================");
