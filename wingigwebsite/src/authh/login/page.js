import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./jobseeker-login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password: password
            });

            console.log('Login response:', response.data);

            if (response.data.jwt) {
                localStorage.setItem('token', response.data.jwt);
                navigate('/');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Error during login:', err);

            if (err.response) {
                console.log('Error response:', err.response);
                setError(err.response.data?.error?.message || 'Invalid credentials. Please try again.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };


    return (
        <div className="login-screen">
            <div className="login-image">
                <img src="/loginPic1.png" alt="Login Image" width={500} height={300} className='image' />
            </div>
            <hr />
            <div className="login-form">
                <div className="login-credits">
                    <h2>Recruiter Login</h2>
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div id="login-btns">
                            <p className='p-0 m-0 py-1'>Email Id:</p>
                            <div className="log-fields">
                                <i className="fa-solid fa-envelope"></i>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <p className='p-0 m-0 py-1'>Password:</p>
                            <div className="log-fields">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={PasswordVisibility}
                                    className="!w-5 h-8 flex items-center justify-center border-none bg-transparent cursor-pointer"
                                >
                                    {showPassword ? <i className="fa-solid fa-eye float-right" /> : <i className="fa-solid fa-eye-slash float-right" />}
                                </button>
                            </div>
                        </div>
                        <div className='login-check-forgot'>
                            <div id='log-check-fg'>
                                <Link to='/authh/register/page'>Don't have an account? Sign up</Link>
                            </div>
                            <div id='log-check-fg'>
                                <Link to='/authh/forgot/page'><b>Forgot Password?</b></Link>
                            </div>
                        </div>
                        <div className='log-signup'>
                            <button type='submit'>Login</button>
                        </div>
                        <p id='text-or'>Or</p>
                        <div className="sign-google">
                            <Link to="https://www.google.com">
                                <img src='/googlelodo.png' alt='' width={20} height={20} className='sign-img' />
                                <span>Sign In With Google</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}