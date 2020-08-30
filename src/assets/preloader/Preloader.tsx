import preloader from "../preloader/svg-loaders/oval.svg";
import React from "react";

const Preloader = () => {
    return (
        <img src={preloader} alt="preloader" style={ { margin:'calc(50% - 75px) calc(50% - 75px)'} }/>
    );
}

export default Preloader;