import React from "react";

import image         from "../../../assets/SVG/page-layout-2-content-palcaeholder.svg";
import image2        from "../../../assets/SVG/page-layout-2-content-palcaeholder-2.svg";
import dateIcon      from "../../../assets/SVG/date-icon.svg";
import SocialContent from "../../EmailSignatureLayout/Components/SocialContent/SocialContent";

import './style.css'
import { createRef } from "react/cjs/react.production.min";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

function TwoImagesGrid() {
    const componentRef = createRef();
    return (
        <>
            <div className='contentTwoImageGrid' ref={componentRef}>
                <div className='contentTwoImageGrid2'>
                    <div><img src={image} alt='image'/></div>
                    <div className='userContent'>
                        <div className='socialTwoImage'>
                            <div className='share1'>Share</div>
                            <div className='socCont'><SocialContent isNotMargin={true}/></div>
                        </div>
                        <div className='textUser'>
                            <div className='title'>Title</div>
                            <div className='view'>
                                <div><img src={dateIcon} alt='image' className='icon'/></div>
                                <span>22/12/2009</span>
                            </div>
                            <div className='text'>Lorem Ipsum is simply dummy text of the printing anf
                                typesetting industry.Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer
                            </div>
                            <div><img src={image2} alt='image'/></div>
                            <div className='text'>Lorem Ipsum is simply dummy text of the printing anf
                                typesetting industry.Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='exportButton'><ButtonComponent componentRef={componentRef}/></div>
        </>
    )
}
export default React.memo(TwoImagesGrid);