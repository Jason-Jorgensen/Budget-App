const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const DebtsSchema = new Schema({
    name: String,
    ammount: Number,
    
});

const Debts = mongoose.model("Debts", DebtsSchema);

module.exports = Debts;