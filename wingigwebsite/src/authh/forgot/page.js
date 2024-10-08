// "use client";
// import { useState } from "react";

// import Link from "next/link";
// import '/styles/global.css';
import { Link } from "react-router-dom";
export default function Forgot() {

    return (
        <div className="flex justify-center items-center py-36">
            <div className="flex flex-col justify-center items-center md:w-1/2 sm:w-2/3 p-5"> {/* border border-solid border-red-500 */}
                <div className="md:w-3/4 sm:w-2/3 text-center  my-3">
                    <h2 className="p-1 m-0 text-4xl tracking-wide">Reset Password</h2>
                    <p className="m-0 p-0 text-sm">Dont have an Account? <Link to="/authh/register/page" className="text-blue-500 hover:underline">Sign Up</Link></p>
                </div>
                <div className="md:w-2/4 flex flex-col justify-center items-center ">
                    <div className="w-full pb-2 my-2 md:pl-10">
                        <p className="p-1 m-0">Enter Your Email Id:</p>  {/* md:pr-28 */}
                        <input type="email" placeholder="Email Id" className="h-9 md:w-4/5 p-1 border-none focus:outline rounded-sm" />
                    </div>
                    <Link to='/authh/pws-change/page'>
                        <button className=" p-2 w-full my-2 h-9 bg-blue-900 text-white border border-solid border-gray-400 hover:bg-white hover:text-violet-800 duration-200 rounded-lg">Submit</button>
                    </Link>
                </div>

                <p>when mail is existed .. add PopUp or loading to nextpage Like an validation</p>
            </div>
        </div>
    );
}
