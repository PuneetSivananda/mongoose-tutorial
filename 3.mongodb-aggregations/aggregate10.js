/**
 * Aggregation Stages
 * -  match *
 * -  group *
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
    $match: { eyeColor: { $ne: "blue" } },
  },
  //Stage 2
  {
    $group: {
      _id: {
        eyeColor: "$eyeColor",
        favoriteFruit: "$favoriteFruit",
      },
    },
  },
  //Stage 3
  {
    $sort: {
      "_id.eyeColor": 1,
      "_id.favoriteFruit": -1,
    },
  },
]);

console.log(results);

console.log("=============Results=End=================");