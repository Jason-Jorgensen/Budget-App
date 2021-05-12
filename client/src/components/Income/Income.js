import React, {useContext} from 'react';
import formsContext from '../../utils/formsContext';
import './Income.css'



function Income({incomeChange}) {
    const income = useContext(formsContext);


    return (
        

    <div class="leading-loose">
  <form class="max-w-xl mx-auto p-10 bg-blue-200 rounded shadow-xl">
    <p class="text-gray-800 font-medium">Let's Take a Look at your Income!</p>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Gross Income</label>
      <input class="w-half px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="salary" id="salary" type="number" required="" placeholder="Total Gross Income" aria-label="Name" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Yearly Gross Bonuses</label>
      <input class="w-half px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="bonus" id="bonus" type="integer" required="" placeholder="Avg. Yearly Bonus" aria-label="Name" />
    </div>
    <div class="grid grid-cols-1">
    <div class="mt-2 ">
      <label class="block text-sm text-gray-00" for="cus_name">Your 401K Contribution %</label>
      <input class="w-half px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="401k" id="401k" type="integer" required="" placeholder="Your Name" aria-label="Percentage" />
    </div>
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Employer 401K Contribution %</label>
      <input class="w-half px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="employer401k" id="employer401k" type="integer" required="" placeholder="Your Name" aria-label="Name" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Other Additional Income</label>
      <input class="w-half px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="additionalIncome" id="additionalIncome" type="integer" required="" placeholder="Your Name" aria-label="Name" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Current Available Cash</label>
      <input class="w-half px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="cash" id="cash" type="integer" required="" placeholder="Your Name" aria-label="Name" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Current Retirement Balance </label>
      <input class="w-half px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="retirementBalance" id="retirementBalance" type="integer" required="" placeholder="Your Name" aria-label="Name" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">What Kind of Investor are You? </label>
      <select class="w-half px-5 py-1 text-gray-700 bg-gray-200 rounded investor" style={{fontSize:"11px"}}  onChange={incomeChange} name="investorType">
          <option value="conservative">Conservative 6% Annual Return</option>
          <option value="moderate">Moderate 8% Annual Return</option>
          <option value="aggressive">Aggressive 10% Annual Return</option>
      </select>
    </div>
  </form>
</div>

    )
}

export default Income
