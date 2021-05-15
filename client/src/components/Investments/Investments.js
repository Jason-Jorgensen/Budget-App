import React from 'react';
import './Investment.css';

function Investments({investmentChange, investmentSubmit, changeForm}) {
    return (
        <div class="leading-loose">
        <form class="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
            <p class="text-gray-800 font-medium">Investments</p>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Current Retirement Balance </label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={investmentChange} name="retirementBalance" id="retirementBalance" type="number" required="" placeholder="Total Retirement Account Balances" />
    </div>
    <div class="mt-2 ">
      <label class="block text-sm text-gray-00" for="cus_name">Your 401K Contribution %</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={investmentChange} name="personalCont" id="401k" type="number" required="" placeholder="Your Personal 401K Contribution" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Employer 401K Contribution %</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={investmentChange} name="employerCont" id="employer401k" type="number" required="" placeholder="Your Employer's 401K Contribution" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">What Kind of Investor are You? </label>
      <select class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded investor" style={{fontSize:"15px"}}  onChange={investmentChange} name="investorType">
          <option value="conservative">Conservative 6% Annual Return</option>
          <option value="moderate">Moderate 8% Annual Return</option>
          <option value="aggressive">Aggressive 10% Annual Return</option>
      </select>
    </div>


        </form>
        <div class="flex justify-center mt-2">
            <button onClick={() => {investmentSubmit();changeForm()}} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r flex-wrap content-center">
                Finish
             </button>
        </div>
    </div>



    )
}

export default Investments