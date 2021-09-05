import React from "react";

import facebook  from "../../../../assets/SVG/facebook-icon.svg";
import twitter   from "../../../../assets/SVG/twitter-icon.svg";
import instagram from "../../../../assets/SVG/instagram-icon.svg";

import './style.css'

function SocialContent(props) {
    const {
        isNotMargin
    } = props;
    return (
        <div className='socialContent' style={{ 'margin-top': isNotMargin ? '0px' : '20px' }}>
            <img src={facebook} alt='facebook' className='social'/>
            <img src={twitter} alt='twitter' className='social'/>
            <img src={instagram} alt='instagram' className='social'/>
        </div>
    )
}
export default React.memo(SocialContent);