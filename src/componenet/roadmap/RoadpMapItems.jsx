import React from 'react'
import SuggestionCard from '../suggestions/SuggestionCard'
const RoadpMapItems = (props) => {
        return (
          <div className={props.className}>
          <h1 className='text-xl md:text-2xl'>{props.status}</h1>
          <p className='mb-6'>{props.title}</p>
          {props.roadmapItem.map(({ id, description,category, title, upvotes, comments }, index)=>{
              return   <SuggestionCard isSuggestionOfRoadmapPage={true}  key={index} id={id} upvotes={upvotes} category={category} commentsLength={comments ? comments.length : 0} description={description} title={title}   />
              
          })}
          </div>
        )
    
}

export default RoadpMapItems