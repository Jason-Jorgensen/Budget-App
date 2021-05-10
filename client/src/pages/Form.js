import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Incomes from "../components/Income/Income"

export default function Form() {
    return (
        <div>
            <Header />
            <Incomes />
            {/* <Debts />
            <Credits /> */}
            <Footer />
        </div>
    )
}
