import React from 'react'
import Card from '../../../utils/Card'
import { Link } from 'react-router-dom'
import { RoadmapItems } from './RoadmapItems'
const Roadmap = () => {
  return (
    <Card className='md:w-1/3 lg:w-full' >
     <div className='flex-row-between'>
        <h3>Roadmap</h3>
        <Link to='/roadpmap' className='text-blue text-sm cursor-pointer font-medium border-b border-b-blue hover:text-blueHover'>View</Link>
     </div>
     {RoadmapItems.map(({id,number,title,circleBg})=>{
        return <div key={id} className='flex-row-between my-3'>
            <div  className='flex-row-between'>
                <span className={`${circleBg} inline-flex h-2 w-2 rounded-full`}></span>
                <p className='mx-2'>{title}</p>
            </div>
            <h3>{number}</h3>
        </div>
     })}
    </Card>
  )
}

export default Roadmap