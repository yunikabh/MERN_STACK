use("ncit-data");
//database afai create gardinxa nam lekhna sath.
//?sql ma create gardai garna parxa esma pardaina

db.student.insertMany([
  {
    name: "Shreya Khanal",
    address: "Kathmandu",
    age: 21,
    isGraduated: false,
  },
  {
    name: "Kuber Pathak",
    address: "Lalitpur",
    age: 30,
    isGraduated: true,
  },

  {
    name: "Rajiv Khadka",
    address: "Bhaktapur",
    age: 25,
    isGraduated: false,
  },
]);

//!operators
//? set

//?update
//? update age of Shreya to 15.

// db.student.updateOne({
//     name:"Shreya Khanal",
// },
// {
//     $set:{age:15},
// }
// );

//?update "Shreya Khanal " to "Mina Khanal"
// db.student.updateOne({
//     name:"Mina Khanal",
// },
// {
//     $set:{name:"Shreya Khanal"},
// }
// );

//? targeting through id

// db.student.updateOne(
// {
//     _id: ObjectId('6666a282b80c7a50d95dde53')
// },
// {
//     $set:{name:"Mina Khanal"

//     },
// }
// );

//? update age of all students to 30
// db.student.updateMany(
//     {
   //yeha khali rakheko vaneko sablai apply hunu vannu ho.
//     },
//     {
//         $set:{age:30},
//     }
// )

//? increase age of kuber by 10
//? $inc  operator
// db.student.updateOne({
// name:"Kuber Pathak"

// },
// {
//     $inc:{
//         age:10,

//     },
// }
// )
//? dec vanne hudaina so inc :-2 garnu parxa

// db.student.updateOne({
//     name:"Kuber Pathak"
    
//     },
//     {
//         $inc:{
//             age:-10,
    
//         },
//     }
//     )
//?$mul
//? increase age of Rajiv by 4 times

// db.student.updateOne(
//     {
//         name:"Rajiv Khadka"
//     },
//     {
//         $mul:{
//             age:4,
//         },
//     }
// );

//?divide age of Rajiv by 2 times

// db.student.updateOne(
//        {
//             name:"Rajiv Khadka"
//         },
//         {
//             $mul:{
//                 age:1/2,
//             },
//         }
//     );


// db.student.updateOne(
//     {
//         name:" Kayansh Subedi",
//     },
//     {
//         $set:{
//             age:15,
//             address:"ktm",
//         }
//     },
//     {
//         $upsert:"True",
//     }
// )
db.student.find();



