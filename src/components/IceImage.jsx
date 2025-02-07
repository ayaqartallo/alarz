import React from "react";
import icecream from "../images/Capture.PNG";
import './iceImage.css';
function IceImage() {
    return (
        <div className="icecream-container">
            <img src={icecream} alt="" />
        </div>
    );
}
export default IceImage;