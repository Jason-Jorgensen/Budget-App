import React, { useState, useEffect } from 'react'
import API from "../utils/API"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import userContext from "../utils/userContext";


function Update() {
    const { user } = useAuth0();
    const {savedUser, userCheck}= React.useContext(userContext);
    const [userData, setUserData] = useState();
    // console.log(savedUser);
    useEffect(() => {
        userCheck(user)
        loadUserData();
    }, [])


    function loadUserData() {
        API.getUserData(savedUser.id)
            .then((res) => {
                console.log(res.data)
                const allData = (res.data.incomes);
                setUserData(allData);
            })
    };
    console.log()
    return (
        <div>
            
        </div>
    )
}

export default Update
