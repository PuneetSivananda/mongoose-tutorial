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
 */

// Match

const results = db.persons.aggregate([
  // Stage 1
  {
    $match: { age: { $gt: 25 } },
  },
]);

// console.log(results);
console.log("=============tagsResults=start===============");
const tagsResults = db.persons.aggregate([
  // Stage 1
  {
    $match: { tags: { $size: 3 } },
  },
]);
console.log(tagsResults);

console.log("=============tagsResults=End=================");
