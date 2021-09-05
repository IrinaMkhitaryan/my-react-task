import image from "../../../assets/SVG/email-layout-circle-icon.svg";
import SocialContent from "../Components/SocialContent/SocialContent";
import AboutUser from "../Components/AboutUser/AboutUser";
import React from "react";
import './style.css'
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { createRef } from "react/cjs/react.production.min";

function AlignCenterLayout() {
    const inputRef = createRef();
    return (
        <>
        <div className='centerContent' ref={inputRef}>
            <div className='userInfo'>
                 <img src={image} alt='image'/>
                <AboutUser center={true}/>
            </div>
            <div className='socialIcon'><SocialContent/></div>

        </div>
            <div className='exportButton'> <ButtonComponent inputRef={inputRef} template='fff'/></div>
            </>

    )
}
export default AlignCenterLayout