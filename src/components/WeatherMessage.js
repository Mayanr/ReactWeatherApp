import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const WeatherMessage =props=> {
    return <h4>It is {props.temp} degrees in {props.loc}</h4>
}

export default WeatherMessage;