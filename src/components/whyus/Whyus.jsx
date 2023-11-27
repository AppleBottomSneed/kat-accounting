import React from "react";
import { images } from "../../constants";
import "./whyus.css";

const Whyus = () => {
    return (
        <div className="section__padding">
            <div className="kat__whyus-container kat__whyus-container-padding">
                <div className="kat__whyus-title">
                    <p>Why Us?</p>
                </div>
                <div className="kat__whyus-flexbox">
                    <div className="kat__whyus-flexbox-container kat__whyus-container-padding">
                        <div className="kat__whyus-selfie">
                            <img src={images.serviceIcon1} alt="directorimage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Whyus;