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
  { $group: { _id: "$eyeColor" } },
]);

console.log(results);

console.log("=============Results=End=================");

console.log("=============countryResults=start===============");

const countryResults = db.persons.aggregate([
  // Stage 1
  { $group: { _id: "$company.location.country" } },
]);

console.log(countryResults);

console.log("=============countryResults=End=================");
