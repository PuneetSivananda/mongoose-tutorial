/**
 * Aggregation Stages
 * -  match
 * -  group
 * -  project
 * -  sort
 * -  count
 * -  limit
 * -  skip
 * -  out
 * -  unwind *
 */

// Accumulators Stage
console.log("=============Results=start===============");

const results = db.persons.aggregate([
  { $unwind: "$tags" },
  {
    $group: {
      _id: "$tags",
    },
  },
]);

console.log(results);

console.log("=============Results=End=================");
