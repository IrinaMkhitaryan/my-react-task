import React, { useState } from "react";
import './stile.css'
import { renderToString } from "react-dom";
import EmailSignatureLayout from "./EmailSignatureLayout/EmailSignatureLayout";
import PageLayout from "./PageLayout/PageLayout";

function SelectBox() {
    const options = [
        'Email signature layout',
        'Page layout',
    ];
    const [selectedOption, setSelectedOption] = useState('default');

    return (
        <div className="content">
            <div className='selectContent'>
            <div> SELECT TEMPLATE</div>
            <select
                className='selectTemplate'
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option value="default" disabled hidden>
                    Select template
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            </div>
            {selectedOption !== 'default' &&
            <>
                <div className='templateType'>TEMPLATE TYPE</div>
                {selectedOption === 'Email signature layout' ?
                   <EmailSignatureLayout/> : <PageLayout/>
                }
            </>
            }

        </div>
    )
}
export default SelectBox;