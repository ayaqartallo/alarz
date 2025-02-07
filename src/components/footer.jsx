import React from "react";
import "./footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram} from "react-icons/fa"; 

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <h1>Get In Touch</h1>
                <div className="info">
                    <div className="info-item">
                        <div className="circle">
                            <FaPhoneAlt className="icon" />
                        </div>
                        <p>Tel: +970 9 2322777</p>
                        <p>Fax: +970 9 2326222</p>
                        <p>Dial 972 instead of 970 when calling from non-Arab countries</p>
                    </div>
                    <div className="info-item">
                        <div className="circle">
                            <MdOutlineEmail className="icon" />
                        </div>
                        <p>info@alarz.ps</p>
                    </div>
                    <div className="info-item">
                        <div className="circle">
                            <FaLocationDot className="icon" />
                        </div>
                        <p>Al-Arz Ice Cream Co. Ltd</p>
                        <p>P.O.Box: 20</p>
                        <p>Eastern Industrial Zone</p>
                        <p>Nablus, Palestine</p>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                </div>
                <div>
                    <p>&copy; ALARZ</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;