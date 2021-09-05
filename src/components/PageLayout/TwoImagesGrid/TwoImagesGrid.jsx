import React from "react";
import './style.css'
import image from "../../../assets/SVG/page-layout-2-content-palcaeholder.svg";
import image2 from "../../../assets/SVG/page-layout-2-content-palcaeholder-2.svg";
import viewIcon from "../../../assets/SVG/view-icon.svg";
import dateIcon from "../../../assets/SVG/date-icon.svg";
import SocialContent from "../../EmailSignatureLayout/Components/SocialContent/SocialContent";

function TwoImagesGrid() {
    return (
        <div className='contentTwoImageGrid'>
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
                            standard dummy text ever since the 1500s, when an unknown printer</div>
                        <div><img src={image2} alt='image'/></div>
                        <div className='text'>Lorem Ipsum is simply dummy text of the printing anf
                            typesetting industry.Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer</div>
                        <div></div>
                    </div>
                </div>

                {/*<div className='content2'>*/}
                {/*<div>Category Name</div>*/}
                {/*<div className="title">Title</div>*/}
                {/*<div className='author'>*/}
                {/*<div>Author Name</div>*/}
                {/*<div className='view'><div><img src={dateIcon} alt='image' className='icon'/></div><span>22/12/2009</span></div>*/}
                {/*<div className='view'><div><img src={viewIcon} alt='image' className='icon'/></div><span>256</span></div>*/}
                {/*</div>*/}
                {/*<div><img src={image} alt='image'/></div>*/}
                {/*<div>Lorem Ipsum is simply dummy text of the printing anf*/}
                {/*typesetting industry.Lorem Ipsum has been the industry's*/}
                {/*standard dummy text ever since the 1500s, when an unknown printer*/}
                {/*</div>*/}
                {/*<div><div className='share'>Share</div><div className='socilal'><SocialContent/></div></div>*/}
                {/*</div>*/}
            </div>

        </div>
    )
}
export default TwoImagesGrid