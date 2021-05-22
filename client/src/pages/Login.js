import React, { useEffect, useState, useContext } from 'react'
// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import './Login.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../utils/API";
import AuthenticationButton from '../components/Header/authentication-button';
import userContext from "../utils/userContext";







// const userCheck = (user) => {
//     console.log(user.email)
//     API.getUserbyEmail(user?.email)
//         .then(res => console.log(res));
// }


export default function Login() {
    const { user } = useAuth0();
    const {savedUser, userCheck}= React.useContext(userContext);
    // console.log(userCheck(user))


    useEffect(() => {
        userCheck(user)
    }, [user]);
    // console.log(savedUser);
    // console.log(user)
    
    // const [authUser, setAuthUser] = useState()
    // const [savedUser, setSavedUser] = useState({
    //     email: "none",
    //     id: 0
    // })
    // const {savedUser, setSavedUser } = useContext

    // const saveUserDB = () => {
    //     //Save user to DB
    //     // console.log(user)
    //     API.saveUser(user)
    //         .then(res => console.log(res.data)
    //         );
    // }


    // const userCheck = (user) => {
        
    //     if (typeof user !== "undefined" && user !== null){

        
    //     console.log(user.email)

    //     let emailCheck = ""
    //     let idCheck = ""
    //     API.getUserbyEmail(user.email)
    //         .then(res => {
    //             console.log(res.data.length)
    //             if (res.data.length === 0) {
    //                 console.log("saving user info to DB")
    //                 saveUserDB(user.email)
    //                 API.getUserbyEmail(user.email)
    //                     .then(res => {
    //                         setSavedUser({
    //                             ...savedUser,
    //                             email: res.data[0].email,
    //                             id: res.data[0]._id
    //                         })
    //                         console.log(savedUser)
    //                     }).catch(err => console.log(err));

    //             } else {
    //                 emailCheck = res.data[0].email
    //                 idCheck = res.data[0]._id
    //                 console.log(emailCheck, user.email)
    //                 if (emailCheck !== user.email) {
    //                     console.log("saving user info to DB")
    //                     saveUserDB(user.email)
    //                     API.getUserbyEmail(user.email)
    //                         .then(res => {
    //                             setSavedUser({
    //                                 ...savedUser,
    //                                 email: res.data[0].email,
    //                                 id: res.data[0]._id
    //                             })
    //                             console.log(savedUser)
    //                         }).catch(err => console.log(err));
    //                 } else {
    //                     console.log("emails match   " + emailCheck)
    //                     setSavedUser({
    //                         ...savedUser,
    //                         email: res.data[0].email,
    //                         id: res.data[0]._id
    //                     }
    //                     )
    //                 }
    //             }
    //         }
    //         ).catch(err => console.log(err));
    //     }else {

    //     }
    // }




    return (
        <div>
            <div id="hero" className="">
                <div className="container-fluid max-w-3xl mt-auto ">
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
