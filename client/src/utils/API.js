import axios from "axios";

export default {
    // getIncome: function() {
    //     return axios.get("/api/income");
    // },
    // getDebts: function () {
    //     return axios.get("/api/debts");
    // },
    // getInvestment: function () {
    //     return axios.get("/api/investment");
    // },
    // getUser: function(id) {
    //     return axios.get("api/user/" + id);
    // },
    getUserbyEmail: function(email) {
        return axios.get(`api/user/${email}`)
    },
    // saveIncomes: function(incomeData) {
    //     return axios.post("api/income/", incomeData);
    // },
    // saveExpenses: function(expensesData) {
    //     return axios.post("api/income/", expensesData);
    // },
    // saveDebts: function(debtsData) {
    //     return axios.post("/api/debts/", debtsData);
    // },
    // saveInvestments: function(investmentData) {
    //     return axios.post("/api/credit/", investmentData);
    // },
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    // updateUser: function(id) {
    //     return axios.post("/api/user" + id);
    // }

};
