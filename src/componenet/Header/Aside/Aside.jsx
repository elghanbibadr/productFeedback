import React from "react"
import FilterSuggestionsList from "./FilterSuggestionList/FilterSuggestionsList"
import Roadmap from "./roadmap/Roadmap"
const Aside = (props) => {
  return (
    <div className={`bg-greyLight w-1/2 p-3 ${props.className} `}>
      <FilterSuggestionsList />
      <Roadmap />
    </div>
  )
}

export default Aside