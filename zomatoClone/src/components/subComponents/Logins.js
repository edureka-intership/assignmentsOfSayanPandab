import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignOut from "./SignOut";

const Logins = (props) => {
  const [show, setShow] = useState(false);
  const [modalHandle, setModalHandle] = useState("");

  const handleShow = () => {
    setShow(true);
    setModalHandle(0);
  };
  const handleShow1 = () => {
    setShow(true);
    setModalHandle(1);
  };

  return (
    <>
      <form class="d-flex">
        {props.loginDetails === "" ? (
          <div>
            <button type="button" className="loginBtn" onClick={handleShow}>
              Login
            </button>
            <button type="button" className="loginBtn" onClick={handleShow1}>
              Create an account
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <img src={props.loginDetails.imageUrl} alt="error" width="43px" style={{ borderRadius: "50%" }} /> */}
            <h6 style={{ color: "white" }}>{props.loginDetails.email}</h6>
            <SignOut setLoginDetails={props.setLoginDetails} />
          </div>
        )}
      </form>
      <LoginModal
        show={show}
        setShow={setShow}
        handleShow={handleShow}
        modalHandle={modalHandle}
        setModalHandle={setModalHandle}
        setLoginDetails={props.setLoginDetails}
        loginDetails={props.loginDetails}
      />
    </>
  );
};

export default Logins;
