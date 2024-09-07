import React from 'react'
import './Sign_up.css'
import { assets } from '../../assets/Asset.js'
function Sign_up() {
    return (
        <div className='SignUp'>

            <form className='SignUpContainer'>
                <div className="title">
                    <b>Get Started</b>
                </div>
                <div className="Container">
                    <div className="signup_left">
                        <p>Welcome to our app, Let's create your account :</p>
                        <hr />
                        <div className='signup_inputs'>
                            <p>Email :</p>
                            <input type="email" placeholder='Emai' required />
                            <p>Password :</p>
                            <input type="text" placeholder='Password' required />
                            <div className="signup-condition">
                                <input type="checkbox" required />
                                <p>by continuing , I agree to the terms of use & privacy policy.</p>
                            </div>
                            <button>Sign Up</button>
                        </div>
                    </div>
                    <div className="signup_right">
                        <img src={assets.test} alt="" />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Sign_up