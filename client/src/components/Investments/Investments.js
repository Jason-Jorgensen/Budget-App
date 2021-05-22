import React, {useEffect} from 'react';
import './Investment.css';



function Investments({investmentsChange, investmentsSubmit, changeForm, check}) {
  useEffect(() => {
    window.scrollTo(0, 0)
    
}, []);
    return (
        <div className="leading-loose">
        <form className="max-w-xl mx-auto p-10 bg-white rounded shadow-xl text-center">
            <p className="text-gray-800 font-medium">Investments</p>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlFor="cus_name">Current Retirement Balance </label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={investmentsChange} name="Current Retirement Balance" id="retirementBalance" type="number" required="" placeholder="Total Retirement Account Balances" />
    </div>
    <div className="mt-2 ">
      <label className="block text-sm text-gray-00" htmlFor="cus_name">Your 401K Contribution %</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={investmentsChange} name="Your 401K Contribution %" id="401k" type="number" required="" placeholder="Your Personal 401K Contribution" />
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlFor="cus_name">Employer 401K Contribution %</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  onChange={investmentsChange} name="Employer 401K Contribution %" id="employer401k" type="number" required="" placeholder="Your Employer's 401K Contribution" />
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlFor="cus_name">What Kind of Investor are You? </label>
      <select className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded investor" style={{fontSize:"15px"}}  onChange={investmentsChange} name="Investor Type">
          <option value="conservative">Conservative 6% Annual Return</option>
          <option value="moderate">Moderate 8% Annual Return</option>
          <option value="aggressive">Aggressive 10% Annual Return</option>
      </select>
    </div>


        </form>
        <div className="flex justify-center mt-2">
            <button onClick={() => {investmentsSubmit();changeForm();check()}} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r flex-wrap content-center">
                Finish
             </button>
        </div>
    </div>



    )
}

export default Investments
