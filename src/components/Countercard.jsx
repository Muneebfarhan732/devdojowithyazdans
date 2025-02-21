import React from 'react'

const Countercard = (props) => {
  return (
    <>
      <div className="flex justify-center flex-col text-center p-[3%] m-[4%]">
<p className='text-2xl'>{props.counter}</p>
<p className='text-gray-500'>{props.text}</p>
      </div>
    </>
  )
}

export default Countercard
