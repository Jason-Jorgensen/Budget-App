import React, { useState } from "react";

import EditableLabel from 'react-editable-label';



function Expenses({expenseChange}) {
    const [labelNames, setLabelNames] = useState([])
    const updateLabel = (value, index) => {
        const tempArray = labelNames.slice();
        tempArray[index] = value;
        setLabelNames(tempArray);
    }
    return (
        <div class="leading-loose">
            <form class="max-w-xl mx-auto p-10 bg-white rounded shadow-xl">
                <p class="text-gray-800 font-medium">Now Let's Look at Expenses!</p>

                <div class="mt-2 grid grid-cols-2">
                    <label class="block text-md text-gray-00" for="cus_name">Rent</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="salary" id="salary" type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <label className=""><EditableLabel initialValue={'Enter Expense Name Here'} save={value => { updateLabel(value, 0) }} placeholder="working" /> </label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name={labelNames[0]} id={labelNames[0]} type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <EditableLabel initialValue={'World'} save={value => { updateLabel(value, 1) }} />
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name={labelNames[1]} id={labelNames[1]} type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <EditableLabel initialValue={'World'} save={value => { updateLabel(value, 2) }} />
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name={labelNames[2]} id={labelNames[2]} type="number" required="" />
                </div>

            </form>
            <button>
            </button>
        </div>



    )
}

export default Expenses


