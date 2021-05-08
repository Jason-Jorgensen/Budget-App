import axios from "axios";

export default {
    getIncome: function() {
        return axios.get("/api/income");
    },
    getDebts: function () {
        return axios.get("/api/debts");
    },
    getCredit: function () {
        return axios.get("/api/credit");
    },
    getUser: function(id) {
        return axios.get("api/user" + id);
    },
    saveIncome: function(incomeData) {
        return axios.post("api/income", incomeData);
    },
    saveDebts: function(debtsData) {
        return axios.post("/api/debts", debtsData);
    },
    saveCredit: function(creditData) {
        return axios.post("/api/credit", creditData);
    },
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    updateUser: function(id) {
        return axios.post("/api/user" + id);
    }

};
