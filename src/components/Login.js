import React from "react";
import "../styles/Login.css";

function Login({ event }) {
  return (
    <div className="login">
      <button onClick={event}>Sign In With Google</button>
    </div>
  );
}

export default Login;
