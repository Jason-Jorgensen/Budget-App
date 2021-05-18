import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import './Login.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../utils/API";
import AuthenticationButton from '../components/Header/authentication-button';



export default function Login() {
    const { user } = useAuth0();
    // const [authUser, setAuthUser] = useState()
    const [savedUser, setSavedUser] = useState({
        email: "none",
        id: 0
    })

    const saveUserDB = () => {
        //Save user to DB
        // console.log(user)
        API.saveUser(user)
            .then(res => console.log(res.data)
            );
    }


    const userCheck = (user) => {
        console.log(user.email)

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

    }


    useEffect(() => {
        userCheck(user)
    }, []);

    return (
        <body>
            <div id="hero">
                <div className="">
                    <Zoom>
                        <div className="row">
                            <div id="hero-box" className="col-md-6 offset-md-3">
                                <h2 id="title" className="text-center">"Budget App"</h2>
                                <p className="m-8">Welcome to "Budget App"! A budget calculator designed to help you set financial goals for long term savings and investment.</p>
                                <AuthenticationButton />
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className="info grid justify-items-center bg-gray-700">
                <Fade left>
                    <div className="info-box">Personalized Budget suggestions allow you to adjust your plan to your needs. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod excepturi provident explicabo officia reprehenderit sunt, natus nisi laborum animi, nam ratione nulla iure ab adipisci reiciendis quo optio mollitia error!</div>
                </Fade>
                <Fade right>
                    <div className="info-box">Reactive charts that allow you to quickly obtain budget infomation. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod excepturi provident explicabo officia reprehenderit sunt, natus nisi laborum animi, nam ratione nulla iure ab adipisci reiciendis quo optio mollitia error!</div>
                    <img className="info-img" src="./portfolio.png" />
                </Fade>
                <Fade left>
                    <div className="info-box">Retirement calculator allows you to set investment milestones. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod excepturi provident explicabo officia reprehenderit sunt, natus nisi laborum animi, nam ratione nulla iure ab adipisci reiciendis quo optio mollitia error!</div>
                </Fade>
            </div>
        </body>
    )
}
