import React from "react";
import image from "../images/person-image.png"
import { ReactComponent as Email } from '../images/e-mail.svg';
import { ReactComponent as Linkedin } from '../images/liked-in.svg';
function Info(){
    return(
        <div className="info">
            <img className="person-image" src={image} alt="Person's"/>
            <p className="name">Hikmethan Kolay</p>
            <p className="role">Engineering Student</p>
            <p className="website">hikmethankolay.com</p>
            <div className="social-links">
                <div className="e-mail">
                    <Email />
                    <a href="mailto:hikmethan.kolay@gmail.com">E-Mail</a>
                </div>
                <div className="linkedin">
                    <Linkedin />
                    <a href="https://www.linkedin.com/in/hikmethan-kolay/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Info;