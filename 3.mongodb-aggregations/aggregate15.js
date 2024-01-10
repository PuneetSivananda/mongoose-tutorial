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
 * -  unwind *
 * -  sum *
 */

// Accumulators - (group, unwind) Stage
console.log("=============Results=start===============");

/**
 * const results = db.persons.aggregate([
  {
    $unwind: "$tags",
  },
  {
    $group: {
      _id: "$tags",
      count: { $sum: NumberInt(1) },
    },
  },
]);
*/

// Accumulators - (group) Stage
// const results = db.persons.aggregate([
//   {
//     $group: {
//       _id: "$company.location.country",
//       avgAge: { $avg: "$age" },
//     },
//   },
// ]);

// Unary Operators - (type, or, lt, gt, and, multiply) Stage
// works on each document, works in project stage
// const results = db.persons.aggregate([
//   {
//     $project: {
//       name: 1,
//       nameType: { $type: "$name" },
//       tagsType: { $type: "$tags" },
//       eyeColorType: { $type: "$eyeColor" },
//       ageType: { $type: "$age" },
//     },
//   },
// ]);

// console.log(results);

// Out Operators  Stage

// const results = db.persons.aggregate([
//   {
//     $project: {
//       name: 1,
//       nameType: { $type: "$name" },
//       tagsType: { $type: "$tags" },
//       eyeColorType: { $type: "$eyeColor" },
//       ageType: { $type: "$age" },
//     },
//   },
//   {
//     $out: "outCollection",
//   },
// ]);

// console.log(results);

// allowDiskUse operation

const results = db.persons.aggregate(
  [
    {
      $project: {
        name: 1,
        nameType: { $type: "$name" },
        tagsType: { $type: "$tags" },
        eyeColorType: { $type: "$eyeColor" },
        ageType: { $type: "$age" },
      },
    },
    {
      $out: "outCollection",
    },
  ],
  { allowDiskUse: true }
);

console.log(results);

console.log("=============Results=End=================");
