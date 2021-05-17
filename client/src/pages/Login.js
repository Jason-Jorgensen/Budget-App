import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import './Login.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../utils/API";





export default function Login() {
    const { user } = useAuth0();
    const [savedUser, setSavedUser] = useState({
        "email": "none",
        "id": 0
    })

    const saveUserDB = () => {
        //Save user to DB
        // console.log(user)
        API.saveUser(user)
            .then(res => console.log(res.data)
            );
    }


    const userCheck = (user) => {
        console.log(user?.email)
        API.getUserbyEmail(user?.email)
            .then(res => {
                setSavedUser({
                    ...savedUser,
                    "email": res.data.email,
                    "id": res.data._id
                })
                console.log(savedUser)
            })
        if (savedUser !== user?.email) {
            saveUserDB()
            API.getUserbyEmail(user?.email)
                .then(res => {
                    setSavedUser({
                        ...savedUser,
                        "email": res.data.email,
                        "id": res.data._id
                    })
                    console.log(savedUser)
                })

        } else {

        }

    }


    useEffect(() => {
        userCheck(user)
    }, []);

    return (
        <body>
            <div id="hero">
                <div className="container-fluid">
                    <Zoom>
                        <div className="row">
                            <div id="hero-box" className="col-md-6 offset-md-3">
                                <h2 id="title" className="text-center">"Budget App"</h2>
                                <p className="m-8">Welcome to "Budget App"! A budget calculator designed to help you set financial goals for long term savings and investment.</p>
                                <button type="submit" className="btn bg-gray-500 hover:bg-gray-700 mb-2">Log In</button>
                                <p>Or sign up <a href="/">here</a></p>
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
