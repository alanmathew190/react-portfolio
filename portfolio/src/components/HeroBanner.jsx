import React from 'react'


function HeroBanner() {
  return (
    <div className="p-7 relative" id="about">
      <h1 className="text-7xl font-bold mt-30">
        Hi, I'm{" "}
        <span
          className="text-7xl font-bold 
  bg-gradient-to-l from-cyan-500 via-sky-500 to-blue-900 
  bg-clip-text text-transparent 
  animate-gradient"
        >
          Alan J Mathew
        </span>{" "}
      </h1>
      <p className="text-4xl mt-7 text-gray-600">Web Developer</p>
      <p className="w-200 text-xl mt-10">
        Btech graduate and a passionate Python Full-Stack Developer with
        hands-on experience building scalable web applications and intuitive
        user interfaces. Skilled in architecting secure backends with
        Flask/Django and crafting dynamic frontends with React. Driven by the
        challenge of turning complex requirements into clean, maintainable
        solutions and eager to contribute to innovative, forward-thinking teams.
      </p>
      <div className="flex mt-10">
        <button className="bg-linear-to-l from-cyan-400 to-blue-400  px-5 py-3 font-bold text-white rounded-xl">
          Download Resume
        </button>
        <div className="pt-3 text-gray-700 flex w-40 justify-between ml-5">
          <a href="https://www.linkedin.com/in/alan-j-mathew/" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a href="https://github.com/alanmathew190" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 1C5.924 1 1 5.924 1 12c0 4.867 3.153 8.987 7.523 10.437.55.102.75-.238.75-.53v-1.866c-3.065.666-3.706-1.48-3.706-1.48-.5-1.273-1.222-1.613-1.222-1.613-.998-.682.076-.668.076-.668 1.103.078 1.684 1.132 1.684 1.132.981 1.682 2.576 1.197 3.207.915.1-.71.384-1.197.698-1.472-2.447-.279-5.017-1.223-5.017-5.438 0-1.203.429-2.186 1.132-2.955-.113-.28-.49-1.403.108-2.925 0 0 .923-.296 3.027 1.129a10.51 10.51 0 0 1 5.506 0c2.104-1.425 3.027-1.129 3.027-1.129.598 1.522.221 2.645.108 2.925.703.769 1.132 1.752 1.132 2.955 0 4.228-2.576 5.155-5.031 5.429.395.34.75 1.013.75 2.047v3.04c0 .296.2.64.756.53C19.85 20.988 23 16.868 23 12c0-6.076-4.924-11-11-11z" />
            </svg>
          </a>
          <a href="mailto:alanmathew190@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
     
    </div>
  );
}

export default HeroBanner