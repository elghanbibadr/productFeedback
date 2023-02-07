import React from 'react'
import { useState } from 'react'
// import 
import Aside from './Aside/Aside'
import hamburgerMenu from "../../images/shared/mobile/icon-hamburger.svg"
const Header = () => {
  const [asideBarOpen,setAsideBarOpen] =useState(false);
  const handleMenuHamburgerClicked=(e)=>{
    setAsideBarOpen(prv => !prv);
  }
  return (
    <>
    <header className='p-3   bg-mobile-pattern bg-no-repeat bg-cover md:bg-tablette-pattern md:bg-contain 	' >
        <div className='flex-row-between'>
            <div>
                <h2>Frontend Mentor</h2>
                <p className='text-white'>Feedback board</p>
            </div>
            <img onClick={handleMenuHamburgerClicked} className='cursor-pointer' src={hamburgerMenu} alt='hamburger menu' />
        </div>
     </header>
       { asideBarOpen &&  <div className="overlay bg-overlay absolute right-0 left-0 bottom-0 top-[4.2rem]">
         <Aside className='translate-x-full px-4 py-8 h-full' /> 
       </div>}
    </>
  )
}

export default Header