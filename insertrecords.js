const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/loc8r';
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);

});
mongoose.connection.on('error', err => {
console.log('Mongoose connection error:', err);
throw err;
});

const location= new mongoose.Schema({
    Id        :  Number,
    name      :  String,
    address   :  String,
    rating    :  {
                    type   : mongoose.Types.Decimal128,
                    default: 0,
                    min    : 0,
                    max    : 5
                 },
    facilities : [String]

});