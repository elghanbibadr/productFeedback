import React from 'react'
import Btn from '../utils/Btn'
import { Link } from 'react-router-dom'
const RoadpMapHeader = () => {

  return (
    <div className='flex-row-between bg-greyDarker'>
        <div className='flex flex-col'>
             <div className='flex-row-between'>
             <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                <Link to="/"  className='text-sm ml-3 text-greyDark font-bold'>Go Back</Link>
            </div>
            <h2>Roadmap</h2>
        </div>
        <Btn className='bg-purple whitespace-nowrap w-fit  transition-colors duration-300  hover:bg-purpleHover' text='+Add feedback' />
    </div>
  )
}

export default RoadpMapHeader