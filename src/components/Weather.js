import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import openWeatherMap from "../api/openWeatherMap"


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loc: "Miami",
            temp: 88
      }
    };
    handleSearch=(loc)=> {
        var that = this;
        // alert(loc);
        // console.log("a message from handleSearch", loc);
        console.log(openWeatherMap.getTemp(loc));
        openWeatherMap.getTemp(loc).then(temp =>{
            that.setState({
                loc: loc,
                temp: temp
            });
        }, (errorMessage =>{
            alert(errorMessage);
        }))
        // this.setState({
        //     loc: loc,
        //     temp: 23
        // })
    };


    render(){
        var { loc, temp } = this.state;
        return (
            <Fragment>
                <h3> Weather Component</h3>
                <section className = "container">
                    <WeatherForm onSearch={this.handleSearch}/>
                    <WeatherMessage temp={temp} loc={loc}/>
                </section>
            </Fragment>
        )
    }
}

export default Weather;