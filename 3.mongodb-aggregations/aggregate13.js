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

// Unwind Stage
console.log("=============Results=start===============");

// works on arrays
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
