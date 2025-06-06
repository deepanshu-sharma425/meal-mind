'use client';
import '../globals.css'
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage({stylediff}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert('Signup successful!');
    };

    return (
        <div>
            <div style={stylediff} className="maindivlogin">
                <div className="loginpageinfo">
                    <div className="welcomemessage">
                        <h1>Create Account</h1>
                        <p>Sign up to get started with Meal Mind!</p>
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter your Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="pass">Password</label>
                        <input type="password" placeholder='Enter your Password' id='pass' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input type="password" placeholder='Confirm your Password' id='confirmPass' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="buttonsinin">
                        <button onClick={handleSubmit}><strong>Sign Up</strong></button>
                    </div>
                    <div className="signingoogle">
                        <img src="google.png" alt="Google" />
                        <p>Sign up with Google</p>
                    </div>
                    <div className="signinplease">
                        <Link href='/login'>Sign in Here</Link>
                    </div>
                </div>
                <div className="imagelogin">
                    {/* <img src="sideimagelogin.png" alt="Signup" /> */}
                    {/* write here backspacing  */}
                </div>
            </div>
        </div>
    );
}
