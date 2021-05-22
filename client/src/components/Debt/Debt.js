import React, {useEffect} from 'react'

function Debt({debtsChange, debtsSubmit, changeForm}) {
    const carArray = ["Car Loan Amount","Car Loan Rate %","Car Payment","Remaining Months on Car Loan"];
    const creditCardArray = ["Total Credit Balance", "Credit Card Int. Rate","Credit Card Payment"];
    const mortgageArray = ["Mortgage Balance","Mortgage P&I Payment","Remaining Years on Mortgage","Mortgage Rate %"];
    const studentLoanArray = ["Student Loan Balance", "Student Loan Payment", "Student Loan Rate %"];
    const otherLoanArray = ["Other Loan Balance", "Other Loan Rate %", "Other Loan Remaining Months","Other Loan Payment"];
    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, []);
    return (
        <div className="leading-loose">
        <form className="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
            <p className="text-gray-800 font-medium ">Now Let's Look at your Debts</p>
            <h1 className="text-lg mt-3">Car Loan</h1>
            {carArray.map((car) =>
            <div className="mt-2 grid grid-cols-2">
                <label  className="my-1 block text-md text-gray-00" htmlFor="cus_name">{car}</label>
                <input  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtsChange} name={car} id={car} type="number" required="" />
            </div>
            )}
            <h1 className="text-lg mt-3">Credit Cards</h1>
            {creditCardArray.map((credit) =>
            <div className="mt-2 grid grid-cols-2">
                <label  className="my-1 block text-md text-gray-00" htmlFor="cus_name">{credit}</label>
                <input  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtsChange} name={credit} id={credit} type="number" required="" />
            </div>
            )}
            <h1 className="text-lg mt-3">Mortgage</h1>
            {mortgageArray.map((mortgage) =>
            <div className="mt-2 grid grid-cols-2">
                <label  className="my-1 block text-md text-gray-00" htmlFor="cus_name">{mortgage}</label>
                <input  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtsChange} name={mortgage} id={mortgage} type="number" required="" />
            </div>
            )}
            <h1 className="text-lg mt-3">Student Loans</h1>
            {studentLoanArray.map((studentLoan) =>
            <div className="mt-2 grid grid-cols-2">
                <label  className="my-1 block text-md text-gray-00" htmlFor="cus_name">{studentLoan}</label>
                <input  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtsChange} name={studentLoan} id={studentLoan} type="number" required="" />
            </div>
            )}
            <h1 className="text-lg mt-3">Other Loan</h1>
            {otherLoanArray.map((otherLoan) =>
            <div className="mt-2 grid grid-cols-2">
                <label  className="my-1 block text-md text-gray-00" htmlFor="cus_name">{otherLoan}</label>
                <input  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtsChange} name={otherLoan} id={otherLoan} type="number" required="" />
            </div>
            )}
        </form>
        <div className="flex justify-center mt-2">
                    <button onClick={() => {debtsSubmit();changeForm()}} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r flex-wrap content-center">
                        Next Page
                     </button>
                </div>
           
        </div>

    )
}

export default Debt
