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
  { $group: { _id: "$company.location.country" } },
  //Stage 2
  {
    $count: "countriesCount",
  },
]);

console.log(results);

console.log("=============Results=End=================");
