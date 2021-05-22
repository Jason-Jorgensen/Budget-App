import React, { useState, useEffect } from 'react'
import Login from "../pages/Login"
import API from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BudgetChart from "../components/BudgetChart/BudgetChart"
import InvestGraph from "../components/InvestGraph/InvestGraph"
import IncomeChart from '../components/IncomeChart/IncomeChart';
import ExpensesCard from '../components/ExpensesCard/ExpensesCard';
import userContext from "../utils/userContext";

const Profile = () => {
    const { user } = useAuth0();
    const {savedUser, userCheck}= React.useContext(userContext);

    const [debts, setDebts] = useState({});
    const [expenses, setExpenses] = useState({});
    const [incomes, setIncomes] = useState({});
    const [investments, setInvestments] = useState({});
    const [categorizedExpenses, setCategorizedExpenses] = useState([]);
    const [calcInvestments, setCalcInvestments] = useState();

    console.log(savedUser);
    
    useEffect(() => {
        userCheck(user)
        loadUserData();
<<<<<<< HEAD
        
    }, [user])

    function loadUserData() {
        API.getUserData(savedUser.id)
            .then((res) => {
                console.log(res.data)
    


=======
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

                let housing = parseInt(expenses.["Rent or Mortgage"]) + parseInt(expenses.["Renters Insurance"]) + parseInt(expenses.["Home Goods"]);
                let utilities = parseInt(expenses.["Water/Trash/Sewage"]) + parseInt(expenses.["Electricity"]) + parseInt(expenses.["Natural Gas"]) + parseInt(expenses.["Phone Payment"]) + parseInt(expenses.["Internet Bill"]);
                let car = parseInt(expenses.["Car Insurance"]) + parseInt(expenses.["Car Maintenance"]) + parseInt(expenses.["Gas Expense"]);
                let healthInsurance = parseInt(expenses.["Health Insurance"]);
                let food = parseInt(expenses.["Groceries"]) + parseInt(expenses.["Restaurants"]);
                let selfCare = parseInt(expenses.["Hygiene Products"]) + parseInt(expenses.["Clothing"]) + parseInt(expenses.["Haircuts"]) + parseInt(expenses.["Self Care"]);
                let social = parseInt(expenses.["Dates"]) + parseInt(expenses.["Gifts"]);
                let charity = parseInt(expenses.["Charity"]);
                let misc = parseInt(expenses.["Miscellaneous"]);
                let memberships = parseInt(expenses.["Gym"]) + parseInt(expenses.["Video Streaming"]) + parseInt(expenses.["Music"]) + parseInt(expenses.["Costco, Amazon, Etc."]);

                setCategorizedExpenses([housing, utilities, car, healthInsurance, food, selfCare, social, charity, misc, memberships]);

                let data = [['x', 'balance']];
                let FV;
                let PV = investments.["Current Retirement Balance"];
                let n = 12;
                let rate = 6 / 100;
                let int = rate / n;
                let year = 30;
                // incomes not working, set Income at 2000
                let cont = 2000 * investments
                .["Employer 401K Contribution %"]/100;
                let empCont = 2000 * investments
                .["Your 401K Contribution %"]/100;
                let monDeposit = cont + empCont;

                for (let i = 0; i <= year; i++) {
                    FV = (PV * (int + 1) ** (n * i) + monDeposit * ((1 + int) ** (n * i) - 1) / int * (1 + int)).toFixed(2);
                    data.push([i, FV]);
                }
                console.log("investmentData",data)
                setCalcInvestments(data)
>>>>>>> 067a25e57890771c0dd0d6016f559b2c8006e365
            }
            )
    };

    const userInfo = () => {
        // console.log("userInfo", JSON.stringify(user, null, 2));
    }

    userInfo();

    return (
        <div className="container">
            <h2 className="text-4xl mt-5">Welcome, {user?.name}</h2>

            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="ccol-start-1 col-span-12 sm:col-start-1 sm:col-span-5 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-black font-bold text-xl mb-2">Financial Information</div>
                        <p className="text-grey-darker text-base"><strong>Total After-Tax Income: </strong>$46,000</p>
                        <p className="text-grey-darker text-base"><strong>Total Expenses: </strong>$31,000</p>
                        <p className="text-grey-darker text-base"><strong>Car Loan: </strong>{debts?.["Car Loan Amount"]}</p>
                        <p className="text-grey-darker text-base"><strong>Retirement </strong>$27,000</p>
                    </div>
                </div>

                <div className="z-0 col-start-1 col-span-12 sm:col-start-6 sm:col-span-7 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <IncomeChart

                    />
                </div>
            </div>

            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <ExpensesCard
                    expenses={expenses}
                    categorizedExpenses={categorizedExpenses}
                />
                <div className="z-0 col-start-1 col-span-12 sm:col-start-8 sm:col-span-5 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <BudgetChart
                        expenses={expenses}
                        categorizedExpenses={categorizedExpenses}
                    />
                </div>

            </div>


            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="z-0 col-start-1 col-span-12 sm:col-start-1 sm:col-span-6 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <InvestGraph
                        calcInvestmentsData={calcInvestments}
                    />
                </div>
                <div className="col-start-1 col-span-12 sm:col-start-7 sm:col-span-6 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <InvestGraph />
                </div>
            </div>

        </div>
    )
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Login />,
    returnTo: "/profile"

});
