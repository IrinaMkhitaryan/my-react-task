import React from "react";
import './style.css'

function AboutUser(props) {
    const {
        center,
        right
    } = props;
    return (
        <div className='user' style={{ width: center || right ? '80%' : '40%'}}>
            <div className={center ? 'alignRight' : ''}>
                <div>
                <h5>Name Surname</h5>
                <div>Web Developer</div>
                </div>
            </div>
            <div>Lorem Ipsum is simply dummy text of the printing anf
                typesetting industry.Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer
            </div>
        </div>
    )
 }
 export default AboutUser