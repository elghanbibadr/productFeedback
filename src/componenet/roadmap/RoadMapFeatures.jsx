import React , {useContext, useState} from  'react'
import { AppContext } from '../store/AppContext'
import FeaturesName from './FeaturesName'
import RoadpMapItems from './RoadpMapItems'
import SuggestionCard from '../suggestions/SuggestionCard'
const RoadMapFeatures = () => {
    const FeaturesNameList=[{name:'Planned',borderColor:"border-orange"},{name:'In-Progress',borderColor:"border-purple"},{name:'live',borderColor:"border-blueLight"}]
    const {plannedFeatures, inProgressFeatures, liveFeatures}=useContext(AppContext)
    const roadMapData=[
        {status:"planned",title:"Ideas prioritized for research",roadmapItems:plannedFeatures},
        {status:"In-Progress",title:"Currently being developed",roadmapItems:inProgressFeatures},
        {status:"Live",title:"Released features",roadmapItems:liveFeatures}
    ]

    console.log(roadMapData[0])
    const [selectedFeatureNameId,setSlectedFeatureNameId]=useState(0)
    const handleClick=(e) => {
    setSlectedFeatureNameId(e.target.id)
  }
  

  return (
    <>
    <div className='grid grid-cols-3 text-center  border-b-[1px] border-greyHover md:hidden '>
    {FeaturesNameList.map(({name,borderColor},index)=>{
   return <h3  className={` ${(selectedFeatureNameId==index ) ?  `${borderColor} border-b-4`   : "border-none text-greyHover"} cursor-pointer py-4`} onClick={handleClick} id={index}>{name}</h3>
  })}   
   </div>
    <div className='md:grid grid-cols-3'>
      {roadMapData.map(({status,title,roadmapItems},index)=>{
          return  <RoadpMapItems  id={index} className={`${selectedFeatureNameId==index ? "block p-6 " : "hidden md:block"}`} status={status} title={title} roadmapItem={roadmapItems} />
      })}
    </div>
    </>
  )
}

export default RoadMapFeatures