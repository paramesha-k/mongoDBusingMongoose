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
    reviewText: String,
    rating:Number
});
const locationSchema = new mongoose.Schema({
   locationName:{

         type: String,
         required: true
   },
   rating:Number,
   facilities:[String],
   reviews:[reviewSchema]
});

const ReviewModel=mongoose.model("reviewModel",reviewSchema,"review");
const LocationModel=mongoose.model("locationModel",locationSchema,"location");

mongoose.model('reviewModel').find({authorName:"jjjj"}).exec()
          .then((res)=>{
            console.log("The find results",res.length);
          });
console.log("end");

ReviewModel.where("authorName").exists(true)
.then((res)=>{
   console.log("Result of exists",res);
});

