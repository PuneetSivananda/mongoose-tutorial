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
 * -  unwind *
 * -  sum
 */

// Accumulators - (group, unwind) Stage
console.log("=============Results=start===============");

const results = db.persons.aggregate([
  {
    $unwind: "$tags",
  },
  {
    $group: {
      _id: "$tags",
      count: { $sum: 1 },
    },
  },
]);

console.log(results);

console.log("=============Results=End=================");
