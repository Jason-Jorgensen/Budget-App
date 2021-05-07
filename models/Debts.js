const mongoose = require ("mongoose");
const Schema = mongoos.Schema;

const DebtsSchema = new Schema({
    name: String,
    ammount: Number
});

const Debts = mongoose.model("Debts", DebtsSchema);

module.exports = Debts;