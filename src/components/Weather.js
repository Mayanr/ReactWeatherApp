import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loc: "Miami",
            temp: 88
      }
    };
    handleSearch=(loc)=> {
        alert(loc);
        console.log("a message from handleSearch", loc);
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