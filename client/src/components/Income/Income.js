import React from 'react'

function Income() {
    return (
        <div className="max-w-xl mx-auto h-screen w-full bg-teal-lighter">
        <div className="w-full bg-white rounded shadow-lg p-8 ">
          <h1 className="block w-full text-center text-grey-darkest mb-6">Let's Look at your income</h1>
          <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
            <div className="field-group mb-4 md:w-full">
              <label className="field-label" for="first_name">First Name</label>
              <input className="field ml-2" type="text" name="first_name" id="first_name" />
            </div>
            <div className="field-group mb-4 md:w-full">
              <label className="field-label" for="last_name">Last Name</label>
              <input className="field ml-2" type="text" name="last_name" id="last_name" />
            </div>
            <div className="field-group mb-4 md:w-full">
              <label className="field-label" for="email">Email</label>
              <input className="field ml-2" type="email" name="email" id="email" />
            </div>
            <div className="field-group mb-6 md:w-full">
              <label className="field-label" for="password">Password</label>
              <input className="field ml-2" type="password" name="password" id="password" />
            </div>
          </form>
      </div>
      </div>
    )
}

export default Income
