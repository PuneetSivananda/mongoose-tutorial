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

// Group Stage
console.log("=============Results=start===============");

// works on arrays
const results = db.persons.aggregate([
  { $unwind: "$tags" },
  {
    $project: {
      name: 1,
      index: 1,
      tags: 1,
    },
  },
]);

console.log(results);

console.log("=============Results=End=================");
