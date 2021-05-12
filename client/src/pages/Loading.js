import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";


export default function Loading() {
    const { user } = useAuth0();
    return (
        <div>
            <Header />

            <h1>Loading.....</h1>
        
            <Footer />

        </div>
    )
}