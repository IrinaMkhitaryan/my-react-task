import React from 'react';

import image from '../../assets/SVG/page-layout-3-content-palcaeholder-small.svg';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

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
export default React.memo(SliderComponent);