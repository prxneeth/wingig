import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setError('');
                console.log('User profile:', data.user);
                console.log('User token:', data.jwt);
                navigate('/authh/login/page');
            } else {
                setError(data?.error?.message || 'Failed to register. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('Error registering. Please check your API and try again.');
        }
    };

    return (
        <div className='bg-white flex flex-row justify-center items-center py-10 w-lvw h-lvh'>
            <div className='w-1/3 hidden md:block'>
                <img src="/registrationPic1.png" alt='' width={450} height={430} />
            </div>
            <div className='md:w-2/6 sm:w-lvw bg-white flex flex-col items-center py-3 md:h-5/6 sm:h-1/2 shadow-2xl'>
                <div className='flex flex-row justify-between w-3/4 px-3 py-1 mb-2'>
                    <Link to="/"><img src="/WinGigLogo.png" alt='' width={100} height={50} /></Link>
                    <Link to='/authh/login/page'><i className="fa-solid fa-xmark fa-2x"></i></Link>
                </div>
                <div className='md:w-3/4 px-3'>
                    <h3 className='text-center'>Registration</h3>
                    {error && <p className='text-red-500'>{error}</p>}
                    {success && <p className='text-green-500'>Registration successful!</p>}
                    <form onSubmit={registerUser}>
                        <div className='flex flex-col md:items-center'>
                            <div className='w-3/4 my-1 py-1'>
                                <p className='m-0 p-1'>Username:</p>
                                <input
                                    type='text'
                                    placeholder='Enter Username'
                                    className='w-72 h-8 p-1 focus:outline-none'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='w-3/4 my-1 py-1'>
                                <p className='m-0 p-1'>Email:</p>
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    className='w-72 h-8 p-1 focus:outline-none'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='w-3/4 my-1 py-1'>
                                <p className='m-0 p-1'>Password:</p>
                                <input
                                    type='password'
                                    placeholder='Enter Password'
                                    className='w-72 h-8 p-1 focus:outline-none'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button
                            className='my-1 p-2 h-9 w-72 lg:ml-9 text-white bg-blue-400 hover:text-violet-900 hover:bg-white border-none
                                hover:border hover:border-solid hover:border-gray-400 rounded-lg cursor-pointer'
                            type='submit'
                        >
                            Register
                        </button>
                    </form>
                    <p className='m-0 p-1 text-sm'>
                        Already Registered? <Link to='/authh/login/page' className='text-blue-600'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
