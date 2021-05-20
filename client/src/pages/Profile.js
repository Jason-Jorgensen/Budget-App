import React, { useState, useEffect } from 'react'
import Login from "../pages/Login"
import API from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BudgetChart from "../components/BudgetChart/BudgetChart"
import InvestGraph from "../components/InvestGraph/InvestGraph"
import IncomeChart from '../components/IncomeChart/IncomeChart';
import Chart from "react-google-charts";
import ExpensesCard from '../components/ExpensesCard/ExpensesCard';

const Profile = () => {
    const { user } = useAuth0();

    useEffect(() => {
        loadUserData()
    }, [])


    function loadUserData() {
        API.getUserbyEmail(user.email)
            .then(res =>
                console.log(res.data)
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
                    <IncomeChart />
                </div>
            </div>

            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <ExpensesCard />
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
