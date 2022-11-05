import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const SignOut = (props) => {
  const clientId =
    "575246396982-kksv7k0fve44sb315f38esq0gj8lch8k.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log("success:", res);
    props.setLoginDetails("");
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };

  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  
  return (
    <>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      />
    </>
  );
};

export default SignOut;
