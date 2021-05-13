import React, { useEffect } from 'react'
import Login from "../pages/Login"
import db from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BudgetChart from "../components/BudgetChart/BudgetChart"
import IncomeGraph from "../components/IncomeGraph/IncomeGraph"

// useEffect(() => {

// },[]) 


const Profile = () => {
    const { user } = useAuth0();
    return (
        <div>
            <div>{JSON.stringify(user, null, 2)}</div>
            <h1>Profile</h1>
            <h2>{user?.name}</h2>
            <img src={user?.picture} style={{borderRadius: "100px", float: "right" }}/>
            <div>
                <strong>Income: </strong><p>$1,000,000</p>
            </div>
            <div>
                <strong>Budget: </strong><p>$1,000,000</p>
            </div>
            <div>
                <h2>Expenses</h2>
                <strong>Mortgage: </strong><p>$1,000</p>
                <strong>Utilities: </strong><p>$100</p>
                <strong>Gas: </strong><p>$100</p>
                <strong>Groceries: </strong><p>$100</p>
            </div>
            <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-4 sm:text-center">
                <BudgetChart />
                <IncomeGraph />
            </div>

        </div>
    )
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Login />,
    returnTo: "/profile"

});
