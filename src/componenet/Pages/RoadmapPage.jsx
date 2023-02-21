import React from 'react'
import Container from '../utils/Container'
import RoadpMapHeader from '../roadmap/RoadpMapHeader'
import RoadMapFeatures from '../roadmap/RoadMapFeatures'
const RoadmapPage = () => {
  return (
    <Container className=' lg:px-20'>
      <RoadpMapHeader/>
      <RoadMapFeatures />
    </Container>
  )
}

export default RoadmapPage
