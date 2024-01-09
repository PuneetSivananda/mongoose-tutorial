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

const results = db.persons.aggregate([]).toArray(); //slowest
const results1 = db.persons.aggregate([]).itcount();
const results2 = db.persons.aggregate([
  {
    $count: "total",
  },
]); //fastest

console.log(results.length);
console.log(results1);
console.log(results2);

console.log("=============Results=End=================");
