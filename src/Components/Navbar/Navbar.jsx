import React, { useState } from 'react'
import Logo from '../../assets/react.svg'
import Buttons from '../utils/Buttons/Buttons'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false);

    return (
        <header className='px-24 fixed w-full z-50'>
            <nav className='flex py-4 justify-between items-center'>
                <div className="Logo">
                    <img src={Logo} alt="This is logo" />
                    <h1>LOGO</h1>
                </div>

                <ul className='hidden md:flex text-[#3B5774]'>
                    <li className='mr-6'><Link to="hero" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500} href="/">Home</Link></li>
                    <li className='mr-6'><Link to="about" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500} href="#about">About Us</Link></li>
                    <li className='mr-6'><Link to="products" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500} href="#product">Products</Link></li>
                    <li className=''><Link to="contactus" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500} href="#contact">Contact Us</Link></li>
                </ul>

                <div className="CallUsBTN">
                    <Buttons bgColor={"#01253D"} color={"#ffff"} text={"Call Us"} borderRadius={"20px"} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar