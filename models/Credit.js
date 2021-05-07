const mongoose = require ("mongoose");
const Schema = mongoos.Schema;

const CreditSchema = new Schema({
    name: String,
    ammount: Number
});

const Credit = mongoose.model("Credit", CreditSchema);

module.exports = Credit;