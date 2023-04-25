import React from 'react'
import Logo from '../../assets/react.svg'
import Buttons from '../utils/Buttons/Buttons'

const Navbar = () => {
  return (
    <header className='px-24 fixed w-full'>
        <nav className='flex py-4 justify-between items-center'>
            <div className="LogoImg">
                <img src={Logo} alt="appLogos" />
            </div>
            <ul className='flex'>
                <li className='mr-6 cursor-pointer'>Home</li>
                <li className='mr-6 cursor-pointer'>About</li>
                <li className='mr-6 cursor-pointer'>Product</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className="CallMeBtn">
                <Buttons bgColor={"#8b8986"} text={"Call Us"} borderRadius={"20px"} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar