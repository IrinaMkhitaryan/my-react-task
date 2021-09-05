import image from "../../../assets/SVG/email-layout-circle-icon.svg";
import SocialContent from "../Components/SocialContent/SocialContent";
import AboutUser from "../Components/AboutUser/AboutUser";
import React from "react";
import './style.css'

function AlignRightLayout() {
    return (
        <div className='contentRight'>
            <div className='aboutUser'>
                <AboutUser right={true}/>
            </div>
            <div className='imageSocial'>
                <img src={image} alt='image'/>
                <SocialContent/>
            </div>

        </div>
    )
}
export default AlignRightLayout