import React, {useContext} from 'react';
import formsContext from '../../utils/formsContext';
import './Income.css'

const states = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY'];

function Income({incomeChange, incomeSubmit, changeForm}) {
    const income = useContext(formsContext);
    

    return (
        

    <div class="leading-loose">
  <form class="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
    <p class="text-gray-800 font-medium">Let's Take a Look at your Income!</p>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Gross Income</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="Gross Income" id="salary" type="number" required="" placeholder="Total Gross Income" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Yearly Gross Bonuses</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="Yearly Gross Bonuses" id="bonus" type="number" required="" placeholder="Avg. Yearly Bonus" />
    </div>
    
     
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Other Additional Income</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="Other Additional Income" id="additionalIncome" type="number" required="" placeholder="Add any side hustles?" />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Current Available Cash</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="Current Available Cash" id="cash" type="number" required="" placeholder="Check your accounts"/>
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Tax Filing Status</label>
      <select class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded investor" style={{fontSize:"15px"}}  onChange={incomeChange} name="Tax Filing Status">
          <option value="Not Selected">Select</option>
          <option value="Single">Single</option>
          <option value="Married filing jointly">Married filing jointly</option>
          <option value="Married filing separately">Married filing separately</option>
          <option value="Head of household">Head of household</option>
          <option value="Qualifying widow(er) with dependent child">Qualifying widow(er) with dependent child</option>
      </select>
    </div>

    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Which State do you live in?</label>
      <select class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded investor " style={{fontSize:"15px"}}  onChange={incomeChange} name="state">
          {states.map((state) =>
          <option value={state}>{state}</option>
          )}
      </select>
    </div>

  </form>
  <div className="flex justify-center mt-2">
  <button onClick={() => {incomeSubmit();changeForm()} }className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r flex-wrap content-center">
    Next Page
  </button>
</div>
</div>

    )
}

export default Income
