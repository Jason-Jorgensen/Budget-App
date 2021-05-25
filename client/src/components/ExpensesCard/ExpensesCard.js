import React from 'react'



export default function ExpensesCard({ expenses, categorizedExpenses }) {
    return (
        <div className="col-start-1 col-span-12 sm:col-start-1 sm:col-span-6 my-2 h-full w-full rounded">
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white shadow-xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="z-0 grid grid-flow-row grid-cols-12 grid-rows gap-2 mt-3">
                <div className="col-start-1 col-span-12 text-black font-bold text-xl mb-2">Monthly Expenses</div>
                <div className="mb-5 col-start-1 col-span-6 my-2 w-full rounded">
                    <p className="text-grey-darker text-base"><strong>Housing </strong>{`$${categorizedExpenses[0]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Utilities: </strong>{`$${categorizedExpenses[1]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Car: </strong>{`$${categorizedExpenses[2]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Health Insurance: </strong>{`$${categorizedExpenses[3]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Food: </strong>{`$${categorizedExpenses[4]}`}</p>
                </div>

                <div className="mb-5 col-start-7 col-span-6 my-2 w-full rounded">
                <p className="text-grey-darker text-base"><strong>Self Care: </strong>{`$${categorizedExpenses[5]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Social: </strong>{`$${categorizedExpenses[6]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Charity: </strong>{`$${categorizedExpenses[7]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Miscellaneous: </strong>{`$${categorizedExpenses[8]}`}</p>
                    <p className="text-grey-darker text-base"><strong>Memberships: </strong>{`$${categorizedExpenses[9]}`}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
