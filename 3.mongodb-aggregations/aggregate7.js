/**
 * Aggregation Stages
 * -  match
 * -  group
 * -  project
 * -  sort
 * -  count *
 * -  limit
 * -  skip
 * -  out
 */

// Count Stage
console.log("=============Results=start===============");

const results = db.persons.aggregate([]).toArray();
const results1 = db.persons.aggregate([]).itcount();

console.log(results.length);
console.log(results1);

console.log("=============Results=End=================");
