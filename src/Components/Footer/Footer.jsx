import React from 'react'

const Footer = () => {
  return (
    <div className="w-full" >
            <div className="bg-[#01253D] text-white sm:flex sm:justify-between px-4 sm:py-6 sm:px-6 md:py-10 md:px-10 lg:py-15 lg:px-15">
                <div className="LeftSide flex flex-col justify-between">
                    <div className="TopSec mb-2">
                        <div className="logo mb-5">
                            {/* <img src={Logo} alt="" /> */}
                        </div>
                        <p className="text-[#B8E0F5] font-[300] text-center sm:text-left sm:w-[20rem] md:w-[23rem] md:leading-[1.75rem]" >Quality Building Materials At Wholesale Prices Your One-Stop-Shop For Construction Needs.</p>
                    </div>
                    <div className="BottomSec">
                        <h1 className="mb-4 text-center sm:text-left" >Follow Us On</h1>
                        <div className="SocialIcons flex">
                            {/* <img className="mr-4" src={Facebook} alt="Facebook" />
                            <img className="mr-4" src={Instagram} alt="Instagram" />
                            <img className="mr-4" src={Twitter} alt="Twitter" />
                            <img src={Youtube} alt="Youtube" /> */}
                        </div>
                    </div>
                </div>

                <div className="RightSide">
                    <div className="GotoTop flex  flex-row-reverse">
                        {/* <img src={GoTo} alt="GotoTop" className="w-5rem mb-4" /> */}
                    </div>
                    <div className="Addresse's">
                        <h4 className="sm:text-end text-center mb-2">Contact Us</h4>
                        <p className="text-[#B8E0F5] mb-2 text-center sm:text-end sm:w-[13rem] leading-[1.75rem]" >Second Floor, Building No 21 Zone 55 Muaither Street 900 Umm Taqa, Qatar</p>
                        <h5 className="sm:text-end text-center mb-2">+974 3131 7535</h5>
                        <h5 className="sm:text-end text-center mb-2">+974 3131 7545</h5>
                        <h4 className="sm:text-end text-center text-[#0099FF] pb-2 md:mb-2" >iitqtr@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div className="CopyRightSection w-full bg-[#021E30] py-4">
                <h1 className="font-light text-[#B8E0F5] text-base sm:text-lg text-center">© 2023 Indora, All Right Reserved</h1>
            </div>
        </div>
  )
}

export default Footer