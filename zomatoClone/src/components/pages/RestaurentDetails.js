import React, { useEffect, useState } from "react";
import Navbar from "../subComponents/Navbar";
import res1 from "../images/NewFolder/res1.jpg";
import MenuList from "./MenuList";

const RestaurentDetails = (props) => {
  const [overviewAndContactBtnHandler, setOverviewAndContactBtnHandler] = useState(0);
  const [menuListVisibility, setMenuListVisibility] = useState(false);

  // useEffect(() => {
  //   console.log(overviewAndContactBtnHandler)
  // }, [overviewAndContactBtnHandler])

  return (
    <>
      <Navbar />
      <div className="mainContainerRestaurentDetails">
        <div>
          <img src={props.selectRestaurant.image} class="img-fluid" alt="error" />
          <h3 style={{ padding: "30px 0px" }}>
            <b>{props.selectRestaurant.name}</b>
          </h3>
          <button
            style={
              overviewAndContactBtnHandler === 0
                ? { borderBottom: "2px solid red" }
                : null
            }
            className="overviewAndContactBtn"
            onClick={() => setOverviewAndContactBtnHandler(0)}
          >
            <h5><b>Overview</b></h5>
          </button>
          <button
            style={
              overviewAndContactBtnHandler === 1
                ? { borderBottom: "2px solid red" }
                : null
            }
            className="overviewAndContactBtn"
            onClick={() => setOverviewAndContactBtnHandler(1)}
          >
            <h5><b>Contact</b></h5>
          </button>
          <button type="button" class="btn btn-danger onlineOrderBtn" onClick={() => setMenuListVisibility(true)}>
            Place Online Order
          </button>
          <MenuList menuListVisibility={menuListVisibility} setMenuListVisibility={setMenuListVisibility} />
          {/* <hr /> */}

          {overviewAndContactBtnHandler === 0 ? (
            <div>
              <h4 style={{ padding: "30px 10px" }}>
                <b>About this place</b>
              </h4>
              <h5 style={{ padding: "5px 10px" }}>
                <b>Cuisine</b>
              </h5>
              <h5 style={{ padding: "5px 10px" }}>{props.selectRestaurant.cuisines}</h5>
              <h5 style={{ padding: "10px 10px" }}>
                <b>Average Cost</b>
              </h5>
              <h5 style={{ padding: "5px 10px" }}>
                ₹{props.selectRestaurant.costForTwo} for two people (approx.)
              </h5>
            </div>
          ) : overviewAndContactBtnHandler === 1 ? (
            <div>
              <h5 style={{ padding: "30px 10px 0px" }}>Phone Number</h5>
              <h5 style={{ color: "red", padding: "5px 10px" }}>+ 91 {props.selectRestaurant.phNo}</h5>
              <h5 style={{ padding: "30px 10px 0px" }}><b>The Big Chill Cakery</b></h5>
              <h5 style={{ padding: "5px 10px" }}>{props.selectRestaurant.place}</h5>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RestaurentDetails;
