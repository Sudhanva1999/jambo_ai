 /* eslint-disable */ 

import React from "react";

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
    <div>
      <h1>Welcome to Consulting Ninja!</h1>
      <h3>Google OAuth!</h3>
      <p>
        Visit{" "}
        to see more great videos!
      </p>

      <button className="btn-auth" type="button" onClick={() => auth()}>
        <p>Sign in with Google Here</p>
        <img className="btn-auth-img" alt="google sign in" />
      </button>
    </div>
  );
}

export default Login;
