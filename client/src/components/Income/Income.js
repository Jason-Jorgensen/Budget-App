import React from 'react'

function Income() {
    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter">
        <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 class="block w-full text-center text-grey-darkest mb-6">Let's Look at your income</h1>
          <form class="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
            <div class="field-group mb-4 md:w-1/2">
              <label class="field-label mr-4" for="first_name">First Name</label>
              <input class="field md:mr-2" type="text" name="first_name" id="first_name" />
            </div>
            <div class="field-group mb-4 md:w-1/2">
              <label class="field-label md:ml-2 mr-4" for="last_name">Last Name</label>
              <input class="field md:ml-2" type="text" name="last_name" id="last_name" />
            </div>
            <div class="field-group mb-4 md:w-full">
              <label class="field-label mr-4" for="email">Email</label>
              <input class="field" type="email" name="email" id="email" />
            </div>
            <div class="field-group mb-6 md:w-full">
              <label class="field-label mr-4" for="password">Password</label>
              <input class="field" type="password" name="password" id="password" />
            </div>
          </form>
      </div>
      </div>
    )
}

export default Income
