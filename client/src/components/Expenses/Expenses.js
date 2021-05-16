import React, { useState, useEffect } from "react";

import EditableLabel from 'react-editable-label';



function Expenses({ expenseChange, expenseSubmit, changeForm }) {
    const [labelNames, setLabelNames] = useState([])
    const updateLabel = (value, index) => {
        const tempArray = labelNames.slice();
        tempArray[index] = value;
        setLabelNames(tempArray);
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, []);
    return (
        <div class="leading-loose">
            <form class="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
                <p class="text-gray-800 font-medium ">Now Let's Look at your Monthly Expenses</p>

                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Rent or Mortgage</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Rent or Mortgage" id="rentOrMortgage" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Renters Insurance</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Renters Insurance" id="rentersInsurance" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Health Insurance</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Health Insurance" id="Health Insurance" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Car Insurance</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Car Insurance" id="Car Insurance" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Car Maintenance</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Car Maintenance" id="Car Maintenance" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Gas Expense</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Gas Expense" id="Gas Expense" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Groceries</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Groceries" id="Groceries" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Home Goods</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Home Goods" id="Home Goods" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Hygiene Products</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Hygiene Products" id="Hygene Products" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Restaurants</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Restaurants" id="Restaurants" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Phone Payment</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Phone Payment" id="Phone Payment" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Internet Bill</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Internet Bill" id="Internet Bill" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Water/Trash/Sewage</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Water/Trash/Sewage" id="Water/Trash/Sewage" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Electricity</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Electricity" id="Electricity" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Natural Gas</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Natural Gas" id="Natural Gas" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Clothing</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Clothing" id="Clothing" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Haircuts</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Haircuts" id="Haircuts" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Self Care</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Self Care" id="Self Care" type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Dates</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Dates" id="Dates" type="number" required="" />
                </div>
                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Gifts</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Gifts" id="Gifts" type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Charity</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Charity" id="Charity" type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <label class="my-1 block text-md text-gray-00" for="cus_name">Miscellaneous</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Miscellaneous" id="Miscelaneous" type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <EditableLabel initialValue={'Enter Expense...'} save={value => { updateLabel(value, 0) }} />
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name={labelNames[0]} id={labelNames[0]} type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <EditableLabel initialValue={'Enter Expense...'} save={value => { updateLabel(value, 1) }} />
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name={labelNames[1]} id={labelNames[1]} type="number" required="" />
                </div>

                <div class="mt-2 grid grid-cols-2">
                    <EditableLabel initialValue={'Enter Expense...'} save={value => { updateLabel(value, 2) }} />
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name={labelNames[2]} id={labelNames[2]} type="number" required="" />
                </div>

            </form>
            <div class="leading-loose">
                <form class="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
                    <p class="text-gray-800 font-medium">Memberships</p>

                    <div class="mt-2 grid grid-cols-2">
                        <label class="my-1 block text-md text-gray-00" for="cus_name">Gym</label>
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Gym" id="Gym" type="number" required="" />
                    </div>
                    <div class="mt-2 grid grid-cols-2">
                        <label class="my-1 block text-md text-gray-00" for="cus_name">Video Streaming</label>
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Video Streaming" id="Video Streaming" type="number" required="" />
                    </div>
                    <div class="mt-2 grid grid-cols-2">
                        <label class="my-1 block text-md text-gray-00" for="cus_name">Music</label>
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Music" id="Music" type="number" required="" />
                    </div>
                    <div class="mt-2 grid grid-cols-2">
                        <label class="my-1 block text-md text-gray-00" for="cus_name">Costco, Amazon, Etc.</label>
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name="Costco, Amazon, Etc." id="Costco, Amazon, Etc." type="number" required="" />
                    </div>


                    <div class="mt-2 grid grid-cols-2">
                        <EditableLabel initialValue={'Enter Expense...'} save={value => { updateLabel(value, 3) }} placeholder="working" />
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={expenseChange} name={labelNames[3]} id={labelNames[3]} type="number" required="" />
                    </div>

                    <div class="mt-2 grid grid-cols-2">
                        <EditableLabel initialValue={'Enter Expense...'} save={value => { updateLabel(value, 4) }} />
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name={labelNames[4]} id={labelNames[4]} type="number" required="" />
                    </div>
                </form>
                <div class="flex justify-center mt-2">
                    <button onClick={() => {expenseSubmit();changeForm()}} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r flex-wrap content-center">
                        Next Page
                     </button>
                </div>
            </div>

        </div>



    )
}

export default Expenses


