import React , {useState} from  'react'
import FeaturesName from './FeaturesName'
const RoadMapFeatures = () => {
    const FeaturesNameList=[{name:'Planned',borderColor:"border-orange"},{name:'In-Progress',borderColor:"border-purple"},{name:'live',borderColor:"border-blueLight"}]

    const [selectedFeatureNameId,setSlectedFeatureNameId]=useState(0)
    const handleClick=(e) => {
    setSlectedFeatureNameId(e.target.id)
  }
  

  return (
    <>
    <div className='grid grid-cols-3 text-center  border-b-[1px] border-greyHover '>
    {FeaturesNameList.map(({name,borderColor},index)=>{
   return <h3  className={` ${(selectedFeatureNameId==index ) ?  `${borderColor} border-b-4`   : "border-none"} cursor-pointer py-4`} onClick={handleClick} id={index}>{name}</h3>
  })}   
   </div>
    </>
  )
}

export default RoadMapFeatures