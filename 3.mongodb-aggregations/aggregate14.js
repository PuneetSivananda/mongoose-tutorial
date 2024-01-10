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
 * -  unwind
 * -  sum *
 */

// Accumulators Stage
console.log("=============Results=start===============");

const results = db.persons.aggregate([
  {
    $group: {
      _id: "$age",
      count: { $sum: 1 },
    },
  },
]);

console.log(results);

console.log("=============Results=End=================");
