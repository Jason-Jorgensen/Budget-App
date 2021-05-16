import React, {useContext} from 'react';
import formsContext from '../../utils/formsContext';
import './Income.css'



function Income({incomeChange, incomeSubmit, changeForm}) {
    const income = useContext(formsContext);


    return (
        

    <div className="leading-loose">
  <form className="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
    <p className="text-gray-800 font-medium">Let's Take a Look at your Income!</p>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" for="cus_name">Gross Income</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="salary" id="salary" type="number" required="" placeholder="Total Gross Income" />
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" for="cus_name">Yearly Gross Bonuses</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={incomeChange} name="bonus" id="bonus" type="number" required="" placeholder="Avg. Yearly Bonus" />
    </div>
    
     
    <div className="mt-2">
      <label className="block text-sm text-gray-00" for="cus_name">Other Additional Income</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="additionalIncome" id="additionalIncome" type="number" required="" placeholder="Add any side hustles, rental income, etc." />
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" for="cus_name">Current Available Cash</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={incomeChange} name="cash" id="cash" type="number" required="" placeholder="Check your accounts for how much Cash is avialable"/>
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
