import React, {useState} from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Incomes from "../components/Income/Income";
import Progressbar from "../components/Progressbar/Progressbar";
import formsContext from "../utils/formsContext";


function Form() {
    const [income, setIncome] = useState({
        salary:0,
        description:"",
        
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
