import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import FormInput from "./FormInput";
import { auth } from "../firebase/firebase";
import { connect } from "react-redux";
import { handleLogin } from "../redux/actions/userActions";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleInput = (e) => {
    const { value, name } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };
  useEffect(() => {
    setTimeout(() => setEmailError(""), 3000);
  }, [emailError]);
  useEffect(() => {
    setTimeout(() => setPasswordError(""), 3000);
  }, [passwordError]);

  const emailValidation = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  return (
    <form
      className='adminPage__form'
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(emailValidation(email));
        if (email && password) {
          await auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              const { uid } = userCredential.user;
              setEmail("");
              setPassword("");
              sessionStorage.setItem("user", JSON.stringify(uid));
              handleLogin(uid);
            })
            .catch((err) => {
              if (
                err.code === "auth/invalid-email" ||
                err.code === "auth/user-not-found"
              ) {
                setEmailError(err.message);
              } else if (err.code === "auth/wrong-password") {
                setPasswordError(err.message);
              }
            });
        }
      }}
    >
      <h3>Login</h3>
      <FormInput
        label='Email'
        value={email}
        name='email'
        type='text'
        err={emailError}
        func={(e) => handleInput(e)}
      />
      <FormInput
        label='Password'
        value={password}
        name='password'
        type='password'
        err={passwordError}
        func={(e) => handleInput(e)}
      />
      <Button variant='contained' color='primary' size='large' type='submit'>
        To The Panel
      </Button>
    </form>
  );
};

export default connect(null, { handleLogin })(Login);
