'use client';
import '../globals.css'

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage({stylediff}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        
        if (email === storedEmail && password === storedPassword) {

            if (rememberMe) {
              
                localStorage.setItem('rememberMe', 'true');
            }
            
            setEmail('');
            setPassword('');
            setRememberMe(false);
            alert('Login successful!');
     
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div>
            <div style={stylediff} className="maindivlogin">
                <div className="loginpageinfo">
                    <div className="welcomemessage">
                        <h1>Welcome Back</h1>
                        <p>Log in to continue with Meal Mind!</p>
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter your Email' 
                            id='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="pass">Password</label>
                        <input 
                            type="password" 
                            placeholder='Enter your Password' 
                            id='pass' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="rememberForgot">
                        <div className="rememberMe">
                            <input 
                                type="checkbox" 
                                id="rememberMe" 
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <Link href="/forgot-password" className="forgotPassword">Forgot password?</Link>
                    </div>
                    <div className="buttonsinin">
                        <button onClick={handleSubmit}><strong>Log In</strong></button>
                    </div>
                    <div className="signingoogle">
                        <img src="/google.png" alt="Google" />
                        <p>Log in with Google</p>
                    </div>
                    <div className="signinplease">
                        <p>Don't have an account? <Link href='/signup'>Sign up Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}