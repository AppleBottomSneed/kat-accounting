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
                <div className="kat__whyus-flexbox kat__whyus-container-padding">
                    <div className="kat__whyus-selfie">
                        <img src={images.serviceIcon1} alt="directorimage"/>
                    </div>
                    <div className="kat__whyus-director">
                        <div className="kat__whyus-director-name">
                            <p>Kim Anh Truong</p>
                        </div>
                        <div className="kat__whyus-director-title">
                            <p>Director</p>
                        </div>
                        <div className="kat__whyus-director-statement">
                            <p>Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Whyus;