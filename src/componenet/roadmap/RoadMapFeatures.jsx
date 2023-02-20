import React , {useState} from  'react'
import FeaturesName from './FeaturesName'
const RoadMapFeatures = () => {
    const FeaturesNameList=['Planned','In-Progress','Live']

    const [selectedFeatureNameId,setSlectedFeatureNameId]=useState(0)
    const handleClick=(e) => {
    setSlectedFeatureNameId(e.target.id)
  }
  

  return (
    <>
    <div className='grid grid-cols-3 text-center  border-b-2 border-greyHover '>
    {FeaturesNameList.map((featureName,index)=>{
   return <h3  className={` ${(selectedFeatureNameId==index ) ? "border-red border-b-4 ": "border-none"} cursor-pointer 	   py-4`} onClick={handleClick} id={index}>{featureName}</h3>
  })}   
   </div>
    </>
  )
}

export default RoadMapFeatures