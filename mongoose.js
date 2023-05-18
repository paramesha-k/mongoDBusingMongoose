const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/loc8r';
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);

});
mongoose.connection.on('error', err => {
console.log('Mongoose connection error:', err);
});

const schema= new mongoose.Schema({
    Id: Number,
    name: String,
    address:String

});

const Locm = mongoose.model();

const loca = new Locm({ Id: 559, name: 'hhh',address:'visem' });

loca.save();

const Locddd = mongoose.model('Loc', schema);
Locddd.find({ 'Id': 125 }, 'name address')
.then((ll) =>{
    console.log("this is ",ll);
    // Prints "Space Ghost is a talk show host".
    //console.log('%s is a person at address %s', ll.name, ll.address);
  })
.catch((err)=>{
if(err) console.log("There is an error");

});
console.log("This is a end of the program");


