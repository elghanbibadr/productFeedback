import React from 'react'
import Card from '../../utils/Card'
import { RoadmapItems } from './RoadmapItems'
const Roadmap = () => {
  return (
    <Card className='w-1/2 mt-5' >
     <div className='flex-row-between'>
        <h3>Roadmap</h3>
        <a className='text-blue text-sm cursor-pointer font-medium border-b border-b-blue hover:text-blueHover'>View</a>
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