import React from "react";

import image           from "../../../assets/SVG/email-layout-circle-icon.svg";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import SocialContent   from "../Components/SocialContent/SocialContent";
import AboutUser       from "../Components/AboutUser/AboutUser";

import { createRef } from "react/cjs/react.production.min";

import './style.css'

function AlignRightLayout() {
    const componentRef = createRef();
    return (
        <>
            <div className='contentRight' ref={componentRef}>
                <div className='aboutUser'>
                    <AboutUser right={true}/>
                </div>
                <div className='imageSocial'>
                    <img src={image} alt='image'/>
                    <SocialContent/>
                </div>

            </div>
            <div className='exportButton'><ButtonComponent componentRef={componentRef}/></div>
        </>
    )
}
export default React.memo(AlignRightLayout);