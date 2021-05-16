import React, { useState, useEffect } from 'react';
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
    email: "test2@test.com"
}


function Form() {

    const { user } = useAuth0();
    
    const [income, setIncome] = useState({

    });
    const [expenses, setExpenses] = useState({

    });

    const [debts, setDebts] = useState({
    
    });

    const [investments, setInvestments] = useState({
    
    });

    const [formsSection, setFormsSection] = useState(
        "incomes"
        );
    
    const [progressCompleted, setProgressCompleted]=useState(0);

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

    // Save user to DB
        // e.preventDefault();
        // console.log(testUser)
        // API.saveUser(testUser)
        // .then(res => console.log(res)
        // );
        
    // Save Income to DB
        // e.preventDefault();
        // console.log(testItems)
        // API.saveIncome(testItems)
        // .then(res => console.log(res)
        // );
    }
        
    const expenseSubmit = (e) => {
        // e.preventDefault();
        // console.log(testItems)
        // API.saveExenses(testItems)
        // .then(res => console.log(res)
        // );
    }

    const debtSubmit = (e) => {
        // e.preventDefault();
        // console.log(testItems)
        // API.saveDebts(testItems)
        // .then(res => console.log(res)
        // );
    }

    const investmentSubmit = (e) => {
        // e.preventDefault();
        // console.log(testItems)
        // API.saveInvestment(testItems)
        // .then(res => console.log(res)
        // );
    }

    const changeForm = () => {
        switch (formsSection){
            case "incomes": 
            setFormsSection("expenses")
            break;
            case "expenses":
            setFormsSection("debts")
            break;
            case "debts":
            setFormsSection("investments")
            break;
            case "investements":
            setFormsSection("incomes")
            break;
            default:
            break;
        }
    }


    useEffect(() => {
        const updateProgress = () => {
            if (formsSection == "expenses") {
                setProgressCompleted(25)
            }
            else if (formsSection =="debts") {
                setProgressCompleted(50)
            }
            else if (formsSection =="investments") {
                setProgressCompleted(75)
            }
            else if (formsSection == "income") {
                setProgressCompleted(0)
            }
        }
        updateProgress();


    }, [formsSection])

    const console = () => {
        console.log(income,debts,expenses,investments)
    };
    
    // function updateIncome() => {
    //     setIncome({...income,salary,secondSalary})
    // }
    


    return (
        <div>
            <formsContext.Provider value={income}>
            <Progressbar progressCompleted={progressCompleted} />
           

            {formsSection === "incomes" && <Incomes incomeChange={incomeChange} incomeSubmit={incomeSubmit} changeForm={changeForm}/>}
           
            {formsSection ==="expenses" && <Expenses expenseChange={expenseChange} expenseSubmit={expenseSubmit} changeForm={changeForm}/>}
           
           
            {formsSection ==="debts" &&<Debts debtChange={debtChange} debtSubmit={debtSubmit} changeForm={changeForm}/>}
            
             
            {formsSection === "investments" && <Investments investmentChange={investmentChange} investmentSubmit={investmentSubmit} changeForm={changeForm} console={console}/>}
     
            {/* <Credits /> */}

            
            

            </formsContext.Provider>
        </div>
    )
}

export default Form
