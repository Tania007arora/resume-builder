import { React, useState, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { PopoverSuggestion } from './PopoverSuggestion'
import ButtonSaveNext from './ButtonSaveNext';
import CustomFormHeading from './CustomFormHeading';
import CustomSuggestionHeading from './CustomSuggestionHeading';
export default function Summary(props) {
    const [summary, setSummary] = useState({
        summaryText: ""
    });
    useEffect(() => {
        let summary = JSON.parse(localStorage.getItem('summary'));
        setSummary()
        !summary ? setSummary({ summaryText: "" }) : setSummary(summary)
    }, [props.summaryPass])
    function onHandleChange(event) {
        setSummary({
            summaryText: event.target.value
        })
    }

    const content = `
    Ex-Focused and diligent graduate in data sciences looks to leverage in-depth knowledge
     of data analysis to drive success in the business intelligence team at Quanticum Inc.
    `
    const HEADING = 'Summary/Objective';
    return (
        <div className="container">
            <CustomFormHeading heading={HEADING} />
            <hr></hr>
            <CustomSuggestionHeading data="Sum up your resume. It is suggested to specify your area of expertise along with strengths." />
            <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={
                <PopoverSuggestion id="popover-contained">{content}</PopoverSuggestion>
            }>
                <span style={{ fontSize: '20px' }}><u>Example</u></span>
            </OverlayTrigger>
            <div className="row g-3 my-3 container">
                <textarea style={{ borderRadius: '30px', boxShadow: '0px 2px 16px rgba(128, 128, 128, 0.25)' }} className="form-control" id="mySummary" rows="8" onChange={onHandleChange} value={summary.summaryText}></textarea>
                <div className="col-6">
                    <ButtonSaveNext disabled={summary.summaryText ? false : true} data={summary} saveName='summary' nextLink='/resumeView' saveInfoFunction={props.saveInfoFunction} />
                </div>
            </div>
        </div>
    )
}