import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

class WeatherForm extends Component {
    constructor(props) {
        super(props)

    this.state = {
        loc: ''
      }
    }

    handleChange = event => {
        const { name, value } = event.target
    
        this.setState({
        [name]: value,
        })
    }
    
    onFormSubmit = e => {
        e.preventDefault();
        if(this.state.loc.length > 0){
            this.props.onSearch(this.state.loc);
            console.log(this.state.loc);
            this.setState({
                loc: ''
            })
        } 
    }
    render(){
        const { loc } = this.state;

        return(
            <div>
                <form onSubmit= { this.onFormSubmit}>
                    <input type="text" id="loc" name="loc" value={loc}onChange={this.handleChange}/>
                    <br />
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
}

export default WeatherForm;