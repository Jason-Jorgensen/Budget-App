import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Incomes from "../components/Income/Income";
import Debts from "../components/Debt/Debt";
import Progressbar from "../components/ProgressBar/ProgressBar";
import Expenses from "../components/Expenses/Expenses";
import Investments from "../components/Investments/Investments";
import formsContext from "../utils/formsContext";
// import expensesContext from "../utils/expensesContext";
// import Login from "../pages/Login";
import { useAuth0} from "@auth0/auth0-react";
import userContext from "../utils/userContext";

import API from "../utils/API";

function Form({userCheck}) {

    const { user } = useAuth0();

    const { savedUser } = React.useContext(userContext);
    // console.log(savedUser);

    const [income, setIncome] = useState({});
    const [expenses, setExpenses] = useState({});
    const [debts, setDebts] = useState({});
    const [investments, setInvestments] = useState({});
    const [formsSection, setFormsSection] = useState("incomes");
    const [progressCompleted, setProgressCompleted] = useState(0);

    const incomesChange = (event) => {
        const { name, value } = event.target
        setIncome({ ...income, [name]: value })
    }

    const expensesChange = (event) => {
        const { name, value } = event.target
        setExpenses({ ...expenses, [name]: value })
    }

    const debtsChange = (event) => {
        const { name, value } = event.target
        setDebts({ ...debts, [name]: value })
    }

    const investmentsChange = (event) => {
        const { name, value } = event.target
        setInvestments({ ...investments, [name]: value })
    }

    const incomesSubmit = (e) => {
        // Save Income to DB
        // e.preventDefault();
        console.log("working")
        // console.log(savedUser.id)
        API.saveIncomes({userid: savedUser.id, incomes: income})
            .then(res => {
                console.log("Result of incomesSubmit", res)
            });
    }


    const expensesSubmit = (e) => {
        // Save Income to DB
        // e.preventDefault();
        // console.log(expenses)
        API.saveExpenses({userid: savedUser.id, expenses: expenses})
        .then(res => console.log("Result of expensesSubmit", res)
        );
    }

    const debtsSubmit = (e) => {
        // e.preventDefault();
        // console.log(debt)
        API.saveDebts({userid: savedUser.id, debts: debts})
        .then(res => console.log("Result of debtsSubmit", res)
        );
    }

    const investmentsSubmit = (e) => {
        // e.preventDefault();
        // console.log(investment)
        API.saveInvestments({userid: savedUser.id, investments: investments})
        .then(res => console.log("Result of investmentsSubmit", res)
        );
    }

    const changeForm = () => {
        switch (formsSection) {
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
            if (formsSection === "expenses") {
                setProgressCompleted(25)
            }
            else if (formsSection === "debts") {
                setProgressCompleted(50)
            }
            else if (formsSection === "investments") {
                setProgressCompleted(75)
            }
            else if (formsSection === "income") {
                setProgressCompleted(0)
            }
        }
        updateProgress();


    }, [formsSection])

    useEffect(() => {
        //check user login and get ID
        userCheck(user)
    }, [])


    const check = () => {
        console.log(income)
        console.log(expenses)
        console.log(debts)
        console.log(investments)
    };

    // function updateIncome() => {
    //     setIncome({...income,salary,secondSalary})
    // }


    return (
        <div>
            <formsContext.Provider value={income}>

                <Progressbar progressCompleted={progressCompleted} />

                {formsSection === "incomes" && <Incomes incomesChange={incomesChange} incomesSubmit={incomesSubmit} changeForm={changeForm} />}

                {formsSection === "expenses" && <Expenses expensesChange={expensesChange} expensesSubmit={expensesSubmit} changeForm={changeForm} />}

                {formsSection === "debts" && <Debts debtsChange={debtsChange} debtsSubmit={debtsSubmit} changeForm={changeForm} />}

                {formsSection === "investments" && <Investments investmentsChange={investmentsChange} investmentsSubmit={investmentsSubmit} changeForm={changeForm} check={check} />}

                {/* <Credits /> */}

            </formsContext.Provider>
        </div>
    )
}

export default Form
