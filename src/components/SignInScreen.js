import React from 'react'
import './SignInScreen.css'

function SignInScreen() {
    return (
        <div className="SignInScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Sign In</button>
                <h4>
                    <span className="SignInScreen_gray">New to Netflix?</span>
                    <span className="SignInScreen_link">Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen
