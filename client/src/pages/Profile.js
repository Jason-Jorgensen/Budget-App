import React, { useEffect, useState } from 'react'
import Login from "../pages/Login"
import API from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BudgetChart from "../components/BudgetChart/BudgetChart";
import InvestGraph from "../components/InvestGraph/InvestGraph";




const Profile = () => {

    useEffect(() => {
        loadUserData()
    }, [])

    const { user } = useAuth0();
    const [profileSection, setProfileSection] = useState("data");

    function loadUserData() {
        API.getUserbyEmail(user.email)
            .then(res =>
                console.log(res.data)
            )
    };




    return (
        <div>
            <img src={user?.picture} style={{ borderRadius: "100px", float: "right" }} />
            <div>{JSON.stringify(user, null, 2)}</div>
            <h1>Profile</h1>
            <h2>{user?.name}</h2>
            <div>
        <div className="max-w-xl mx-auto my-10 w-full lg:flex rounded shadow-xl">
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
                <div className="text-black font-bold text-xl mb-2">Income</div>
                <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                <p className="text-grey-darker text-base"><strong>Gross Income: </strong>$1,000</p>
                <p className="text-grey-darker text-base"><strong>Yearly Gross Bonuses: </strong>$500</p>
                <p className="text-grey-darker text-base"><strong>Other Additional Income: </strong>$800</p>
                <p className="text-grey-darker text-base"><strong>Current Available Cash: </strong>$100</p>
            </div>
        </div>
    </div>
    <div className="max-w-xl mx-auto my-10 w-full lg:flex rounded shadow-xl">
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
                <div className="text-black font-bold text-xl mb-2">Expenses</div>
                <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
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
    </div>
            <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-4 sm:text-center">
                <BudgetChart />
            </div>
            <InvestGraph />
          
        </div>
    )
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Login />,
    returnTo: "/profile"

});
