import React, { useEffect, useState } from "react";
import eduLogo from "../images/NewFolder/eduLogo.png";
import { FaSearch } from "react-icons/fa";
import Logins from "../subComponents/Logins";
import { mealList } from "../../components/subComponents/fkData";
import { restaurantList } from "../../components/subComponents/fkData";
import { Link } from "react-router-dom";
import MealType from "./MealType";
// meal list
// import breakfast from "../images/NewFolder/brkfst.PNG";
// import lunch from "../images/NewFolder/lnch.PNG";
// import snacks from "../images/NewFolder/sncks.jpg";
// import dinner from "../images/NewFolder/dnr.PNG";
// import drink from "../images/NewFolder/drnk.PNG";
// import nightlife from "../images/NewFolder/ntlf.jpg";

// import ModalComponent from "../subComponents/Modal";
// import Select from 'react-select'
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import homepagemainpic from "../images/homepagemainpic.jpg";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import AsyncSelect from "react-select/async";
// import Select from "react-select";

// import axios from "axios";
// import { Country, State, City } from "country-state-city";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import ordrOnln from "../images/ordrOnln.jpg";
// import dining from "../images/dining.jpg";
// import ngtLife from "../images/ngtLife.jpg";

const Home = (props) => {
  const mealType = (e) => {
    const mealDtls = mealList.find((ml) => ml.id == e)
    // console.log(mealDtls)
    props.setMealTypeDetails(mealDtls);
  }
  const srchlocation = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.selectedIndex)
    const loc = restaurantList.filter((ml) => ml.location == e.target.value);
    // console.log(loc)
    props.setSelectLocation(loc);
  }
  const srchRestaurant = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.selectedIndex)
    const res = restaurantList.find((ml) => ml.name == e.target.value);
    // console.log(res)
    props.setSelectRestaurant(res);
  }

  return (
    <>
      <div className="homepagemainpic">
        {/* <div> */}
        <nav class="navbar navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand"></a>
            <Logins setLoginDetails={props.setLoginDetails} loginDetails={props.loginDetails}  />
          </div>
        </nav>
        <div class="logo_search">
          <img
            src={eduLogo}
            alt="error"
            width="130px"
            height="130px"
          />
          <p>Find the best restaurants, cafes, and bars</p>
          <div className="srchBars">
            <div class="input-group location">
              <select class="form-select" id="inputGroupSelect01" onChange={(e) => srchlocation(e)}>
                <option selected>Please type a location</option>
                {restaurantList.map((itm) => (
                  <option key={itm.id} value={itm.value}>{itm.location}</option>
                ))}
              </select>
            </div>
            {/* <FaSearch className="srchicon" /> */}
            <div class="input-group restaurant">
              <span class="input-group-text" id="basic-addon1">
                <Link to={`/restaurentDetails/`} style={{ textDecoration: "none" }} >
                  Search
                </Link>
              </span>
              <select class="form-select" id="inputGroupSelect01" onChange={(e) => srchRestaurant(e)}>
                <option selected>Search for restaurants</option>
                {restaurantList.map((itm) => (
                  <option key={itm.id} value={itm.value}>
                    {itm.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* meal list */}
      <section className="mainContainerMealList">
        <div class="heading">
          <h3>
            <b>Quick Searches</b>
          </h3>
          <h5>Discover restaurants by type of meal</h5>
          <br /> <br />
          <div class="row row-cols-1 row-cols-md-3 g-4 mealList">
            {mealList.map((itm) => (
              <Link to={`/meal`} style={{ textDecoration: "none", color: "white" }} >
                <div class="card mb-3 mealListCard" key={itm.id} onClick={(e) => mealType(itm.id)}>
                  <div class="row g-0">
                    <div className="col-md-6">
                      <img
                        src={itm.image}
                        class="img-fluid rounded-start"
                        alt="error"
                      />
                    </div>
                    <div className="col-md-6">
                      <div class="card-body">
                        <p class="card-title mealListCardTitle">{itm.mealName}</p>
                        <p class="card-text mealListCardText">{itm.mealDetail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
