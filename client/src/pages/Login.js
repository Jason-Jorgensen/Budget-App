import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
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
                                <img src="./savvylogo1.png" className="mx-auto mb-0" alt="Savvy Logo"/>
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
                        <div className="info-box">The Savvy Budget App allows you to set a budget that can help you take control of your finances. Edit your budget as life changes and see a projected model of what your finances will look like years from now as you stick to a budget.</div>
                    </Fade>
                    <Fade right>
                        <div className="info-box">Savvy's Reactive charts allow you to quickly show your budget infomation and see your progression. Your Federal, State, and FICA taxes will be estimated by the State you live in and your filing status. Quickly see your estimated taxes for the current calendar year. </div>
                
                    </Fade>
                    <Fade left>
                        <div className="info-box">Savvy's Retirement calculator allows you to view investment milestones. Visually see the power of compounding interest within your retirment account.</div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}