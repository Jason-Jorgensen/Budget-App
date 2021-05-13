import React, { useEffect } from 'react'
import Login from "../pages/Login"
import db from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

useEffect(() => {

},[]) 


const Profile = () => {
    const { user } = useAuth0();
    return (
        <div>
            <h1>Profile</h1>
            <h2>{user?.name}</h2>
            
            <div>{JSON.stringify(user)}</div>
        </div>
    )
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Login/>,
    returnTo: "/profile"
    
});
