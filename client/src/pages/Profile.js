import React, { useState, useEffect } from 'react';
import Login from "../pages/Login"
import API from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BudgetChart from "../components/BudgetChart/BudgetChart";
import InvestGraph from "../components/InvestGraph/InvestGraph";
import IncomeChart from '../components/IncomeChart/IncomeChart';
import IncomeCard from "../components/IncomeCard/IncomeCard";
import ExpensesCard from '../components/ExpensesCard/ExpensesCard';
import InvestCard from '../components/InvestCard/InvestCard';
import userContext from "../utils/userContext";
import axios from 'axios';

const Profile = () => {
    const { user } = useAuth0();
    const { savedUser, userCheck } = React.useContext(userContext);

    const [debts, setDebts] = useState({});
    const [expenses, setExpenses] = useState({});
    const [incomeData, setIncomes] = useState({});
    const [investmentsData, setInvestments] = useState({});
    const [categorizedExpenses, setCategorizedExpenses] = useState([]);
    const [calcInvestments, setCalcInvestments] = useState();
    const [totalTax, setTotalTax] = useState({});


    console.log("LoggedIn User", savedUser);

    useEffect(() => {
        //check user login and get ID
        userCheck(user)
        loadUserData();
    }, [user])


    function loadUserData() {
        API.getUserData(savedUser.id)
            .then(res => {

                console.log("loadUserData", res.data);
                let expenses = res.data.expenses[0];
                let debts = res.data.debts[0];
                let incomes = res.data.incomes[0];
                let investments = res.data.investments[0];
                setDebts(debts);
                setExpenses(expenses);
                setIncomes(incomes);
                setInvestments(investments);
                console.log("debts", debts);
                console.log("expenses", expenses);
                console.log("incomes", incomes);
                console.log("investments", investments);

                const grossIncome = parseInt(res.data.incomes[0]?.['Gross Income']) + parseInt(res.data.incomes[0]?.["Other Additional Income"]);
                const homeState = res.data.incomes[0]?.['state'];
                const taxFiling = res.data.incomes[0]?.['Tax Filing Status'];


                function taxesData(data) {
                    let fica = data.fica.amount;
                    let federal = data.federal.amount;
                    let state = data.state.amount;
                    let netIncome = grossIncome - fica - federal - state;
                    calculateInvestment(netIncome);
                };


                const options = {
                    method: 'POST',
                    url: 'https://stylinandy-taxee.p.rapidapi.com/v1/calculate/2020',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'x-rapidapi-key': 'd6a0d35394msh43dd9c683e1c66ap1d8e5ejsnb9ba7d041aaa',
                        'x-rapidapi-host': 'stylinandy-taxee.p.rapidapi.com'
                    },
                    data: `filing_status=${taxFiling}&pay_rate=${grossIncome}&state=${homeState}`
                };

                axios.request(options).then(function (response) {
                    setTotalTax(response.data.annual)
                    taxesData(response.data.annual)

                }).catch(function (error) {
                    console.error(error);
                });

                let housing = parseInt(expenses?.["Rent or Mortgage"]) + parseInt(expenses?.["Renters Insurance"]) + parseInt(expenses?.["Home Goods"]);
                let utilities = parseInt(expenses?.["Water/Trash/Sewage"]) + parseInt(expenses?.["Electricity"]) + parseInt(expenses?.["Natural Gas"]) + parseInt(expenses?.["Phone Payment"]) + parseInt(expenses?.["Internet Bill"]);
                let car = parseInt(expenses?.["Car Insurance"]) + parseInt(expenses?.["Car Maintenance"]) + parseInt(expenses?.["Gas Expense"]);
                let healthInsurance = parseInt(expenses?.["Health Insurance"]);
                let food = parseInt(expenses?.["Groceries"]) + parseInt(expenses?.["Restaurants"]);
                let selfCare = parseInt(expenses?.["Hygiene Products"]) + parseInt(expenses?.["Clothing"]) + parseInt(expenses?.["Haircuts"]) + parseInt(expenses?.["Self Care"]);
                let social = parseInt(expenses?.["Dates"]) + parseInt(expenses?.["Gifts"]);
                let charity = parseInt(expenses?.["Charity"]);
                let misc = parseInt(expenses?.["Miscellaneous"]);
                let memberships = parseInt(expenses?.["Gym"]) + parseInt(expenses?.["Video Streaming"]) + parseInt(expenses?.["Music"]) + parseInt(expenses?.["Costco, Amazon, Etc"]);

                setCategorizedExpenses([housing, utilities, car, healthInsurance, food, selfCare, social, charity, misc, memberships]);

                function calculateInvestment(netIncome) {
                    let data = [["x", "Balance", "Contributions"]];
                    let FV;
                    let PV = investments?.["Current Retirement Balance"];
                    let n = 12;
                    let rate = 6 / 100;
                    let int = rate / n;
                    let year = 30;
                    console.log(netIncome);
                    let empCont = (netIncome / 12) * investments
                        ?.["Employer 401K Contribution %"] / 100;
                    let cont = (netIncome / 12) * investments
                        ?.["Your 401K Contribution %"] / 100;
                    let monDeposit = cont + empCont;
                    let totalContribution = 0;

                    for (let i = 0; i <= year; i++) {
                        FV = (PV * (int + 1) ** (n * i) + monDeposit * ((1 + int) ** (n * i) - 1) / int * (1 + int)).toFixed(2);
                        data.push([i, parseInt(FV), parseInt(totalContribution)]);
                        totalContribution += monDeposit * 12;
                    }
                    console.log("investmentData", data)
                    setCalcInvestments(data)
                }
            }
            )

    };



    return (
        <div className="container">
            <h2 className="text-4xl mt-5">Welcome, {user?.name}</h2>

            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="ccol-start-1 col-span-12 sm:col-start-1 sm:col-span-5 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <IncomeCard
                        incomeData={incomeData}
                        totalTax={totalTax}
                        investmentsData={investmentsData}
                    />
                </div>

                <div className="z-0 col-start-1 col-span-12 sm:col-start-6 sm:col-span-7 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <IncomeChart
                        incomeData={incomeData}
                        totalTax={totalTax}
                        investmentsData={investmentsData}
                    />
                </div>
            </div>

            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <ExpensesCard
                    expenses={expenses}
                    categorizedExpenses={categorizedExpenses}
                />
                <div className="z-0 col-start-1 col-span-12 sm:col-start-7 sm:col-span-6 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <BudgetChart
                        expenses={expenses}
                        categorizedExpenses={categorizedExpenses}
                    />
                </div>

            </div>


            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 h-96 mt-3">
                <div className="z-0 col-start-1 col-span-12 sm:col-start-1 sm:col-span-4 my-2 w-full h-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <InvestCard
                        investments={investmentsData}
                        incomeData={incomeData}
                        totalTax={totalTax}
                    />
                </div>
                <div className="col-start-1 col-span-12 sm:col-start-5 sm:col-span-8 my-2 w-full h-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <InvestGraph
                        calcInvestmentsData={calcInvestments}
                    />
                </div>
            </div>

        </div>
    )
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Login />,
    returnTo: "/profile"

});
