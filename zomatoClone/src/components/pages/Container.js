import React, { useEffect, useState } from 'react'
import { // npm i react-router-dom
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './Home';
import MealType from './MealType';
import RestaurentDetails from './RestaurentDetails';

const Container = () => {
    const [loginDetails, setLoginDetails] = useState("");

    const [mealTypeDetails, setMealTypeDetails] = useState("");
    const [selectLocation, setSelectLocation] = useState("");
    const [selectRestaurant, setSelectRestaurant] = useState("");

    // useEffect(() => {
    //     console.log(selectRestaurant)
    // }, [selectRestaurant])

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home setMealTypeDetails={setMealTypeDetails} setSelectLocation={setSelectLocation} setSelectRestaurant={setSelectRestaurant} loginDetails={loginDetails} setLoginDetails={setLoginDetails} />} ></Route>

                    <Route path='/meal' exact element={<MealType mealTypeDetails={mealTypeDetails} selectLocation={selectLocation} setSelectLocation={setSelectLocation} setSelectRestaurant={setSelectRestaurant} />} ></Route>

                    <Route path='/restaurentDetails/' exact element={<RestaurentDetails selectRestaurant={selectRestaurant} />} ></Route>

                    <Route path='/meal/restaurentDetails/:id' exact element={<RestaurentDetails selectRestaurant={selectRestaurant} />} ></Route>
                </Routes>
            </Router>
        </>
    )
}

export default Container