
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
   rating:Number,
   facilities:[String],
   reviews:[reviewSchema]
});

const ReviewModel=mongoose.model("reviewModel",reviewSchema,"review");
                  mongoose.model("locationModel",locationSchema,"location");

//var r = mongoose.model('reviewModel').create({authorName:"HHHH",reviewText:"This is a review"});
//const Rmodel=mongoose.model('reviewModel');
 //r =  Rmodel({authorName:"jjjj",reviewText:"This is a review"});

const rdoc = new ReviewModel({authorName:"kkk",reviewText:"This is a review for kkk"});
rdoc.save()
 .then(()=>{
      console.log("inserted");
 })

console.log("this is r",rdoc);
mongoose.model('locationModel').create({locationName:"vvce",facilities:["coffee",'tea','cookies'],rating:4,reviews:[rdoc]});

console.log(mongoose.modelNames());
console.log("END");    