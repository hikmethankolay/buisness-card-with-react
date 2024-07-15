import React from "react";
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';
import { ReactComponent as Twitter } from '../images/twitter.svg';
function Footer(){
    return(
        <div className="footer">
            <a href="https://x.com/Hikmethan_Kolay" target="_blank"><Twitter/></a>
            <a href="https://www.facebook.com/hikmethan.kolay.5/" target="_blank"><Facebook/></a>
            <a href="https://www.instagram.com/hikmethan.kolay/" target="_blank"><Instagram/></a>
            <a href="https://github.com/hikmethankolay" target="_blank"><Github/></a>
        </div>
    )
}

export default Footer;