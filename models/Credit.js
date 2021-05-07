const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const CreditSchema = new Schema({
    name: String,
    ammount: Number,
    interest: Number,
    date: {
        type:Date,
        default: Date.now,
    }
});

const Credit = mongoose.model("Credit", CreditSchema);

module.exports = Credit;