import axios from "axios";

export default {
    getIncome: function() {
        return axios.get("/api/income");
    },
    getDebts: function () {
        return axios.get("/api/debts");
    },
    getInvestment: function () {
        return axios.get("/api/investment");
    },
    // getUser: function(id) {
    //     return axios.get("api/user/" + id);
    // },
    getUserbyEmail: function(email) {
        return axios.get(`api/user/${email}`)
    },
    saveIncomes: function(id, incomeData) {
        return axios.post("api/incomes/", id , incomeData);
    },
    saveExpenses: function(id, expensesData) {
        return axios.post("api/expenses/", id, expensesData);
    },
    saveDebts: function(id, debtsData) {
        return axios.post("/api/debts/", id, debtsData);
    },
    saveInvestments: function(id, investmentData) {
        return axios.post("/api/investments/", id, investmentData);
    },
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    updateUser: function(id) {
        return axios.post("/api/user" + id);
    }

};
