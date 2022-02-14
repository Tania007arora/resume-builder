import { React, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ButtonSaveNext from './ButtonSaveNext';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { PopoverSuggestion } from './PopoverSuggestion'
import CustomFormHeading from './CustomFormHeading';
import CustomSuggestionHeading from './CustomSuggestionHeading';
import CustomInput from './CustomInput';
export default function PersonalInfo({ personalInfoApp, saveInfoFunction }) {
    //to set countries and mobile
    const [country, setCountry] = useState([]);
    const [personalInfoPass, setPersonalInfoPass] = useState({
        firstName: "",
        lastName: "",
        inputState: "",
        inputCountry: "",
        inputMobile: "",
        inputCode: "",
        inputEmail: "",
        inputLinkedin: "",
        inputGithub: ""
    });
    let [disable, setDisable] = useState(true);
    useEffect(() => {
        if (personalInfoPass.firstName !== "" && personalInfoPass.inputMobile !== "" && personalInfoPass.inputCode !== "" && personalInfoPass.inputEmail !== "") {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }, [personalInfoPass.firstName, personalInfoPass.inputMobile, personalInfoPass.inputCode, personalInfoPass.inputEmail])
    useEffect(() => {
        if (personalInfoApp) {
            setPersonalInfoPass({
                firstName: personalInfoApp.firstName,
                lastName: personalInfoApp.lastName,
                inputState: personalInfoApp.inputState,
                inputCountry: personalInfoApp.inputCountry,
                inputMobile: personalInfoApp.inputMobile,
                inputCode: personalInfoApp.inputCode,
                inputEmail: personalInfoApp.inputEmail,
                inputLinkedin: personalInfoApp.inputLinkedin,
                inputGithub: personalInfoApp.inputGithub
            })
        }
    }, [personalInfoApp])
    function onHandleChange(event) {
        setPersonalInfoPass({
            ...personalInfoPass, [event.target.id]: event.target.value
        })
    }
    //fetching countries
    async function countryMobile() {
        fetch('https://gist.githubusercontent.com/kcak11/4a2f22fb8422342b3b3daa7a1965f4e4/raw/74ba32418fc15a92da760766685ed617a6500f41/countries.json')
            .then(response => response.json())
            .then(data => {
                let parsedData = data;
                setCountry(parsedData)
            })
            .catch(error => console.error(error))
    }
    useEffect(() => {
        countryMobile();
    }, [])
    let navigate = useNavigate();
    function onHandleSubmit() {
        saveInfoFunction(personalInfoPass, 'personalInfo');
        navigate("/details/education");
    }

    const content = `Kindly enter your name, email, mobile number and Code.`
    const HEADING = 'Add Personal Details';
    return (
        <div className="container">
            <CustomFormHeading heading={HEADING} />
            <hr></hr>
            <CustomSuggestionHeading data="It is suggested to specify links to your github and linkedIn accounts to give better impression of your work." />
            <form className="row g-3 my-1" onSubmit={onHandleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label"  >First Name*</label>
                    <CustomInput id="firstName" value={personalInfoPass.firstName} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name*</label>
                    <CustomInput id="lastName" value={personalInfoPass.lastName} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <CustomInput id="inputState" value={personalInfoPass.inputState} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCountry" className="form-label">Country</label>
                    <select value={personalInfoPass.inputCountry} id="inputCountry" className="form-select" onChange={onHandleChange} style={{ borderRadius: '30px', boxShadow: '0px 2px 16px rgba(128, 128, 128, 0.25)' }}>
                        <option value="choose" key="choose">Choose</option>
                        {
                            country.map((element) => {
                                return <option value={element.name} key={element.name}>{element.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputMobile" className="form-label">Mobile Number*</label>
                    <div className="input-group mb-3">
                        <select value={personalInfoPass.inputCode} style={{ borderRadius: '30px', boxShadow: '0px 2px 16px rgba(128, 128, 128, 0.25)' }} className="form-select" id="inputCode" onChange={onHandleChange}>
                            <option value="choose">Code</option>
                            {
                                country.map((element) => {
                                    return <option value={element.dialCode} key={element.isoCode}>{element.name}{element.dialCode}</option>
                                })
                            }
                        </select>
                        <CustomInput id="inputMobile" value={personalInfoPass.inputMobile} onChangeFunction={onHandleChange} />
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label" placeholder="abc@gmail.com">Share your Email*</label>
                    <CustomInput id="inputEmail" value={personalInfoPass.inputEmail} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputLinkedin" className="form-label">Share your Linkedin Profile</label>
                    <CustomInput id="inputLinkedin" value={personalInfoPass.inputLinkedin} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputGithub" className="form-label">Share your Github Link</label>
                    <CustomInput id="inputGithub" value={personalInfoPass.inputGithub} onChangeFunction={onHandleChange} />
                </div>
                {
                    disable ?
                        <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={
                            <PopoverSuggestion id="popover-contained">{content}</PopoverSuggestion>
                        }>
                            <span className="d-inline-block col-2" >
                                <button type="button" className="btn btn-primary" disabled >Save and Next</button>
                            </span>
                        </OverlayTrigger>
                        : <ButtonSaveNext data={personalInfoPass} saveName='personalInfo' nextLink='/details/education' saveInfoFunction={saveInfoFunction} />
                }
            </form >
        </div >

    )
}

