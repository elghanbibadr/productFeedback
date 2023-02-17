import React, { useContext } from 'react'
import { AppContext } from '../store/AppContext'
import Container from '../utils/Container'
const MainPage = () => {
    const {isUserSelectedAfeature}=useContext(AppContext)
    
  return (
    <Container>
    {!isUserSelectedAfeature &&  <HomePage/>}
    {isUserSelectedAfeature && <CommentPage/>}
     </Container>
  )
}

export default MainPage