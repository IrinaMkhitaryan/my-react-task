import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/SVG/page-layout-3-content-palcaeholder.svg';
import './style.css';

function SliderComponent() {
    return (
        <Carousel verticalSwipe="natural">
            <div>
                <img src={image} />
            </div>
            <div>
                <img src={image} />
            </div>
            <div>
                <img src={image} />
            </div>
        </Carousel>
    )
}
export default SliderComponent