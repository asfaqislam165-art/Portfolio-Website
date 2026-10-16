import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="Home" className="px-3 md:px-5">


      <section className="overflow-hidden bg-gray-50 rounded-lg">

        <div className="grid items-center gap-8 md:grid-cols-2">

    
          <div className="p-8 md:p-12 lg:px-16 lg:py-20">
            <div className="max-w-xl">

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-800">
                Welcome to my portfolio
              </p>

              <div>
                <span className="text-rotate text-7xl">
  <span className="justify-items-center">
    <span>Asfaq</span>
    <span>Islam </span>
    <span>Mahin</span>
    <span>Asfaq</span>
    <span>Islam </span>
    <span>Mahin</span>
  </span>
</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-red-800 md:text-3xl">
                Full Stack Developer
                <br />
                & UI/UX Designer
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-gray-700">
                I build modern, responsive, and user-friendly web applications
                with clean design and efficient functionality.
              </p>
              

             
                

                  <div className="tooltip" data-tip="Hello">
                <Link
                  to="/skills">
                  

                    <button className="btn  bg-red-800 px-12 py-3 text-sm font-medium text-white transition mt-4 hover:bg-emerald-700 focus:ring-2 focus:ring-yellow-400 focus:outline-hidden">Skills Of Mahin</button>
                
                
                </Link>
              </div>


              

              






            </div>
          </div>

          {/* Image */}
          <div className="h-full min-h-80 mt-5">
            <img
              src="/src/Images/Mahin.jpg"
              alt="Mahin"
              className="h-full min-h-80 w-full object-cover"
            />
          </div>

        </div><br /><br />


        {/* Work Process */}
        <div className="px-6 pb-10 pt-6 md:px-12">

          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              My Work Process
            </h2>

            <p className="mt-2 text-gray-600">
              From idea to a complete working application.
            </p>
          </div>


          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

            {/* Plan */}
            <div className="rounded-lg bg-red-800 p-6 text-white shadow-md transition hover:-translate-y-1">
              <div className="mb-4 text-center">
                <i className="fa-solid fa-brain text-3xl"></i>

                <h3 className="mt-3 text-2xl font-semibold">
                  Plan
                </h3>
              </div>

              <p className="text-center leading-6">
                Understand the requirement and plan the structure.
              </p>
            </div>


            {/* Design */}
            <div className="rounded-lg bg-red-800 p-6 text-white shadow-md transition hover:-translate-y-1">
              <div className="mb-4 text-center">
                <i className="fa-solid fa-landmark text-3xl"></i>

                <h3 className="mt-3 text-2xl font-semibold">
                  Design
                </h3>
              </div>

              <p className="text-center leading-6">
                Create a clean and user-friendly interface.
              </p>
            </div>


            {/* Develop */}
            <div className="rounded-lg bg-red-800 p-6 text-white shadow-md transition hover:-translate-y-1">
              <div className="mb-4 text-center">
                <i className="fa-solid fa-code text-3xl"></i>

                <h3 className="mt-3 text-2xl font-semibold">
                  Develop
                </h3>
              </div>

              <p className="text-center leading-6">
                Build the frontend and backend with modern technologies.
              </p>
            </div>

          </div>
        </div>

      </section>


      <br />






                          <div className="flex items-center justify-center mb-14">
                           
                           <div className="chat chat-start">
  <div className="chat-header">
     <i class="fa-regular fa-user"></i> Stranger 
  
  </div><br />
  <div className="chat-bubble bg-red-800 text-white">Are you ready ?</div>
 
</div>
<div className="chat chat-start">
  <div className="chat-header">
      Me <i class="fa-solid fa-user-tie"></i></div><br />
  <div className="chat-bubble bg-red-800 text-white"> <h2>Yes , of course bring it on .</h2></div>
  <div className="chat-footer opacity-50"></div>
</div>

                          

          </div>
            









    </div>
  );
};

export default Home;
