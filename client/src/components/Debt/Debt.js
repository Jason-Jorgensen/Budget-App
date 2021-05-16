import React, {useEffect} from 'react'

function Debt({debtChange, debtSubmit, changeForm}) {
    const carArray = ["Car Loan Amount","Car Loan Rate %","Car Payment","Remaining Months on Car Loan"];
    const creditCardArray = ["Total Credit Balance", "Credit Card Int. Rate","Credit Card Payment"];
    const mortgageArray = ["Mortgage Balance","Mortgage P&I Payment","Remaining Years on Mortgage","Mortgage Rate %"];
    const studentLoanArray = ["Student Loan Balance", "Student Loan Payment", "Student Loan Rate %"];
    const otherLoanArray = ["Other Loan Balance", "Other Loan Rate %", "Other Loan Remaining Months","Other Loan Payment"];
    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, []);
    return (
        <div class="leading-loose">
        <form class="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
            <p class="text-gray-800 font-medium ">Now Let's Look at your Debts</p>
            <h1 class="text-lg mt-3">Car Loan</h1>
            {carArray.map((car) =>
            <div class="mt-2 grid grid-cols-2">
                <label  class="my-1 block text-md text-gray-00" for="cus_name">{car}</label>
                <input  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtChange} name={car} id={car} type="number" required="" />
            </div>
            )}
            <h1 class="text-lg mt-3">Credit Cards</h1>
            {creditCardArray.map((credit) =>
            <div class="mt-2 grid grid-cols-2">
                <label  class="my-1 block text-md text-gray-00" for="cus_name">{credit}</label>
                <input  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtChange} name={credit} id={credit} type="number" required="" />
            </div>
            )}
            <h1 class="text-lg mt-3">Mortgage</h1>
            {mortgageArray.map((mortgage) =>
            <div class="mt-2 grid grid-cols-2">
                <label  class="my-1 block text-md text-gray-00" for="cus_name">{mortgage}</label>
                <input  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtChange} name={mortgage} id={mortgage} type="number" required="" />
            </div>
            )}
            <h1 class="text-lg mt-3">Student Loans</h1>
            {studentLoanArray.map((studentLoan) =>
            <div class="mt-2 grid grid-cols-2">
                <label  class="my-1 block text-md text-gray-00" for="cus_name">{studentLoan}</label>
                <input  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtChange} name={studentLoan} id={studentLoan} type="number" required="" />
            </div>
            )}
            <h1 class="text-lg mt-3">Other Loan</h1>
            {otherLoanArray.map((otherLoan) =>
            <div class="mt-2 grid grid-cols-2">
                <label  class="my-1 block text-md text-gray-00" for="cus_name">{otherLoan}</label>
                <input  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={debtChange} name={otherLoan} id={otherLoan} type="number" required="" />
            </div>
            )}
        </form>
        <div class="flex justify-center mt-2">
                    <button onClick={() => {debtSubmit();changeForm()}} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r flex-wrap content-center">
                        Next Page
                     </button>
                </div>
           
        </div>

    )
}

export default Debt
