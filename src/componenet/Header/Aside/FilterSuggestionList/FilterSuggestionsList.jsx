import React from 'react'
import Card from '../../../utils/Card'
import SuggestionTypeIcon from '../../../suggestions/SuggestionTypeIcon'
import { listOfFiltersOptions } from './ListOfFiltersOptions'
const FilterSuggestionsList = () => {
  return (
    <Card className="  gap-2 grid grid-cols-3 ">
       {listOfFiltersOptions.map((item,index)=>{
       return <SuggestionTypeIcon  key={index} className={index===3 ? "col-span-3" :index===4 ? "col-span-2" :""} isHover={true} text={item} />
       })}
    </Card>
  )
}

export default FilterSuggestionsList