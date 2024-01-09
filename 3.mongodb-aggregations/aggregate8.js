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
  { $group: { _id: { eyeColor: "$eyeColor", gender: "$gender" } } },
  //Stage 2
  {
    $count: "eyeColorAndGender",
  },
]);

console.log(results);

console.log("=============Results=End=================");
