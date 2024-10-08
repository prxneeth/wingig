// "use client";
import { useState } from 'react';
// import Link from "next/link";
// import "/styles/global.css";
// import { faL } from '@fortawesome/free-solid-svg-icons';

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const PasswordConfirm = () => {
        setConfirmPassword(!confirmPassword);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center  md:w-2/3 p-3 my-5'>
                <h2 className='text-3xl'>Create New Password</h2>
                <p className='m-0 p-0'>Your new password must be different from previous used passwords.</p>
                <div className='w-full md:w-1/2 md:px-3 my-5 md:pl-24'>
                    <p className='p-0 my-1 font-semibold'>New Password</p>
                    <div className='flex flex-row relative w-full'>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter password"
                            className='w-3/4 h-9 focus:outline-none pr-9'
                        />
                        <button
                            type="button"
                            onClick={PasswordVisibility}
                            className=" -translate-x-7 pt-1 !w-5 h-8 flex items-center justify-center border-none bg-transparent cursor-pointer"
                        >
                            {showPassword ? <i class="fa-solid fa-eye float-right" /> : <i class="fa-solid fa-eye-slash float-right" />}
                        </button>
                    </div>
                    <p className='p-0 my-1 text-xs'>Must be at least 8 characters.</p>
                    <div className='my-2'>
                        <p className='p-0 my-1 font-semibold'>Confirm Password</p>
                        <div className='flex flex-row relative w-full'>
                            <input
                                type={confirmPassword ? "text" : "password"}
                                id="password"
                                placeholder="Confirm password"
                                className='w-3/4 h-9 focus:outline-none pr-9'
                            />
                            <button
                                type="button"
                                onClick={PasswordConfirm}
                                className=" -translate-x-7 pt-1 !w-5 h-8 flex items-center justify-center border-none bg-transparent cursor-pointer"
                            >
                                {confirmPassword ? <i class="fa-solid fa-eye float-right" /> : <i class="fa-solid fa-eye-slash float-right" />}
                            </button>
                        </div>
                        <p className='p-0 my-1 text-xs'>Both passwords must match.</p>
                    </div>
                    <div className='my-2 md:ml-9'>
                        <button className='w-1/2 md:w-3/5 h-9 bg-[#083344] text-white border-none hover:border hover:border-solid border-gray-400 rounded-md hover:text-[#083344] hover:bg-white cursor-pointer'>
                            Reset Password</button>  {/*  style={{backgroundColor: '#083344'}} */}
                    </div>
                </div>
            </div>
        </div>
    );
}