// Loader.js
import React from "react";
import "../Components/loader.css"; // Add CSS for the loader
import oar from '../Videos/OAR (1).mp4'

const Loader = () => {
  return (
    <div className="loaderMain">
{/* <div className="loader"></div> */}
<video src={oar} autoPlay loop muted className="loader"></video>

    </div>
    
  );
};

export default Loader;
