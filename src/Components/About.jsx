import React from 'react'

const About = () => {
  return (
    <div id="About">
      
    
      <div class="space-y-4">
  <details
    class="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary class="flex items-center justify-between gap-1.5 text-gray-900">
      <h2 className=" font-extrabold text-2xl text-center justify-center hover:text-yellow-400">About Me? <i class="fa-solid fa-angles-down"></i></h2>

      <svg
        aria-hidden="true"
        class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="pt-4 text-black hover:text-yellow-400">
     
         
               I believe great digital products are created by combining creativity, technology, and problem-solving. My journey in web development started with curiosity about how websites and applications work, and since then I have been continuously improving my skills through learning and building real-world projects.
     
      
    </p>
  </details>

  <details
    class="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary class="flex items-center justify-between gap-1.5 text-gray-900">
      <h2 className=" font-extrabold text-2xl text-center justify-center hover:text-yellow-400">I Enjoy <i class="fa-solid fa-angles-down"></i></h2>

      <svg
        aria-hidden="true"
        class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="pt-4 text-gray-900 hover:text-yellow-400">
    exploring new technologies, designing intuitive user experiences, and developing solutions that are simple, efficient, and easy to use. I always focus on writing clean code, improving my knowledge, and creating meaningful digital experiences.
    </p>
  </details>

  <details
    class="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary class="flex items-center justify-between gap-1.5 text-gray-900">
      <h2 class="font-extrabold text-2xl text-center justify-center hover:text-yellow-400">Outside of coding <i class="fa-solid fa-angles-down"></i></h2>

      <svg
        aria-hidden="true"
        class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="pt-4 text-gray-900 hover:text-yellow-400">
     I love learning new tools, experimenting with ideas, and challenging myself to become a better developer every day. Every experience helps me grow as a developer and motivates me to build better, more meaningful digital solutions.
    </p>
  </details>
      </div><br />
 
      





      <div className="p-10">

        <figure className="diff aspect-10/5" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <img alt="daisy" src="src\Images\7_Ronaldo.avif" />
  </div>
  <div className="diff-item-2" role="img">
    <img
      alt="daisy"
      src="src\Images\10_messi.avif" />
  </div>
  <div className="diff-resizer"></div>
</figure>
        
      </div><br />






      
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-red-800 rounded-2xl pt-2 mb-12">
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
    <div class="text-center">
      <div class="inline-flex rounded-lg text-white p-3 ">
        
      </div>

      <h3 class="mt-4 text-lg font-semibold text-white">🚀 Fast Learner</h3>

      <p class="mt-2 text-pretty text-white">Always curious to learn new technologies, improve my skills, and adapt to modern development trends.</p>
    </div>

    <div class="text-center">
      <div class="inline-flex rounded-lg text-white">
      
      </div>

      <h3 class="mt-4 text-lg font-semibold text-white">🤝 Team Work</h3>

      <p class="mt-2 text-pretty text-white">Enjoy collaborating with others, sharing ideas, and working together to achieve better results.</p>
          </div>
          

    <div class="text-center">
      <div class="inline-flex rounded-lg  p-3 text-white">
      </div>

      <h3 class="mt-4 text-lg font-semibold text-white">💡 Problem Solving</h3>
      <p class="mt-2 text-pretty text-white">Passionate about analyzing problems and creating simple, efficient solutions through technology.</p>
          </div>
          

    <div class="text-center">
      <div class="inline-flex rounded-lg  p-3 text-white">
</div>

      <h3 class="mt-4 text-lg font-semibold text-white">🎨 Creative Thinking</h3>

      <p class="mt-2 text-pretty text-white">Love exploring creative ideas and combining design with development to build better user experiences.</p>
    </div>
  </div>
      </div><br />
      



                

      









    </div>
  )
}

export default About
