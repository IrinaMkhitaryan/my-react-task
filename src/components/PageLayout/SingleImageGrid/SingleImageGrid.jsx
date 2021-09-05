import React from "react";

import image         from "../../../assets/SVG/page-layout-1-content-palcaeholder.svg";
import viewIcon      from "../../../assets/SVG/view-icon.svg";
import dateIcon      from "../../../assets/SVG/date-icon.svg";
import SocialContent from "../../EmailSignatureLayout/Components/SocialContent/SocialContent";

import './style.css'
import { createRef } from "react/cjs/react.production.min";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

function SingleImageGrid() {
    const componentRef = createRef();
    return (
        <>
            <div className='content1' ref={componentRef}>
                <div className='content2'>
                    <div>Category Name</div>
                    <div className="title">Title</div>
                    <div className='author'>
                        <div>Author Name</div>
                        <div className='view'>
                            <div><img src={dateIcon} alt='image' className='icon'/></div>
                            <span>22/12/2009</span></div>
                        <div className='view'>
                            <div><img src={viewIcon} alt='image' className='icon'/></div>
                            <span>256</span></div>
                    </div>
                    <div><img src={image} alt='image'/></div>
                    <div>Lorem Ipsum is simply dummy text of the printing anf
                        typesetting industry.Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                    </div>
                    <div>
                        <div className='share'>Share</div>
                        <div className='socilal'><SocialContent isNotMargin={true}/></div>
                    </div>
                </div>
            </div>
            <div className='exportButton'><ButtonComponent componentRef={componentRef}/></div>
        </>
    )
}

export default React.memo(SingleImageGrid);