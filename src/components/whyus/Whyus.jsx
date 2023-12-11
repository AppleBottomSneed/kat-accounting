import React from "react";
import { images } from "../../constants";
import "./whyus.css";

const Whyus = () => {
    return (
        <div className="section__padding" id="whyus">
            <div className="kat__whyus-container kat__whyus-container-padding">
                <div className="kat__whyus-title">
                    <p>Why Us?</p>
                </div>
                <div className="kat__whyus-flexbox kat__whyus-container-padding">
                    <div className="kat__whyus-selfie">
                        <img src={images.whyusIcon} alt="directorimage"/>
                    </div>
                    <div className="kat__whyus-director">
                        <div className="kat__whyus-director-name">
                            <p>Kim Anh Truong</p>
                        </div>
                        <div className="kat__whyus-director-title">
                            <p>Director</p>
                        </div>
                        <div className="kat__whyus-director-statement">
                            <p>"As the Director of KAT Accounting Services, I am deeply committed to our mission of delivering unparalleled accounting services that exceed our clients' expectations. With 18+ years experience, we understand that our clients entrust us with their financial well-being, and it's a responsibility we take incredibly seriously.</p>
                            <p>Our focus goes beyond just numbers and compliance; we prioritize understanding our clients' unique needs and business objectives. We believe in fostering long-term relationships built on trust, transparency, and exceptional service. We are dedicated to offering more than just solutions; we offer strategic guidance, personalized attention, and innovative approaches tailored to our clients' specific circumstances.</p>
                            <p>We are here to offer guidance, advice, and solutions tailored to your specific needs. Our goal is to instill confidence, providing you with a sense of security and reassurance, knowing that your financial well-being is in the most caring and capable hands.</p>
                            <p>At KAT Accounting Services, our ethos revolves around a nurturing and protective approach to financial management. We are here not just as advisors but as your steadfast guardians, ensuring your financial interests are safeguarded at every step."</p>
                        </div>
                        <div className="kat__whyus-awards">
                            <div className="kat__whyus-awardtitle">
                                <p>Pround Member of:</p>
                            </div>
                            <div className="kat__whyus-awards-images">
                                <img src={images.ntaaicon} alt="ntaa"/>
                                <img src={images.tpbicon} alt="ntaa"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Whyus;