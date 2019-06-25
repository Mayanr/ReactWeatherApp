import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import openWeatherMap from "../api/openWeatherMap"


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
            // loc: "Miami",
            // temp: 88
      }
    };
    handleSearch=(loc)=> {
        var that = this;

        this.setState({isLoading: true});
        openWeatherMap.getTemp(loc).then(temp =>{
            that.setState({
                loc: loc,
                temp: temp,
                isLoading: false
            });
        }).catch (errorMessage =>{
            alert(errorMessage);
            that.setState({
                isLoading: false
            });
        })
        // this.setState({
        //     loc: loc,
        //     temp: 23
        // })
    };


    render(){
        var { isLoading, loc, temp } = this.state;

        const renderMessage=()=>{
            if(isLoading){
                return <h3> Fetching weather...</h3>;
            } else if(temp && loc){
                return <WeatherMessage temp={temp} loc={loc}/>;
            }
        }

        return (
            <Fragment>
                <h3> Weather Component</h3>
                <section className = "container">
                    <WeatherForm onSearch={this.handleSearch}/>
                    {renderMessage()}
                    {/* <WeatherMessage temp={temp} loc={loc}/> */}
                </section>
            </Fragment>
        )
    }
}

export default Weather;