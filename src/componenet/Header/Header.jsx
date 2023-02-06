import React from 'react'
// import 
import hamburgerMenu from "../../images/shared/mobile/icon-hamburger.svg"
const Header = () => {
  return (
    <header className='p-3 bg-mobile-pattern bg-no-repeat bg-cover md:bg-tablette-pattern md:bg-contain	' >
        <div className='flex-row-between'>
            <div>
                <h2>Frontend Mentor</h2>
                <p className='text-white'>Feedback board</p>
            </div>
            <img className='cursor-pointer' src={hamburgerMenu} alt='hamburger menu' />
        </div>
     </header>
  )
}

export default Header