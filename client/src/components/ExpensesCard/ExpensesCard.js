import React, { useState, useEffect } from 'react'



export default function ExpensesCard(props) {
    // console.log('ExpensesCard props', props)
    return (
        <div className="col-start-1 col-span-12 sm:col-start-1 sm:col-span-7 my-2 h-full w-full rounded">
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white shadow-xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="text-black font-bold text-xl mb-2">Expenses</div>
                <div className="mb-5 col-start-1 col-span-6 my-2 w-full rounded">
                    <p className="text-grey-darker text-base"><strong>Rent or Mortgage: </strong>{`$${props.expenses.["Rent or Mortgage"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Renters Insurance: </strong>{`$${props.expenses.["Renters Insurance"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Health Insurance: </strong>{`$${props.expenses.["Health Insurance"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Car Insurance: </strong>{`$${props.expenses.["Car Insurance"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Car Maintenance: </strong>{`$${props.expenses.["Car Maintenance"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Gas Expense: </strong>{`$${props.expenses.["Gas Expense"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Groceries: </strong>{`$${props.expenses.["Groceries"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Home Goods: </strong>{`$${props.expenses.["Home Goods"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Hygiene Products: </strong>{`$${props.expenses.["Hygiene Products"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Restaurants: </strong>{`$${props.expenses.["Restaurants"]}`}</p>
                </div>

                <div className="mb-5 col-start-7 col-span-6 my-2 w-full rounded">
                    <p className="text-grey-darker text-base"><strong>Phone Payment: </strong>{`$${props.expenses.["Phone Payment"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Internet Bill: </strong>{`$${props.expenses.["Internet Bill"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Water/Trash/Sewage: </strong>{`$${props.expenses.["Water/Trash/Sewage"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Electricity: </strong>{`$${props.expenses.["Electricity"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Natural Gas: </strong>{`$${props.expenses.["Natural Gas"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Clothing: </strong>{`$${props.expenses.["Clothing"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Haircuts: </strong>{`$${props.expenses.["Haircuts"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Self Care: </strong>{`$${props.expenses.["Self Care"]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Groceries: </strong>{`$${props.expenses.["Groceries"]}`}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
