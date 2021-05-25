import React, {useEffect} from 'react'

function IncomeCard({ incomeData, totalTax, investmentsData }) {
    const netIncome = incomeData?.["Gross Income"] +incomeData?.["Other Additional Income"]- totalTax?.state?.amount - totalTax?.federal?.amount - totalTax?.fica?.amount;


    return (
        <div className="mb-8">
        <div className="text-black font-bold text-xl mb-2">Financial Snap Shot</div>
        <p className="text-grey-darker text-base"><strong>Gross Income: </strong>${incomeData?.['Gross Income']}</p>
        <p className="text-grey-darker text-base"><strong>Additional Income: </strong>${incomeData?.['Other Additional Income']}</p>
        <p className="text-grey-darker text-base"><strong>Estimated Federal Tax: </strong>${totalTax?.federal?.amount}</p>
        <p className="text-grey-darker text-base"><strong>Estimated State Tax: </strong>${totalTax?.state?.amount}</p>
        <p className="text-grey-darker text-base"><strong>Estimated FICA Tax: </strong>${totalTax?.fica?.amount}</p>
        <p className="text-grey-darker text-base"><strong>After Tax Income: </strong>${netIncome}</p>  
        <p className="text-grey-darker text-base"><strong>Current Retirement Balance </strong>${investmentsData?.['Current Retirement Balance']}</p>
        </div>
    )
}

export default IncomeCard
