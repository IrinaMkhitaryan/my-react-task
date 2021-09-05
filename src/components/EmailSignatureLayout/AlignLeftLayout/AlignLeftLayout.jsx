import React from "react";
import image from "../../../assets/SVG/email-layout-circle-icon.svg";
import './style.css'
import SocialContent from "../Components/SocialContent/SocialContent";
import AboutUser from "../Components/AboutUser/AboutUser";


function AlignLeftLayout() {
    return (
        <div className='contentItem'>
            <div>
                <img src={image} alt='image'/>
                <SocialContent/>
            </div>
           <AboutUser/>
        </div>
    )
}
export default AlignLeftLayout