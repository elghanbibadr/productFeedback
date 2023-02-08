import React from 'react'
import { useState } from 'react'
// import 
import Aside from './Aside/Aside'
import Roadmap from './Aside/roadmap/Roadmap'
import FilterSuggestionsList from './Aside/FilterSuggestionList/FilterSuggestionsList'
import hamburgerMenu from "../../images/shared/mobile/icon-hamburger.svg"
const Header = (props) => {
  const [asideBarOpen,setAsideBarOpen] =useState(false);
  const handleMenuHamburgerClicked=()=>{
    setAsideBarOpen(prv => !prv);
  }
  return (
    <div className={`md:flex  md:p-6 lg:flex-col  ${props.className}`}>
    <header className='p-3   bg-mobile-pattern   bg-cover md:bg-tablette-pattern md:bg-contain  	md:rounded-xl lg:bg-desktop-pattern  lg:h-[130px]' >
        <div className='flex-row-between'>
            <div>
                <h2>Frontend Mentor</h2>
                <p className='text-white'>Feedback board</p>
            </div>
            <img onClick={handleMenuHamburgerClicked} className='cursor-pointer md:hidden' src={hamburgerMenu} alt='hamburger menu' />
        </div>
     </header>
       { asideBarOpen &&  <div className="overlay bg-overlay z-40 absolute right-0 left-0 bottom-0 top-[4.2rem] md:hidden">
         <Aside className='translate-x-full px-4 py-8 h-full z-30' /> 
       </div>}
       <div className='hidden md:flex justify-around md:w-3/4 lg:flex-col lg:w-full'>
        <FilterSuggestionsList />
        <Roadmap />
       </div>
    </div>
  )
}

export default Header