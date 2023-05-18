const mongoose = require('mongoose');

const FaunaSchema = new mongoose.Schema({
    category : {type:String,default : "mammal"},
    description: { type: String, required: true },
    imageUrl: { type: String },
});

module.exports = mongoose.model('Fauna', FaunaSchema);
