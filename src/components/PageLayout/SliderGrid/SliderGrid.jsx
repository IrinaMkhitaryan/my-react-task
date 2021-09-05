import React from "react";

import SliderComponent from "../../SliderComponent/SliderComponent";

import './style.css'
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { createRef } from "react/cjs/react.production.min";

function SliderGrid() {
    const componentRef = createRef();
    return (
        <>
            <div className='sliderGridContent' ref={componentRef}>
                <div className='slider'><SliderComponent/></div>
                <div className='textContent'>
                    <div>Title</div>
                </div>
            </div>
            <div className='exportButton'><ButtonComponent componentRef={componentRef}/></div>
        </>
    )
}
export default React.memo(SliderGrid);