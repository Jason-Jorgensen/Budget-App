import React, { useState } from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Incomes from "../components/Income/Income";
import Progressbar from "../components/ProgressBar/ProgressBar";
import Expenses from "../components/Expenses/Expenses";
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

    const incomeChange = (event) => {
        const { name, value } = event.target
        setIncome({ ...income, [name]: value })
    }

    const expenseChange = (event) => {
        const {name, value} = event.target
        setExpenses({...expenses,[name]:value})
    }
    
    const incomeSubmit = (e) => {
        e.preventDefault();
        console.log(testItems)
        API.saveIncome(testItems)
        .then(res => console.log(res)
        );
    }
    // function updateIncome() => {
    //     setIncome({...income,salary,secondSalary})
    // }


    return (
        <div>
            <formsContext.Provider value={income}>
            
            <Progressbar />
            <Incomes incomeChange={incomeChange} incomeSubmit={incomeSubmit}/>
            <Expenses expenseChange={expenseChange} />
            {/* <Credits /> */}
            
                <button onClick={incomeSubmit}>submit</button>

            </formsContext.Provider>
        </div>
    )
}

export default Form
