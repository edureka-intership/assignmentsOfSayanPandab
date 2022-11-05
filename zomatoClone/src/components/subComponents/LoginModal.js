import React from "react";
import Modal from "react-bootstrap/Modal";
// import gmailIcon from "../images/NewFolder/gmail.png";
// import fbIcon from "../images/NewFolder/fb.png";
import SignIn from "./SignIn";

const LoginModal = (props) => {
  // console.log(props)
  const handleClose = () => {
    props.setShow(false);
    props.setModalHandle("");
  };

  return (
    <>
      <Modal size="sm" show={props.show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="cmnTxtClr">
              <b>
                {props.modalHandle === 0
                  ? "Login"
                  : props.modalHandle === 1
                  ? "Sign Up"
                  : null}
              </b>
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignIn setLoginDetails={props.setLoginDetails} loginDetails={props.loginDetails} handleClose={handleClose} />
          {/* <button
            type="button"
            className="btnInLoginModals cmnTxtClr w-100"
            onClick={props.handleShow}
          >
            <img
              className="loginModalPng"
              src={gmailIcon}
              alt="error"
              width="29.39px"
              height="22.04px"
            />
            Continue with Gmail
          </button> */}
          {/* <br /> <br /> */}
          {/* <button
            type="button"
            class="btnInLoginModals cmnTxtClr w-100"
            onClick={props.handleShow}
          >
            <img
              className="loginModalPng"
              src={fbIcon}
              alt="error"
              width="28.16px"
              height="28.16px"
            />
            Continue with Facebook
          </button> */}
          {/* <br />
          <br /> */}
          <hr className="hr" />
          <p className="loginQuery cmnTxtClr">
            {/* <span>Don't have account?</span>{" "} */}
            <span>
              {props.modalHandle === 0
                ? "Don't have account?"
                : props.modalHandle === 1
                ? "Already have an account?"
                : null}
            </span>{" "}
            <span
              onClick={() => {
                if (props.modalHandle === 0) {
                  props.setModalHandle(1);
                } else {
                  props.setModalHandle(0);
                }
              }}
              className="modalSignupBtn"
            >
              {props.modalHandle === 0
                ? "Sign Up"
                : props.modalHandle === 1
                ? "Login"
                : null}
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
