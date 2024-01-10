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

// Project Stage
console.log("=============Results=start===============");

const results = db.persons.aggregate([
  //Stage 1
  {
    $project: {
      _id: 0,
      index: 1,
      name: 1,
      info:{
        eyes: "$eyeColor",
        company: "$company.title",
        country: "$company.location.country"
      }
    },
  },
  //Stage 2
  {
    $limit: 5,
  },
]);

console.log(results);

console.log("=============Results=End=================");
