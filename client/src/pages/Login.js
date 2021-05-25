import React, { useEffect, useState, useContext } from 'react';
// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './Login.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// import API from "../utils/API";
import AuthenticationButton from '../components/Header/authentication-button';
import userContext from "../utils/userContext";




export default function Login() {
    const { user } = useAuth0();
    const {savedUser, userCheck}= React.useContext(userContext);


    useEffect(() => {
        userCheck(user)
    }, [user]);

    return (
        <div>
            <div id="hero" className="">
                <div className="container-fluid max-w-3xl mt-auto ">
                    <Zoom>
                        <div className="row">
                            <div id="hero-box" className="col-md-6 offset-md-3">
                                <img src="./savvylogo1.png" className="mx-auto mb-0"/>
                                <p className="mt-4 mb-4 text-center">Welcome to "Budget App"! A budget calculator designed to help you set financial goals for long term savings and investment.</p>
                                <AuthenticationButton />
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className="info grid justify-items-center bg-white  " >
                <div className="max-w-lg container">
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
            </div>
        </div>
    )
}