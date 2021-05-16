import React, { useState, useEffect, useCallback } from 'react'
import Login from "../pages/Login"
import db from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BudgetChart from "../components/BudgetChart/BudgetChart"
import InvestGraph from "../components/InvestGraph/InvestGraph"
import IncomeChart from '../components/IncomeChart/IncomeChart';
import Chart from "react-google-charts";

const Profile = () => {
    const { user } = useAuth0();

    const [show, setShow] = useState(false);

    useEffect(() => {

    }, [])

    const userInfo = () => {
        console.log(JSON.stringify(user, null, 2))
    }

    userInfo();

    return (
        <div className="container">
            {/* <div className="flex float-right p-12">

                <div className="relative">
                    <button className="user-icon block h-12 w-12 rounded-full overflow-hidden focus:outline-none" onClick={() => setShow(!show)}>
                        <img src={user?.picture} style={{ borderRadius: "100px", float: "right" }} />
                    </button>


                    {show && <div className="user-dropdown absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
                        <a href="#" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-500 hover:text-white">Update Profile</a>
                        <div className="py-2">
                            <hr></hr>
                        </div>
                        <a href="#" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-500 hover:text-white">
                            Logout</a>
                    </div>}
                </div>
            </div> */}

            <h2 className="text-4xl mt-5">Welcome, {user?.name}</h2>

            <div className="grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="col-start-1 col-span-12 sm:col-start-1 sm:col-span-3 max-w-xl my-2 w-full flex rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-black font-bold text-xl mb-2">Financial Information</div>
                        <p className="text-grey-darker text-base"><strong>Total After-Tax Income: </strong>$46,000</p>
                        <p className="text-grey-darker text-base"><strong>Total Expenses: </strong>$31,000</p>
                        <p className="text-grey-darker text-base"><strong>Total Debts: </strong>$34,000</p>
                        <p className="text-grey-darker text-base"><strong>Retirement </strong>$27,000</p>
                    </div>
                </div>

                <div className="col-start-1 col-span-12 sm:col-start-4 sm:col-span-5
                max-w-xl my-2 w-full flex rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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

                <div className="col-start-1 col-span-12 sm:col-start-9 sm:col-span-4 max-w-xl my-2 w-full flex rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <Chart
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
            <div className="max-w-xl mx-auto my-10 w-full lg:flex rounded">
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white  shadow-xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-black font-bold text-xl mb-2">Expenses</div>
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
            <div className="grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="col-start-1 col-span-12 sm:col-start-1 sm:col-span-6 max-w-xl my-2 w-full flex rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <InvestGraph />
                </div>
                <div className="col-start-1 col-span-12 sm:col-start-7 sm:col-span-6 max-w-xl my-2 w-full flex rounded shadow-xl border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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
