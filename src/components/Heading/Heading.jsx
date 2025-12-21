import React from 'react'

function Heading(props) {
  return (
    <div className='mx-auto w-fit '>
            <h2 className=' lg:text-3xl text-3xl font-bold'><span className='text-orange-500'>{props.hilight}</span> {props.header}</h2>
            <div className='w-34 h-1  mt-4 ml-auto  bg-orange-300'>

            </div>
          
        </div>
  )
}

export default Heading
