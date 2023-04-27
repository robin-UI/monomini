import React from 'react'
import Buttons from '../utils/Buttons/Buttons'

const Form = ({bgColor}) => {
    return (
        <div style={{backgroundColor: bgColor}} className="GetInTouch lg:p-10">
            <div className="Title mb-10">
                <h2 className='text-center font-bold text-[30px] sm:text-[60px] lg:text-[83px] mb-1'>Get In Touch.</h2>
                <p className='text-center font-normal text-[13px] sm:text-[18px] lg:text-[24px]'>We're Always Happy To Chat!</p>
            </div>
            <div className="InputField flex flex-col px-5 sm:px-32 lg:px-[18rem] mb-5">
                <input className='mb-3 md:mb-4 p-1 sm:p-3 lg:p-4 rounded-[7px] md:rounded-[11px] border-2 border-black' placeholder='Phone Number' type="text" />
                <input className='mb-3 md:mb-4 p-1 sm:p-3 lg:p-4 rounded-[7px] md:rounded-[11px] border-2 border-black' placeholder='Email Address' type="text" />
                <input className='mb-3 md:mb-4 p-1 sm:p-3 lg:p-4 rounded-[7px] md:rounded-[11px] border-2 border-black' placeholder='Name' type="text" />
                <textarea className='lg:mb-4 lg:p-4 rounded-md border-2 border-black' name="message" placeholder='Message'></textarea>
            </div>
            <div className='flex justify-center mb-10'>
                <Buttons marginTop={"0.5rem"} color={"#ffff"} bgColor={"#01253D"} text={"Submit"} borderRadius={"5px"} />
            </div>
        </div>
    )
}

export default Form