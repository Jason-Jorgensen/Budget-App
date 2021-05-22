<<<<<<< HEAD
import React from 'react'

export default function Update() {
=======
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
>>>>>>> b1ef464644a1f861ea241e82eab09051f8150f10
    return (
        <div>
            
        </div>
    )
}
<<<<<<< HEAD
=======

export default Update
>>>>>>> b1ef464644a1f861ea241e82eab09051f8150f10
