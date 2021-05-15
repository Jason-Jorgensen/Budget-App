import React, {useState} from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Incomes from "../components/Income/Income";
import Progressbar from "../components/Progressbar/ProgressBar";
import Expenses from "../components/Expenses/Expenses";
import formsContext from "../utils/formsContext";
import expensesContext from "../utils/expensesContext";
import Login from "../pages/Login";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import API from "../utils/API";


function Form() {
    
    const { user } = useAuth0();
    console.log(user)
    const [income, setIncome] = useState({
        salary: 0,
        bonus:0,
        personalCont:0,
        employerCont:0,
        additionalIncome:0,
        cash:0,
        retirementBalance:0,
        investorType:""
    });
    const [expenses, setExpenses] = useState({

    });
    
    const incomeChange = (event) => {
        const {name, value} = event.target
        setIncome({...income,[name]:value})
    }

    const expenseChange = (event) => {
        const {name, value} = event.target
        setExpenses({...expenses,[name]:value})
    }
    
    const incomeSubmit = (e) => {
        // API.saveIncome(income)
        // .then(res =>
           console.log("success")
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
            
            </formsContext.Provider>
        </div>
    )
}

export default Form
