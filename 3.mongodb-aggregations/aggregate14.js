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
    $project: {
      _id: 0,
      index: 1,
      name: 1,
      info: {
        eyeColor: "$eyeColor",
        company: "$company.title",
        country: "$company.location.country",
      },
    },
  },
  {
    $group: {
      _id: "$info.eyeColor",
    },
  },
]);

console.log(results);

console.log("=============Results=End=================");
