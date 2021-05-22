import React, { useState, useEffect } from 'react'
import Login from "../pages/Login"
import API from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// import BudgetChart from "../components/BudgetChart/BudgetChart"
import InvestGraph from "../components/InvestGraph/InvestGraph"
// import IncomeChart from '../components/IncomeChart/IncomeChart';
import Chart from "react-google-charts";
import userContext from "../utils/userContext";

const Profile = () => {
    const { user } = useAuth0();
    const {savedUser, userCheck}= React.useContext(userContext);
    console.log(savedUser);
    
    useEffect(() => {
        userCheck(user)
        loadUserData();
        
    }, [user])

    function loadUserData() {
        API.getUserData(savedUser.id)
            .then((res) => {
                console.log(res.data)
    


            }
            )
    };


    const userInfo = () => {
        console.log(JSON.stringify(user, null, 2))
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
                        <p className="text-grey-darker text-base"><strong>Total Debts: </strong>$34,000</p>
                        <p className="text-grey-darker text-base"><strong>Retirement </strong>$27,000</p>
                    </div>
                </div>

                <div className="z-0 col-start-1 col-span-12 sm:col-start-6 sm:col-span-7 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <Chart
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['', '', '', '', ''],
                            ['After Tax Income', 46000, 0, 0, 0],
                            ['Expenses', 15000, 3000, 5000, 8000],
                        ]}
                        options={{
                            title: 'Income vs. Expenses',
                            chartArea: { width: '70%' },
                            isStacked: true,
                            hAxis: {
                                minValue: 0,
                            },
                            vAxis: {
                                title: 'Yearly $ Amount',
                            },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '3' }}
                    />
                </div>
            </div>

            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">

            <div className="col-start-1 col-span-12 sm:col-start-1 sm:col-span-7 my-2 h-full w-full rounded">
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white shadow-xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                        <div className="text-black font-bold text-xl mb-2">Expenses</div>
                    <div className="mb-5 col-start-1 col-span-6 my-2 w-full rounded">
                        <p className="text-grey-darker text-base"><strong>Rent or Mortgage: </strong>$1,000</p>
                        <p className="text-grey-darker text-base"><strong>Renters Insurance: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Health Insurance: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Car Insurance: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Car Maintenance: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Gas Expense: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Groceries: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Home Goods: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Hygene Products: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Restaurants: </strong>$100</p>
                    </div>

                        <div className="mb-5 col-start-7 col-span-6 my-2 w-full rounded">
                        <p className="text-grey-darker text-base"><strong>Phone Payment: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Internet Bill: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Water/Trash/Sewage: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Electricity: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Natural Gas: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Clothing: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Haircuts: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Self Care: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Groceries: </strong>$100</p>
                        <p className="text-grey-darker text-base"><strong>Groceries: </strong>$100</p>
                        </div>

                    </div>
                    
                </div>

            </div>
            <div className="z-0 col-start-1 col-span-12 sm:col-start-8 sm:col-span-5 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <Chart
                      width={'100%'}
                      height={'100%'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Expense', '% of Expenses'],
                            ['Home', 11],
                            ['Health', 2],
                            ['Entertainment', 2],
                            ['Food', 2],
                            ['Car', 7],
                        ]}
                        options={{
                            title: 'Expenses',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            
            </div>

            
            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="z-0 col-start-1 col-span-12 sm:col-start-1 sm:col-span-6 my-2 w-full rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <InvestGraph />
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
