import React from 'react'
import Navbar from './Navbar.jsx'
import Countercard from './Countercard'

// import {motion} from 'framer-motion'
function Home() {
//   const transition = { type: 'spring' ,duration:'3'}
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-800 min-h-screen  ">
      {/* Left Section */}
      <div className="col-span-3 space-y-6 p-6">
        
        <div className="mt-16 bg-[#363d42] rounded-4xl px-6 py-4 relative flex items-center text-white w-fit">
          {/* <motion.div
          initial={{left:'230px'}}
          whileInview={{left:'8px'}}
          transition={transition}
          ></motion.div> */}
          <div className="absolute left-0 bg-amber-500 w-20 h-[80%] rounded-3xl"></div>
          <span className="ml-6 z-30">Lorem ipsum, dolor sit amet consectetur adipisicing elit!</span>
        </div>
        
        <div className="text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">CHASE <span>YOUR DREAM HERE</span></h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor tempora ipsum earum.</p>
          
          <div className="flex">
            <Countercard counter="130+" text="GOOD BYE" />
            <Countercard counter="978+" text="GOOD BYE" />
            <Countercard counter="50+" text="GOOD BYE" />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="text-white bg-amber-500 font-semibold py-2 px-4">Join Now</button>
            <button className="text-white border border-amber-500 font-semibold py-2 px-4">Join Now</button>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="bg-amber-500 text-white flex flex-col items-center p-6  w-full">
        <div className="w-full flex justify-end">
          <button className="bg-white text-black font-bold px-4 py-3">Join Now</button>
        </div>
        
        <div className="bg-gray-700 w-fit p-6 space-y-3 m-5 rounded-lg">

          <p className="text-gray-500">Heart Rate</p>
          <p className="text-white text-xl">116 bpm</p>
        </div>
      </div>
    </div>
  )
}

export default Home
