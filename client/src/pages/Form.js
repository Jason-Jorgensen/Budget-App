import React, {useState} from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Incomes from "../components/Income/Income";
import Progressbar from "../components/Progressbar/Progressbar";
import formsContext from "../utils/formsContext";


function Form() {
    const [income, setIncome] = useState({
        salary: 0,
        bonus:0,
        personalCont:0,
        employerCont:0,
        additionalIncome:0,
        cash:0,
        retirementBalance:0,
        investorType:""
        
    });
    const incomeChange = (event) => {
        const {name, value} = event.target
        setIncome({...income,[name]:value})
    }

    // function updateIncome() => {
    //     setIncome({...income,salary,secondSalary})
    // }
     

    return (
        <div>
            <formsContext.Provider value={income}>
            <Header />
            <Progressbar />
            <Incomes incomeChange={incomeChange}/>
            {/* <Debts />
            <Credits /> */}
            <Footer />
            </formsContext.Provider>
        </div>
    )
}

export default Form
