import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
import Incomes from "../components/Income/Income";
import Debts from "../components/Debt/Debt";
import Progressbar from "../components/ProgressBar/ProgressBar";
import Expenses from "../components/Expenses/Expenses";
import Investments from "../components/Investments/Investments";
import formsContext from "../utils/formsContext";
import expensesContext from "../utils/expensesContext";
// import Login from "../pages/Login";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import userContext from "../utils/userContext";

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
// function () {
//     API.getUserbyEmail(user.email)
//         .then(res => {
//             setSavedUser({
//                 ...savedUser,
//                 email: res.data[0].email,
//                 id: res.data[0]._id
//             })
//             console.log(savedUser)
//         }).catch(err => console.log(err));

// }


function Form() {

    const { user } = useAuth0();

    const { savedUser } = React.useContext(userContext);
    console.log(savedUser);

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

    // Save user to DB
    // e.preventDefault();
    // console.log(user)
    // API.saveUser(user)
    // .then(res => console.log(res)
    // );


    const incomesSubmit = (e) => {
        // Save Income to DB
        // e.preventDefault();
        console.log(income)
        console.log(savedUser.id)
        API.saveIncomes(income)
            .then(res => {
                console.log(res)



            });




    }


    const expensesSubmit = (e) => {
        // Save Income to DB
        // e.preventDefault();
        // console.log(expenses)
        // API.saveExpenses(expenses)
        // .then(res => console.log(res)
        // );
    }

    const debtsSubmit = (e) => {
        // e.preventDefault();
        // console.log(debt)
        // API.saveDebts(debt)
        // .then(res => console.log(res)
        // );
    }

    const investmentsSubmit = (e) => {
        // e.preventDefault();
        // console.log(investment)
        // API.saveInvestments(investment)
        // .then(res => console.log(res)
        // );
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
            if (formsSection == "expenses") {
                setProgressCompleted(25)
            }
            else if (formsSection == "debts") {
                setProgressCompleted(50)
            }
            else if (formsSection == "investments") {
                setProgressCompleted(75)
            }
            else if (formsSection == "income") {
                setProgressCompleted(0)
            }
        }
        updateProgress();


    }, [formsSection])


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
