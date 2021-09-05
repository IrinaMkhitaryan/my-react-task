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
                    <div className='title'>Title</div>
                    <div>Lorem Ipsum is simply dummy text of the printing anf
                        typesetting industry.Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                    </div>
                    <div><button className='redButton'>Button</button><button className='redButton'>Button</button></div>
                    <div>
                        <ul className='new-list'>
                            <li>Creative concept</li>
                            <li>Eco friendly</li>
                            <li>Comes width assembly guide</li>
                            <li>Customizable</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='exportButton'><ButtonComponent componentRef={componentRef}/></div>
        </>
    )
}
export default React.memo(SliderGrid);