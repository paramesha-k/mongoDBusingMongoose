const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/loc8r';
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);

});

mongoose.connection.on('error', err => {
return console.log('Mongoose connection error:', err);
});

const reviewSchema = new mongoose.Schema({
    
    authorName:{
          type: String,
          required: true
    },
    reviewText: String
});
const locationSchema = new mongoose.Schema({
   locationName:{
         type: String,
         required: true
   },
   facilities:[String],
   reviews:[reviewSchema]
});

const ReviewModel=mongoose.model("reviewModel",reviewSchema,"review");
const LocationModel=mongoose.model("locationModel",locationSchema,"location");

ReviewModel.where("authorName").exists(false)
.then((res)=>{
   console.log("Result of exists",res);
});

console.log(LocationModel.schema);

LocationModel.aggregate(
 [{
      $group:{
      _id: "$locationName",
      totalAmount:{$sum:"$rating"},
      
      }
 }]
)
.then((res)=>{
console.log(res);
})
.catch((err)=>{
      throw err;
});