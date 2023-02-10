import React from 'react'
import Header from '../Header/Header'
import Suggestions from '../suggestions/Suggestions'
import SuggestionBar from '../Header/SuggestionBar/SuggestionBar'
const HomePage = () => {
  return (
    <>
    <Header className=' lg:w-3/4 xl:w-7/12 lg:p-0 lg:justify-self-center' />  
   <main className="lg:col-span-2">
    <SuggestionBar />
    <Suggestions />
    </main>
    </>
  )
}

export default HomePage