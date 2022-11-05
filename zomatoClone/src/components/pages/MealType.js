import React from "react";
import Navbar from "../subComponents/Navbar";
import { restaurantList } from "../../components/subComponents/fkData";
import { CuisineList } from "../../components/subComponents/fkData";
import { CostForTwoList } from "../../components/subComponents/fkData";
import { SortList } from "../../components/subComponents/fkData";
import { Link } from "react-router-dom";
// import breakfast from "../images/NewFolder/brkfst.PNG";
// import lunch from "../images/NewFolder/lnch.PNG";
// import snacks from "../images/NewFolder/sncks.jpg";
// import dinner from "../images/NewFolder/dnr.PNG";
// import drink from "../images/NewFolder/drnk.PNG";
// import nightlife from "../images/NewFolder/ntlf.jpg";

const MealType = (props) => {
    // console.log(props)

    const srchRestaurant1 = (e) => {
        // console.log(e)
        // console.log(e.target.value)
        // console.log(e.target.selectedIndex)
        const res = restaurantList.find((ml) => ml.id == e);
        // console.log(res);
        props.setSelectRestaurant(res);
    }

    const srchlocation = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.selectedIndex)
        const loc = restaurantList.filter((ml) => ml.location == e.target.value);
        // console.log(loc)
        props.setSelectLocation(loc);
    }

    return (
        <>
            <Navbar />
            <div className="mainContainerMealType">
                <div>
                    <h3 class="mealTypeHeading">
                        {props.selectLocation != "" ?
                            <b>{`${props.mealTypeDetails.mealName} places in ${props.selectLocation[0].location}`}</b> :
                            <b>{`${props.mealTypeDetails.mealName}`}</b>
                        }
                    </h3>
                    <br />
                    <div className="filterAndResDetlsList">
                        <div className="col-md-3 mealTypeFilterDiv">
                            <h5 className="mealTypeFilter">
                                <b>Filters</b>
                            </h5>{" "}
                            <br />
                            <h6 className="mealSelectLocation">
                                <b>Select Location</b>
                            </h6>
                            <select class="form-select" id="inputGroupSelect01" onChange={(e) => srchlocation(e)}>
                                <option selected>Select Location</option>
                                {restaurantList.map((itm) => (
                                    <option value={itm.value}>{itm.location}</option>
                                ))}
                            </select>{" "}
                            <br />
                            <h6 className="mealSelectLocation">
                                <b>Cuisine</b>
                            </h6>
                            {CuisineList.map((itm) => (
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {itm.label}
                                    </label>
                                </div>
                            ))}
                            <br />
                            <h6 className="mealSelectLocation">
                                <b>Cost for Two</b>
                            </h6>
                            {CostForTwoList.map((itm) => (
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {itm.label}
                                    </label>
                                </div>
                            ))}
                            <br />
                            <h6 className="mealSelectLocation">
                                <b>Sort</b>
                            </h6>
                            {SortList.map((itm) => (
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {itm.label}
                                    </label>
                                </div>
                            ))}
                            <br />
                        </div>
                        <div className="col-md-9 resDetlsList">
                            {props.selectLocation != "" ? props.selectLocation.map((itm) => (
                                <div class="card mb-3 resDetlsListCard" key={itm.id} onClick={(e) => srchRestaurant1(itm.id)}>
                                    <div class="row g-0">
                                        <div className="col-md-3">
                                            <Link to={`/meal/restaurentDetails/${itm.id}`} style={{ textDecoration: "none", color: "white" }} >
                                                <img src={itm.image} class="img-fluid" alt="error" />
                                            </Link>
                                        </div>
                                        <div className="col-md-9">
                                            <Link to={`/meal/restaurentDetails/${itm.id}`} style={{ textDecoration: "none", color: "white" }} >
                                                <h2 class="resDetlsListCardTitle">{itm.name}</h2>
                                                <h6 class="resDetlsListCardRating">
                                                    <b>Rating: {itm.rating}</b>
                                                </h6>
                                                <h6 class="resDetlsListCardAddress">{itm.place}, {itm.location}</h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row g-0">
                                        <div className="col-md-3">
                                            <h6 class="resDetlsListCardCuisines">CUISINES:</h6>
                                            <h6 class="resDetlsListCardCost">COST FOR TWO:</h6>
                                        </div>
                                        <div className="col-md-9">
                                            <h6 class="resDetlsListCardCuisinesDetails">{itm.cuisines}</h6>
                                            <h6 class="resDetlsListCardCostDetails">₹ {itm.costForTwo}</h6>
                                        </div>
                                    </div>
                                </div>
                            )) :
                                restaurantList.map((itm) => (
                                    <div class="card mb-3 resDetlsListCard" key={itm.id} onClick={(e) => srchRestaurant1(itm.id)} >
                                        <div class="row g-0">
                                            <div className="col-md-3">
                                                <Link to={`/meal/restaurentDetails/${itm.id}`} style={{ textDecoration: "none", color: "white" }} >
                                                    <img src={itm.image} class="img-fluid" alt="error" />
                                                </Link>
                                            </div>
                                            <div className="col-md-9">
                                                <Link to={`/meal/restaurentDetails/${itm.id}`} style={{ textDecoration: "none", color: "white" }} >
                                                    <h2 class="resDetlsListCardTitle">{itm.name}</h2>
                                                    <h6 class="resDetlsListCardRating">
                                                        <b>Rating: {itm.rating}</b>
                                                    </h6>
                                                    <h6 class="resDetlsListCardAddress">{itm.place}, {itm.location}</h6>
                                                </Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row g-0">
                                            <div className="col-md-3">
                                                <h6 class="resDetlsListCardCuisines">CUISINES:</h6>
                                                <h6 class="resDetlsListCardCost">COST FOR TWO:</h6>
                                            </div>
                                            <div className="col-md-9">
                                                <h6 class="resDetlsListCardCuisinesDetails">{itm.cuisines}</h6>
                                                <h6 class="resDetlsListCardCostDetails">₹ {itm.costForTwo}</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MealType;
