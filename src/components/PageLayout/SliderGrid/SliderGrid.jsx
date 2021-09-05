import React from "react";
import dateIcon from "../../../assets/SVG/date-icon.svg";
import image from "../../../assets/SVG/page-layout-2-content-palcaeholder.svg";
import SliderComponent from "../../SliderComponent/SliderComponent";
import './style.css'

function SliderGrid() {
    return (
        <div className='sliderGridContent'>
            <div className='slider'><SliderComponent/></div>
            <div className='textContent'>
                <div>Title</div>
            </div>
        </div>
    )
}
export default SliderGrid