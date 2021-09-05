import React from "react";
import image           from "../../../assets/SVG/email-layout-circle-icon.svg";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import SocialContent   from "../Components/SocialContent/SocialContent";
import AboutUser       from "../Components/AboutUser/AboutUser";

import { createRef } from "react/cjs/react.production.min";

import './style.css'

function AlignLeftLayout() {
    const componentRef = createRef();
    return (
        <>
            <div className='contentItem' ref={componentRef}>
                <div>
                    <img src={image} alt='image'/>
                    <SocialContent/>
                </div>
                <AboutUser/>
            </div>
            <div className='exportButton'><ButtonComponent componentRef={componentRef}/></div>
        </>
    )
}

export default React.memo(AlignLeftLayout);