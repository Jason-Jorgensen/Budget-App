import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Incomes from "../components/Income/Income";
import Debts from "../components/Debt/Debt";
import Progressbar from "../components/ProgressBar/ProgressBar";
import Expenses from "../components/Expenses/Expenses";
import Investments from "../components/Investments/Investments";
import formsContext from "../utils/formsContext";
import expensesContext from "../utils/expensesContext";
import Login from "../pages/Login";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import API from "../utils/API";

let testItems = {
    "salary": 200,
    "bonus": 100,
    "personalCont": 3,
    "employerCont": 3,
    "additionalIncome": 120,
    "cash": 10000,
    "retirementBalance": 40000,
    "investorType": "agresive"
}

let testUser = {
    email: "test@test.com"
}


function Form() {

    const { user } = useAuth0();
    console.log(user)
    const [income, setIncome] = useState({
        salary: 0,
        bonus: 0,
        personalCont: 0,
        employerCont: 0,
        additionalIncome: 0,
        cash: 0,
        retirementBalance: 0,
        investorType: ""
    });
    const [expenses, setExpenses] = useState({

    });

    const [debts, setDebts] = useState({
    
    });

    const [investments, setInvestments] = useState({
    
    });

    const incomeChange = (event) => {
        const { name, value } = event.target
        setIncome({ ...income, [name]: value })
    }

    const expenseChange = (event) => {
        const {name, value} = event.target
        setExpenses({...expenses,[name]:value})
    }

    const debtChange = (event) => {
        const {name, value} = event.target
        setDebts({...debts,[name]:value})
    }

    const investmentChange = (event) => {
        const {name, value} = event.target
        setInvestments({...investments,[name]:value})
    }
    
    const incomeSubmit = (e) => {
        e.preventDefault();
        console.log(testItems)
        API.saveIncome(testItems)
        .then(res => console.log(res)
        );
    }
        
    const expenseSubmit = (e) => {
        e.preventDefault();
        console.log(testItems)
        API.saveExenses(testItems)
        .then(res => console.log(res)
        );
    }

    const debSubmit = (e) => {
        e.preventDefault();
        console.log(testItems)
        API.saveDebts(testItems)
        .then(res => console.log(res)
        );
    }

    const investmentSubmit = (e) => {
        e.preventDefault();
        console.log(testItems)
        API.saveInvestment(testItems)
        .then(res => console.log(res)
        );
    }

    const updateUser = (e) => {
        
    }
    
    // function updateIncome() => {
    //     setIncome({...income,salary,secondSalary})
    // }


    return (
        <div>
            <formsContext.Provider value={income}>
            <Progressbar />
            <Switch>
            <Route exact path={"/forms"}>
            <Incomes incomeChange={incomeChange} incomeSubmit={incomeSubmit}/>
            <Expenses expenseChange={expenseChange} expenseSubmit={expenseSubmit} />
            <Debts debtChange={debtChange} debSubmit={debSubmit}/>
            <Investments investmentChange={investmentChange} investmentSubmit={investmentSubmit}/>
            </Route>
            {/* <Credits /> */}
            </Switch>
            
                <button onClick={incomeSubmit}>submit</button>

            </formsContext.Provider>
        </div>
    )
}

export default Form
