import React, { Fragment, useEffect} from "react";
import Navbar from "./Navbar";



const Main =()=> {
    return(
        <div>
            <Navbar />
            <h1 className = "main">
                well, hello there! This is the main component!
            </h1>
        </div>
    )
}

export default Main;