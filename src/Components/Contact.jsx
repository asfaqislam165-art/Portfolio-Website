import React from 'react'

const Contact = () => {
  return (

      

    <div>
       
      <form
  action="#"
  class="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-red-800  p-6 mt-18 "
      >
        <div className="aura aura-rainbow  flex items-center justify-center">
  <div className="card bg-base-100">
    <div className="card-body">
      <h1 classname=""><i class="fa-solid fa-id-badge"></i> Contact To Mahin</h1>
    </div>
  </div>
</div>
  <div>
    <label class="block text-sm font-medium text-white" for="name">Name</label>

    <input
      class="mt-1 w-full rounded-lg text-black bg-white p-1 border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="name"
      type="text"
      placeholder="Type Your name"  
    />
  </div>

  <div>
    <label class="block text-sm font-medium text-white" for="email">Email</label>

    <input
      class="mt-1 w-full rounded-lg text-black bg-white p-1 border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="email"
      type="email"
      placeholder="Type Your email"
    />
  </div>

  <div>
    <label class="block text-sm font-medium text-white " for="message">Message</label>

    <textarea
      class="mt-1 w-full resize-none rounded-lg text-black bg-white p-1  border-gray-300 focus:border-indigo-500 text- focus:outline-none"
      id="message"
      rows="4"
      placeholder="Your message"
    ></textarea>
  </div>

  <button
    class="block w-full rounded-lg border  bg-white px-12 py-3 text-sm font-medium text-black hover:text-indigo-600"
    type="submit"
  >
    Send Message
        </button>
        
</form>
 

    </div>
  )
}

export default Contact
