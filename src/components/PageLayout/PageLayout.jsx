import { useState } from "react";
import layout1 from "../../assets/SVG/page-layout3.svg";
import layout2 from "../../assets/SVG/page-layout2.svg";
import layout3 from "../../assets/SVG/page-layout1.svg";
import React from "react";
import SingleImageGrid from "./SingleImageGrid/SingleImageGrid";
import TwoImagesGrid from "./TwoImagesGrid/TwoImagesGrid";
import SliderGrid from "./SliderGrid/SliderGrid";

function PageLayout() {
    const [active, setActive] = useState({align: 'left'});
    const setActiveButton = (position) => {
        setActive({align: position})
    };
    return (
        <>
        <div className='templateTypeContent'>
            <div className={active.align === 'left' ? 'active' : ''} onClick={() => setActiveButton('left')}><img src={layout1} alt='layout1'/><span>Single image grid</span></div>
            <div className={active.align === 'center' ? 'active' : ''} onClick={() => setActiveButton('center')}><img src={layout2} alt='layout2'/><span>2 images grid</span></div>
            <div className={active.align === 'right' ? 'active' : ''} onClick={() => setActiveButton('right')}><img src={layout3} alt='layout3'/><span>Slider grid</span></div>
        </div>
    {active.align === 'left'? <SingleImageGrid/> : active.align === 'center' ? <TwoImagesGrid/> : <SliderGrid/>}
 </>
    )
}

export default PageLayout;