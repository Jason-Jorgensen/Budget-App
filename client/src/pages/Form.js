import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Incomes from "../components/Income/Income";
import Progressbar from "../components/Progressbar/Progressbar";


function Form() {
    return (
        <div>
            <Header />
            <Progressbar />
            <Incomes />
            {/* <Debts />
            <Credits /> */}
            <Footer />
        </div>
    )
}

export default Form
