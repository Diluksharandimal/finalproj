import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Attract from "./Attract";
import Features from "./Features";
import Campaigns from "./Campaigns";
import Payments from "./Payments";
import Footer from "../Footer/Footer";






const Navigatescl=()=>{
    return(
        <div>
            
            <Navbar/>
            <Home/>
            
            <Campaigns/>
            <Attract/>
            <Payments/>
            <Footer/>
   
          
            
        </div>
    )
}

export default Navigatescl;