import { React, useState, useEffect } from 'react';
import Courses from '../Courses.json';
import ButtonSaveNext from './ButtonSaveNext';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { PopoverSuggestion } from './PopoverSuggestion'
import CustomFormHeading from './CustomFormHeading';
import CustomSuggestionHeading from './CustomSuggestionHeading';
import CustomInput from './CustomInput';
export default function Education(props) {
    let [educationList, setEducationList] = useState([]);
    const [EducationDetails, setEducationDetails] = useState
        ({
            inputCollege: "",
            inputState: "",
            inputDegree: "",
            inputMajor: "",
            startDate: "",
            endDate: "",
            gridCheck: false
        })
    let [disable, setDisable] = useState(true);
    useEffect(() => {
        if ((EducationDetails.inputCollege !== "" && EducationDetails.inputState !== "" && EducationDetails.inputDegree !== "" && EducationDetails.startDate !== "")) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }, [EducationDetails.inputCollege, EducationDetails.inputState, EducationDetails.inputDegree, EducationDetails.startDate, educationList])
    useEffect(() => {
        let list = JSON.parse(localStorage.getItem('educationDetails'));
        !list ? setEducationList([]) : setEducationList(list)
    }, [])
    useEffect(() => {
        localStorage.setItem('educationDetails', JSON.stringify(educationList));
    }, [educationList])
    function onHandleChange(event) {
        setEducationDetails({
            ...EducationDetails, [event.target.id]: event.target.value
        })
    }
    function onHandleChangeCheck(event) {
        setEducationDetails({
            ...EducationDetails, [event.target.id]: event.target.checked
        })
    }
    function saveEducation() {
        if (EducationDetails.inputCollege === "") {
            //if values are null
        }
        else {
            console.log(EducationDetails)
            setEducationList([...educationList, { ...EducationDetails, id: Math.random() }])
            localStorage.setItem('educationDetails', JSON.stringify(educationList));
            setEducationDetails({
                inputCollege: "",
                inputState: "",
                inputDegree: "",
                inputMajor: "",
                startDate: "",
                endDate: "",
                gridCheck: false
            })
            for (let i in EducationDetails) {
                document.getElementById(i).value = "";
            }
        }
    }
    function deleteEducation(id_pass) {
        let index = educationList.findIndex(x => x.id === id_pass)
        let skillsCopy = educationList.slice();
        skillsCopy.splice(index, 1);
        setEducationList(skillsCopy);
        localStorage.setItem('educationDetails', JSON.stringify(educationList));
    }
    const content = `Kindly enter college Name, state and degree.`
    const HEADING = 'Enter Your Education Details';
    return (
        <>
            <div className="container">
                <CustomFormHeading heading={HEADING} />
                <hr></hr>
                <CustomSuggestionHeading data="Starting from highest to lowest." />
                <CustomSuggestionHeading data="It is not necessary to mention your high school details." />
                <CustomSuggestionHeading data="Even if you are currently enrolled in degree, it is suggested to mention end date." />
                <form className="row g-3 my-3">
                    <div className="col-md-6">
                        <label htmlFor="inputCollege" className="form-label">College/University Name*</label>
                        <CustomInput id="inputCollege" value={EducationDetails.inputCollege} onChangeFunction={onHandleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">State*</label>
                        <CustomInput id="inputState" value={EducationDetails.inputState} onChangeFunction={onHandleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputDegree" className="form-label">Select Degree*</label>
                        <select value={EducationDetails.inputDegree} id="inputDegree" className="form-select" style={{ borderRadius: '30px', boxShadow: '0px 2px 16px rgba(128, 128, 128, 0.25)' }} onChange={onHandleChange}>
                            <option value="choose" >Choose</option>
                            {Courses.courses.map((element) => {
                                return (
                                    <option value={element.courseName} key={element.CourseId}> {element.courseName}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputMajor" className="form-label">Major Field</label>
                        <CustomInput id="inputMajor" value={EducationDetails.inputMajor} onChangeFunction={onHandleChange} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="startDate">Start Date:*</label>
                        <CustomInput id="startDate" value={EducationDetails.startDate} onChangeFunction={onHandleChange} type="date" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="endDate">End Date:</label>
                        <CustomInput id="endDate" value={EducationDetails.gridCheck ? "" : (EducationDetails.endDate)} disable={EducationDetails.gridCheck === true} onChangeFunction={onHandleChange} type="date" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" onChange={onHandleChangeCheck} checked={EducationDetails.gridCheck} />
                            <label className="form-check-label" htmlFor="gridCheck" >
                                Currently pursuing this degree
                            </label>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {disable ?
                            <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={
                                <PopoverSuggestion id="popover-contained">{content}</PopoverSuggestion>
                            }>
                                <span className="d-inline-block" >
                                    <button type="button" disabled className="btn btn-outline-success" >Add Degree</button>
                                </span>
                            </OverlayTrigger>
                            :
                            <button type="button" className="btn btn-outline-success" onClick={saveEducation}>Add Degree</button>
                        }
                        <div>
                            <ButtonSaveNext data={educationList} saveName='educationDetails' nextLink='/details/experience' saveInfoFunction={props.saveInfoFunction} icon={true} />
                        </div>
                    </div>
                    <hr></hr>
                    <h3>Education Details Added</h3>
                    {educationList && educationList.length > 0 && educationList.map((element) => {
                        return <div className="row" key={element.id} style={{ paddingTop: '10px' }}>
                            <div className="col-3">{element.inputCollege}</div>
                            <div className="col-3">{element.inputDegree}</div>
                            <div className="col-3">{element.startDate}-{element.endDate}</div>
                            <div className="col-3">
                                <button type="button" className="btn btn-outline-danger" onClick={() => { deleteEducation(element.id) }}>Delete</button>
                            </div>
                        </div>
                    })}

                </form>
            </div>
        </>
    )
}