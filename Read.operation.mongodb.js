use("ncit");

// db.movies.find();
//? find =reads all the array data
// db.movies.find().count();

//!operator
//!comparision operator
//? $eq ,$ne ,$lt,$lte ,$gt ,$gte
//?   $eq(===)tripple equals
// db.movies.find({name:{$eq:"Under the Dome"}});
//is also equivalent to below:
// db.movies.find({name:"Bitten"});

//? $ne

// db.movies.find({name:{ $ne:"Bitten"}});

//? $lt=less than
// db.movies.find({id:{ $lt:10}},{_id:0,name:1,id:1});
//? 0 rakhyo vane chai dekhidaina 1 rakhda dekhinxa 
//? diyena vane afai aauxa so if chadina vane 0 rakhnai parxa .

//? $gt=greater than 
 
// db.movies.find({id:{$gt:20}}, {name:1, id:1,_id:0});

//? logical operator
//? $and ,$or, $not
// db.movies.find({
//     $and:[{genres:"Drama"},
//     {
//         runtime:60,
//     },
// ]
// });
//?alternative code to $and
// db.movies.find(
//     {genres:"Drama",runtime:60},
//     {name:1,genres:1,runtime:1}
// );

//? $or
// db.movies.find({
//     $or:[{language:"English"},{"rating.average":{$gt:6.5}}],
// },
// {
// name:1,rating:1,language:1,
// }
// );

//? $not
// db.movies.find({language:{$ne:"English"}},{name:1,language:1});

//? $nor
//find movies whose genre is neither Drama not runtime is 60

// db.movies.find({
//     $nor:[{
//         genres:"Drama"
//     },
//     {
//         runtime:60,
//     }
// ]
// });

//?evaluation operator
//? $regex

// db.movies.find({summary:{ $regex:"dance competition" ,$options:"i"}});

// $options:"i" is used for case innsensitive

//!array operator
//? $size,$all,$elemMatch
 
// db.movies.find({genres:{$size:2}});

//? $all
//?alternative to $and if the field is same
//? find movies whose genres is "Drama" and "Comedy"
// db.movies.find({ $and:[{genres:"Drama"},{genres:"Comedy"}]});

//?alternative method
//  db.movies.find({genres:{$all:["Drama","Comedy","Action"]}});


//  db.movies.find({"network.country.code":"US"},{"network.country.code":1});

 // ? 2.  find movies whose rating is greater than 6 and less than 7

//  db.movies.find({$and:[{"rating.average":{$gt:6}},
//  {"rating.average":{$lt:7}}
// ]
// }
// );


// ?3. find movies whose genre includes Drama and Mystery
db.movies.find({
    "rating.average":{ $gt:6,$lt:7},

});