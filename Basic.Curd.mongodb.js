//create db name
use("ncit");

//! insert one 
//?to  add single document 
// db.student.insertOne({
//     name:"Yunika",
//     age:20,
//     address:"Dhapashi",
// })

//!insert Many
//?to add multiple documents 

// db.student.insertMany([
//     {
//         name:"Yunika",
//         age:20,
//          address:"Dhapashi",
//     },
//     {
//         name:"Soniya",
//         age:20,
//          address:"pkr",
//     },
// {
//             name:"Shreya",
//             age:20,
//              address:"ktm",
//         },

// ])
//  db.student.find();

 //! to read all data
 //db .student.find();

 //! to read single data
//  db.student.findOne({name:"Yunika"});

 //!delete single data
//  db.student.deleteOne({name:"Yunika"});
//  db.student.find();

 //!delete multiple data
//  db.student.deleteMany({age:20});
//  db.student.find();

 //! edit single data
//   db.student.updateOne({
//     name:"Shreya"},
//     {
//         $set:{
//             address:"Biratnagar",
//         }
//     }
//   );

//! edit multiple data
db.student.updateMany({
    age:20,
},
{
    $set:{
        address:"pokhara"
    }
})
  db.student.find();


