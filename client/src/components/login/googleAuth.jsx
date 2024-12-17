 /* eslint-disable */ 

import React from "react";
import "./googleAuth.css";
import TransparentLogo from "../../resources/images/global/transparent_logo.png"

function navigate(url) {
  window.location.href = url;
}
async function auth() {
  const response = await fetch("http://127.0.0.1:8000/request", {
    method: "post",
  });

  const data = await response.json();
  console.log(data);
  navigate(data.url);
}

function Login() {
  return (
    <div className="bg-secondary loginForm  flex flex-col addShadow  justify-center items-center">
        <img src={TransparentLogo} className="loginLogo"/>
        <input className="inpField " id="username" placeholder="Username" type="text" />
        <input className="inpField " id="password" placeholder="Password" type="password" />

        <button className="btn-auth bg-accent addShadow signInWithGoogle" type="button" onClick={() => auth()}>
        <img className="googleImg" width="20" height="20" src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo"/>  Sign In With Google
      </button>
    </div>
  );
}

export default Login;
