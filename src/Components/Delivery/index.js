import React, {useState, useEffect} from "react";

import {useSelector} from "react-redux";
//Components
import DeliveryCarousal from "./DeliveryCarousal";
import { useState } from "react";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useselector(
      (globalStore) => globalStore.restaurant.restaurants
    );

    useEffect(()=>{
        setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);
    return (
        <>
        <DeliveryCarousal />
        </>
    );
};

export default Delivery;