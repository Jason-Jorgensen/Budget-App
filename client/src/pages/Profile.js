import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Login from "../pages/Login"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


const Profile = () => {
    const { user } = useAuth0();
    return (
        <div>
            <Header />

            <h1>Profile</h1>
            <h2>{user.name}</h2>
            <div>{JSON.stringify(user, null, 2)}</div>
            <Footer />

        </div>
    )
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Login/>,
    
});
