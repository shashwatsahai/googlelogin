import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleLogin from "react-google-login";

var responseGoogle = function (response) {
  console.log(response);
};
function App() {
  return (
    <GoogleLogin
      clientId="427460338724-eb86ukueqnts33ba006bm6m4d6t3mmej.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default App;
