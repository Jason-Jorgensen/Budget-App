import React from 'react'

export default function ExpensesCard() {
    return (
        <div className="col-start-1 col-span-12 sm:col-start-1 sm:col-span-7 my-2 h-full w-full rounded">
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white shadow-xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="text-black font-bold text-xl mb-2">Expenses</div>
                <div className="mb-5 col-start-1 col-span-6 my-2 w-full rounded">
                    <p className="text-grey-darker text-base"><strong>Rent or Mortgage: </strong>$1,000</p>
                    <p className="text-grey-darker text-base"><strong>Renters Insurance: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Health Insurance: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Car Insurance: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Car Maintenance: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Gas Expense: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Groceries: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Home Goods: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Hygene Products: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Restaurants: </strong>$100</p>
                </div>

                <div className="mb-5 col-start-7 col-span-6 my-2 w-full rounded">
                    <p className="text-grey-darker text-base"><strong>Phone Payment: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Internet Bill: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Water/Trash/Sewage: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Electricity: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Natural Gas: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Clothing: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Haircuts: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Self Care: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Groceries: </strong>$100</p>
                    <p className="text-grey-darker text-base"><strong>Groceries: </strong>$100</p>
                </div>
            </div>
        </div>
    </div>
    )
}
