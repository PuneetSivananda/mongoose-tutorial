/**
 * Aggregation Stages
 * -  match
 * -  group
 * -  project *
 * -  sort
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
    $project: {
      _id: 0,
      isActive: 1,
      gender: 1,
      name: 1,
      "company.location.country": 1,
    },
  },
  //Stage 2
  {
    $limit: 5,
  },
]);

console.log(results);

console.log("=============Results=End=================");
