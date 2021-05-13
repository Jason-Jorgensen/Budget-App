import React, {useContext} from 'react';
import formsContext from '../../utils/formsContext';
import './Income.css'



function Income({incomeChange, incomeSubmit}) {
    const income = useContext(formsContext);


    return (
        

    <div class="leading-loose">
  <form class="max-w-xl mx-auto p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Let's Take a Look at your Income!</p>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Gross Income</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="salary" id="salary" type="number" required="" placeholder="Total Gross Income" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Yearly Gross Bonuses</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="bonus" id="bonus" type="number" required="" placeholder="Avg. Yearly Bonus" />
    </div>
    <div class="grid grid-cols-1">
    <div class="mt-2 ">
      <label class="block text-sm text-gray-00" for="cus_name">Your 401K Contribution %</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="personalCont" id="401k" type="number" required="" placeholder="Your Personal 401K Contribution" />
    </div>
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Employer 401K Contribution %</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="employerCont" id="employer401k" type="number" required="" placeholder="Your Employer's 401K Contribution" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Other Additional Income</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="additionalIncome" id="additionalIncome" type="number" required="" placeholder="Add any side hustles, rental income, etc." />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Current Available Cash</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="cash" id="cash" type="number" required="" placeholder="Check your accounts for how much Cash is avialable"/>
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Current Retirement Balance </label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="retirementBalance" id="retirementBalance" type="number" required="" placeholder="Total Retirement Account Balances" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">What Kind of Investor are You? </label>
      <select class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded investor" style={{fontSize:"15px"}}  onChange={incomeChange} name="investorType">
          <option value="conservative">Conservative 6% Annual Return</option>
          <option value="moderate">Moderate 8% Annual Return</option>
          <option value="aggressive">Aggressive 10% Annual Return</option>
      </select>
    </div>
  </form>
  <button onClick={incomeSubmit}>

  </button>
</div>

    )
}

export default Income
