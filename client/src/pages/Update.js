import React, { useState, useEffect } from 'react'
import API from "../utils/API"
import { useAuth0 } from "@auth0/auth0-react";
import userContext from "../utils/userContext";


function Update() {
    const { user } = useAuth0();
    const {savedUser, userCheck}= React.useContext(userContext);
    const [userData, setUserData] = useState();
    useEffect(() => {
        userCheck(user)
        loadUserData();
    }, [])

    function loadUserData() {
        API.getUserData(savedUser.id)
            .then((res) => {
                console.log(res.data)
                const allData = (res.data.incomes[0]);
                setUserData(allData);
            })
    };


    
    console.log(userData)
    return (
        <div>
            
        </div>
    )
}

export default Update
