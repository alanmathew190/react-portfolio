import React from 'react'

function Skills() {
  return (
    <div className="h-150 mt-20" id="skills">
      <h1 className="text-2xl font-bold text-center">Skills</h1>
      <h1 className=" relative top-60 left-130 w-100 text-3xl font-bold">
        Tools and Technologies
      </h1>
      <div className=" flex ">
        <img
          src="/src/images/java-script.png"
          className="h-15 w-15 relative top-40 left-30"
          alt=""
        />
        <img
          src="/src/images/css-3.png"
          className="h-12 w-12 relative top-10 left-90"
          alt=""
        />
        <img
          src="/src/images/logo.png"
          className="h-10 w-10 relative top-80 left-150"
          alt=""
        />
        <img
          src="/src/images/node-js.png"
          className="h-15 w-15 relative top-80 left-50"
          alt=""
        />
        <img
          src="/src/images/physics.png"
          className="h-17 w-17 relative top-5 left-230"
          alt=""
        />
        <img
          src="/src/images/social.png"
          className="h-18 w-18 relative top-15 left-130"
          alt=""
        />
        <img
          src="/src/images/ghub.png"
          className="h-13 w-13 relative top-70 left-180"
          alt=""
        />
        <img
          src="/src/images/html-5.png"
          className="h-12 w-12 relative top-60 left-240"
          alt=""
        />
        <img
          src="/src/images/python.png"
          className="h-12 w-12 relative top-40 left-170"
          alt=""
        />
        <img
          src="/src/images/cloud-api.png"
          className="h-12 w-12 relative top-60 left-40"
          alt=""
        />
      </div>
    </div>
  );
}

export default Skills