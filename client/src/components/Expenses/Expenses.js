import React from "react";

import EditableLabel from 'react-editable-label';



function Expenses() {
    

    return (
        <div class="leading-loose">
            <form class="max-w-xl mx-auto p-10 bg-white rounded shadow-xl">
                <p class="text-gray-800 font-medium">Now Let's Look at Expenses!</p>
                
                <div class="mt-2 grid grid-cols-2">
                    <EditableLabel initialValue={'World'} save={value => { console.log(`Saving '${value}'`);}}/>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="salary" id="salary" type="number" required="" placeholder="Total Gross Income" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <EditableLabel initialValue={'World'} save={value => { console.log(`Saving '${value}'`);}}/>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="salary" id="salary" type="number" required="" placeholder="Total Gross Income" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <EditableLabel initialValue={'World'} save={value => { console.log(`Saving '${value}'`);}}/>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="salary" id="salary" type="number" required="" placeholder="Total Gross Income" />
                </div>

            </form>
            <button >

            </button>
        </div>



    )
}

export default Expenses


