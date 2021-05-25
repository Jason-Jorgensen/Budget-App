import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Forms from "./pages/Form";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Update from "./pages/Update";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/routes/protected-route"
import UserContext from "./utils/userContext"
import "tailwindcss/tailwind.css";
import { useAuth0 } from "@auth0/auth0-react";
import API from "./utils/API";



function App() {
    const { user } = useAuth0();
    const [savedUser, setSavedUser] = useState({})
    const x= ()=>(1+1);



    const saveUserDB = () => {
        //Save user to DB
        // console.log(user)
        API.saveUser(user)
            .then(res => console.log(res.data)
            );
    }


    const userCheck = (user) => {

        if (typeof user !== "undefined" && user !== null) {


            // console.log(user.email)

            let emailCheck = ""
            let idCheck = ""
            API.getUserbyEmail(user.email)
                .then(res => {
                    console.log(res.data.length)
                    if (res.data.length === 0) {
                        console.log("saving user info to DB")
                        saveUserDB(user.email)
                        API.getUserbyEmail(user.email)
                            .then(res => {
                                setSavedUser({
                                    ...savedUser,
                                    email: res.data[0].email,
                                    id: res.data[0]._id
                                })
                                console.log(savedUser)
                            }).catch(err => console.log(err));

                    } else {
                        emailCheck = res.data[0].email
                        idCheck = res.data[0]._id
                        console.log(emailCheck, user.email)
                        if (emailCheck !== user.email) {
                            console.log("saving user info to DB")
                            saveUserDB(user.email)
                            API.getUserbyEmail(user.email)
                                .then(res => {
                                    setSavedUser({
                                        ...savedUser,
                                        email: res.data[0].email,
                                        id: res.data[0]._id
                                    })
                                    console.log(savedUser)
                                }).catch(err => console.log(err));
                        } else {
                            console.log("emails match   " + emailCheck)
                            setSavedUser({
                                ...savedUser,
                                email: res.data[0].email,
                                id: res.data[0]._id
                            }
                            )
                        }
                    }
                }
                ).catch(err => console.log(err));
        } else {

        }
    }
    
    useEffect(() => {
        userCheck(user)
    }, []);

    
  
    

    return (

        <div>
            <UserContext.Provider value={{savedUser, userCheck, x}}>
            <Header />
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <Login  />
                </Route>
                <Route exact path={"/landing"}>
                    <Landing />
                </Route>
                <Route exact path={"/forms"}>
                    <Forms savedUser={savedUser} />
                </Route>
                <Route exact path={"/update"}>
                    <Update savedUser={savedUser} />
                </Route>
                <ProtectedRoute path="/profile" component={Profile}>
                    <Profile savedUser={savedUser} />
                </ProtectedRoute>
            </Switch>
            <Footer />
            </UserContext.Provider>

        </div>

    )
}

export default App;
