import React, { useState } from "react";

import layout1 from "../../assets/SVG/email-layout1.svg";
import layout2 from "../../assets/SVG/email-layout2.svg";
import layout3 from "../../assets/SVG/email-layout3.svg";

import AlignCenterLayout from "./AlignCenterLayout/AlignCenterLayout";
import AlignRightLayout  from "./AlignRightLayout/AlignRightLayout";
import AlignLeftLayout   from './AlignLeftLayout/AlignLeftLayout'

import './style.css'

function EmailSignatureLayout() {
    const [active, setActive] = useState({align: 'left'});
    const setActiveButton = (position) => {
        setActive({align: position})
    };
    return (
        <>
        <div className='templateTypeContent'>
            <div className={active.align === 'left' ? 'active' : ''} onClick={() => setActiveButton('left')}><img src={layout1} alt='layout1'/><span>Align Left Layout</span></div>
            <div className={active.align === 'center' ? 'active' : ''} onClick={() => setActiveButton('center')}><img src={layout2} alt='layout2'/><span>Center Align Layout</span></div>
            <div className={active.align === 'right' ? 'active' : ''} onClick={() => setActiveButton('right')}><img src={layout3} alt='layout3'/><span>Align Right Layout</span></div>
        </div>
    {active.align === 'left'? <AlignLeftLayout/> : active.align === 'center' ? <AlignCenterLayout/> : <AlignRightLayout/>}
    </>
    )
}

export default React.memo(EmailSignatureLayout);