import image from "../../../assets/SVG/email-layout-circle-icon.svg";
import SocialContent from "../Components/SocialContent/SocialContent";
import AboutUser from "../Components/AboutUser/AboutUser";
import React from "react";
import './style.css'
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { createRef } from "react/cjs/react.production.min";

function AlignCenterLayout() {
    const componentRef = createRef();
    return (
        <>
            <div className='centerContent' ref={componentRef}>
                <div className='userInfo'>
                    <img src={image} alt='image'/>
                    <AboutUser center={true}/>
                </div>
                <div className='socialIcon'><SocialContent/></div>

            </div>
            <div className='exportButton'><ButtonComponent componentRef={componentRef}/></div>
        </>

    )
}
export default React.memo(AlignCenterLayout);