import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

const SignInScreen = ({ register, signIn, email }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const registerEmailRef = useRef(null);
  const registerPasswordRef = useRef(null);

  const onRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        registerEmailRef.current.value,
        registerPasswordRef.current.value
      )
      .then((authUser) => {
        console.log("authUser", authUser);
      })
      .catch((error) => alert(error.message));
  };

  const onSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="SignInScreen">
      <form>
        {signIn && !register ? (
          <>
            <h1>Sign In</h1>
            <input
              defaultValue={email}
              ref={emailRef}
              type="email"
              placeholder="Email"
            />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={onSignIn}>
              Sign In
            </button>
          </>
        ) : (
          <>
            <h1>Register</h1>
            <input
              defaultValue={email}
              ref={registerEmailRef}
              type="email"
              placeholder="Email"
            />
            <input
              ref={registerPasswordRef}
              type="password"
              placeholder="Password"
            />
            <button type="submit" onClick={onRegister}>
              Register
            </button>
          </>
        )}

        {/* <h4> */}
        {/* <span className="SignInScreen_gray">New to Netflix?</span> */}
        {/* <span className="SignInScreen_link" onClick={register}>Sign Up now.</span> */}
        {/* </h4> */}
      </form>
    </div>
  );
};

export default SignInScreen;
