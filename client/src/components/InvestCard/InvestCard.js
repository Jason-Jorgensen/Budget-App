import React from 'react'

export default function IncomeCard({ investments, incomeData, totalTax }) {
    const grossIncome = parseInt(incomeData?.["Gross Income"]);
    const otherIncome = parseInt(incomeData?.["Other Additional Income"]);
    const totalGrossIncome = grossIncome + otherIncome;
    const ficaTax = parseInt(totalTax?.fica?.amount);
    const stateTax = parseInt(totalTax?.state?.amount);
    const federalTax = parseInt(totalTax?.federal?.amount);
    const netIncome = grossIncome + otherIncome - stateTax - federalTax - ficaTax;
    let totalYearlyCont = (netIncome) * investments?.["Employer 401K Contribution %"] / 100 + (netIncome) * investments?.["Your 401K Contribution %"] / 100;


    return (
        <div className="mb-8">
            <div className="text-black font-bold text-xl mb-2">Investment</div>
            <p className="text-grey-darker text-base"><strong>Current 401K Balance: </strong>${investments?.['Current Retirement Balance']}</p>
            <p className="text-grey-darker text-base"><strong>Employer 401K Contribution %: </strong>{investments?.['Employer 401K Contribution %']}%</p>
            <p className="text-grey-darker text-base"><strong>Your 401K Contribution %: </strong>{investments?.['Your 401K Contribution %']}%</p>
            <p className="text-grey-darker text-base"><strong>Estimated Total Yearly 401K Contribution: </strong>${totalYearlyCont}</p>
            <p className="text-grey-darker text-base"><strong>Target Annual Return: </strong>{investments?.['What Kind of Investor are You?']}%</p>
        </div>
    )
}