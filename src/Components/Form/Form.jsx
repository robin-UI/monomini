
import React, { useState } from 'react'
import Buttons from '../utils/Buttons/Buttons'
import InputForm from '../utils/Input/InputForm';

const Form = ({ bgColor }) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        console.log();
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div style={{ backgroundColor: bgColor }} className="GetInTouch lg:p-10">
            <div className="Title mb-10">
                <h2 className='text-center font-bold text-[30px] sm:text-[60px] lg:text-[83px] mb-1'>Get In Touch.</h2>
                <p className='text-center font-normal text-[13px] sm:text-[18px] lg:text-[24px]'>We're Always Happy To Chat!</p>
            </div>
            <div className="InputField flex flex-col px-5 sm:px-32 lg:px-[18rem] mb-5">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    {inputs.map((input) => (
                        <InputForm
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button>Submit</button>
                </form>
                {/* <input  placeholder='Phone Number' type="text" />
                <input className='mb-3 md:mb-4 p-1 sm:p-3 lg:p-4 rounded-[7px] md:rounded-[11px] border-2 border-black' placeholder='Email Address' type="text" />
                <input className='mb-3 md:mb-4 p-1 sm:p-3 lg:p-4 rounded-[7px] md:rounded-[11px] border-2 border-black' placeholder='Name' type="text" />
                <textarea className='lg:mb-4 lg:p-4 rounded-md border-2 border-black' name="message" placeholder='Message'></textarea> */}
            </div>
            <div className='flex justify-center mb-10'>
                {/* <Buttons marginTop={"0.5rem"} color={"#ffff"} bgColor={"#01253D"} text={"Submit"} borderRadius={"5px"} /> */}
            </div>
        </div>
    )
}

export default Form