/**
 * Aggregation Stages
 * -  match
 * -  group *
 * -  project
 * -  sort
 * -  count *
 * -  limit
 * -  skip
 * -  out
 */

// Group and Count Stage
console.log("=============Results=start===============");

const results = db.persons.aggregate([
  //Stage 1
  { $match: { age: { $gte: 25 } } },
  //Stage 2
  { $group: { _id: { eyeColor: "$eyeColor", age: "$age" } } },
  //Stage 3
  {
    $count: "eyeColorAndAge",
  },
]);

console.log(results);

console.log("=============Results=End=================");
