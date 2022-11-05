import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const SignIn = (props) => {
  const clientId =
    "575246396982-kksv7k0fve44sb315f38esq0gj8lch8k.apps.googleusercontent.com";

  const refreshTokenSetup = (res1) => {
    let refreshTiming = (res1.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    const refreshToken = async () => {
      const newAuthRes = await res1.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log(newAuthRes);
      console.log(newAuthRes.id_token);
      setTimeout(refreshToken, refreshTiming);
    };
    setTimeout(refreshToken, refreshTiming);
  };

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj); // get full user details
    props.handleClose();
    props.setLoginDetails(res.profileObj);
    refreshTokenSetup(res);
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
      <GoogleLogin
        className="signInBtn"
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
};

export default SignIn;
