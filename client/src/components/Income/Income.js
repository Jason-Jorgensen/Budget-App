import React, {useContext} from 'react';
import formsContext from '../../utils/formsContext';



function Income({incomeChange}) {
    const income = useContext(formsContext);


    return (
        
        <div className="max-w-xl mx-auto h-screen w-full" >
        <div className="w-full bg-blue-200 rounded shadow-lg p-8 ">
          <h1 className="block w-full text-center text-grey-darkest mb-6">Let's Look at your income</h1>
          <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
            <div className="field-group mb-4 md:w-full mx-auto grid grid-cols-2">
              <label className="field-label " for="first_name">Yearly Gross Income</label>
              <input className="field ml-2 bg-white" onChange={incomeChange} type="text" name="salary" id="first_name" />
            </div>
            <div className="field-group mb-4 md:w-full mx-auto grid grid-cols-2">
              <label className="field-label" for="last_name">Yearly Gross Bonuses</label>
              <input className="field ml-2" onChange={incomeChange} type="text" name="description" id="last_name" />
            </div>
            <div className="field-group mb-4 md:w-full mx-auto grid grid-cols-2">
              <label className="field-label" for="email">401K Contirbution %</label>
              <input className="field ml-2" type="email" name="email" id="email" />
            </div>
            <div className="field-group mb-6 md:w-full mx-auto grid grid-cols-2">
              <label className="field-label" for="password">Password</label>
              <input className="field ml-2" type="password" name="password" id="password" />
            </div>
          </form>
      </div>
      </div>
    )
}

export default Income
