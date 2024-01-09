/**
 * Aggregation Stages
 * -  match
 * -  group
 * -  project
 * -  sort *
 * -  count
 * -  limit
 * -  skip
 * -  out
 */

// Sort Stage
console.log("=============Results=start===============");

const results = db.persons.aggregate([
  //Stage 1
  {
    $sort: { name: 1 },
  },
]);

console.log(results);

console.log("=============Results=End=================");
