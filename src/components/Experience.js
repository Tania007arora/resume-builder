import { React, useState, useEffect } from 'react';
import ButtonSaveNext from './ButtonSaveNext';
import ResumeExperience from './Resume/ResumeExperience';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import CustomFormHeading from './CustomFormHeading';
import CustomSuggestionHeading from './CustomSuggestionHeading';
import CustomInput from './CustomInput';

export default function Experience(props) {
    const [ExperienceList, setExperienceList] = useState([]); //all experiences
    const [ExperienceDetails, setExperienceDetails] = useState //single input
        ({
            inputEmployer: "",
            inputJobtitle: "",
            inputState: "",
            startDate: "",
            endDate: "",
            gridCheck: false,
            jobDescription: ""
        })
    let [disable, setDisable] = useState(true);
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Mandatory</Popover.Header>
            <Popover.Body>
                Kindly enter your Employer, Job Title and Interval
            </Popover.Body>
        </Popover>
    )
    useEffect(() => {
        if (ExperienceDetails.inputEmployer !== "" && ExperienceDetails.inputJobtitle !== "" && ExperienceDetails.startDate !== "") {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }, [ExperienceDetails.inputEmployer, ExperienceDetails.inputJobtitle, ExperienceDetails.startDate, ExperienceList])
    useEffect(() => {
        let list = JSON.parse(localStorage.getItem('experienceDetails'));
        !list ? setExperienceList([]) : setExperienceList(list)
    }, [props.experiencePass])
    useEffect(() => {
        localStorage.setItem('experienceDetails', JSON.stringify(ExperienceList));
    }, [ExperienceList])
    function onHandleChange(event) {
        setExperienceDetails({
            ...ExperienceDetails, [event.target.id]: event.target.value
        })
    }
    function onHandleChangeCheck(event) {
        setExperienceDetails({
            ...ExperienceDetails, [event.target.id]: event.target.checked
        })
    }
    function saveExperience() {
        if (ExperienceDetails.inputEmployer === "") {
            //if values are null
        }
        else {
            setExperienceList([...ExperienceList, { ...ExperienceDetails, id: Math.random() }])
            localStorage.setItem('experienceDetails', JSON.stringify(ExperienceList));
            setExperienceDetails({
                inputEmployer: "",
                inputJobtitle: "",
                inputState: "",
                startDate: "",
                endDate: "",
                gridCheck: false,
                jobDescription: ""
            })
            for (let i in ExperienceDetails) {
                document.getElementById(i).value = "";
            }
        }
    }
    function deleteExperience(id_pass) {
        let index = ExperienceList.findIndex(x => x.id === id_pass)
        let skillsCopy = ExperienceList.slice();
        skillsCopy.splice(index, 1);
        setExperienceList(skillsCopy);
        localStorage.setItem('experienceDetails', JSON.stringify(ExperienceList));
    }
    const HEADING = 'Add Your Experiences'
    return (
        <div className="container">
            <CustomFormHeading heading={HEADING} />
            <hr></hr>
            <CustomSuggestionHeading data="It is suggested to always put your job responsibilities. Enter the same in Job Description." />
            <form className="row g-3 my-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmployer" className="form-label">Employer/Company Name*</label>
                    <CustomInput id="inputEmployer" value={ExperienceDetails.inputEmployer} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputJobtitle" className="form-label">Job Title*</label>
                    <CustomInput id="inputJobtitle" value={ExperienceDetails.inputJobtitle} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <CustomInput id="inputState" value={ExperienceDetails.inputState} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-6">
                    <label htmlFor="startDate">Start Date:*</label>
                    <CustomInput id="startDate" value={ExperienceDetails.startDate} onChangeFunction={onHandleChange} type="date" />
                </div>
                <div className="col-6">
                    <label htmlFor="endDate">End Date:</label>
                    <CustomInput id="endDate" value={ExperienceDetails.gridCheck ? "" : (ExperienceDetails.endDate)} disable={ExperienceDetails.gridCheck === true} onChangeFunction={onHandleChange} type="date" />

                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" value={ExperienceDetails.gridCheck} onChange={onHandleChangeCheck} checked={ExperienceDetails.gridCheck} />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Currently doing this job
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="jobDescription">Job Description</label>
                    <textarea className="form-control" id="jobDescription" rows="3" value={ExperienceDetails.jobDescription} style={{ borderRadius: '30px', boxShadow: '0px 2px 16px rgba(128, 128, 128, 0.25)' }} onChange={onHandleChange}></textarea>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {disable ?
                        <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                            <span className="d-inline-block" >
                                <button type="button" disabled className="btn btn-outline-success" onClick={saveExperience}>Add Job Experience</button>
                            </span>
                        </OverlayTrigger>
                        : <span className="d-inline-block" ><button type="button" className="btn btn-outline-success" onClick={saveExperience}>Add Job Experience</button></span>
                    }
                    <div>
                        <ButtonSaveNext data={ExperienceList} saveName='experienceDetails' nextLink='/details/skills' saveInfoFunction={props.saveInfoFunction} icon={true} />
                    </div>
                </div>
                <hr></hr>
                <h3>Experiences Added</h3>
                {ExperienceList && ExperienceList.length > 0
                    ? ExperienceList.map((element) => {
                        return <div className="row" key={element.id} style={{ paddingTop: '10px' }}>
                            <div className="col-3">{element.inputJobtitle}</div>
                            <div className="col-3">{element.inputEmployer}</div>
                            <div className="col-3">{element.startDate}-{element.endDate}</div>
                            <div className="col-3">
                                <button type="button" className="btn btn-outline-danger" onClick={() => { deleteExperience(element.id) }}>Delete</button>
                            </div>
                        </div>
                    })
                    : <h6>No experiences added.</h6>
                }
            </form >
            <h4>View in Resume</h4>
            <ResumeExperience src={ExperienceList} />
        </div >
    )
}
