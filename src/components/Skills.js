import { React, useState, useEffect } from 'react';
import ButtonSaveNext from './ButtonSaveNext';
import CustomFormHeading from './CustomFormHeading';
import { OverlayTrigger } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import CustomSuggestionHeading from './CustomSuggestionHeading';
import CustomInput from './CustomInput';

export default function Skills(props) {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState({
        inputSkill: "",
        inputLevel: "",
    });
    let [disable, setDisable] = useState(true);
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Mandatory</Popover.Header>
            <Popover.Body>
                Kindly enter skill and choose corresponsing level.
            </Popover.Body>
        </Popover>
    )
    useEffect(() => {
        if ((newSkill.inputSkill !== "") || skills.length > 0) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }, [newSkill.inputSkill, skills.length])
    useEffect(() => {
        let list = JSON.parse(localStorage.getItem('skills'));
        !list ? setSkills([]) : setSkills(list)
    }, [props.skillPass])
    useEffect(() => {
        localStorage.setItem('skills', JSON.stringify(skills));
    }, [skills])
    function onHandleChange(event) {
        setNewSkill({
            ...newSkill, [event.target.id]: event.target.value
        })
    }
    function saveSkills() {
        if (newSkill.inputSkill === "") {
            //if values are null
        }
        else {
            setSkills([...skills, {
                id: Math.random(),
                inputSkill: newSkill.inputSkill,
                inputLevel: newSkill.inputLevel,
            }
            ]);
            localStorage.setItem('skills', JSON.stringify(skills));
            setNewSkill({
                inputSkill: "",
                inputLevel: "",
            })
            document.getElementById("inputLevel").value = "";
            document.getElementById("inputSkill").value = "";
        }
    }

    function deleteSkill(id_pass) {
        let index = skills.findIndex(x => x.id === id_pass)
        let skillsCopy = skills.slice();
        skillsCopy.splice(index, 1);
        setSkills(skillsCopy);
        localStorage.setItem('skills', JSON.stringify(skills));
    }
    const HEADING = 'Enter Your Skills';
    return (
        <div className="container">
            <CustomFormHeading heading={HEADING} />
            <hr></hr>
            <CustomSuggestionHeading data="Mention your technical skills" />
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputSkill" className="form-label">Skill*</label>
                    <CustomInput id="inputSkill" value={newSkill.inputSkill} onChangeFunction={onHandleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLevel" className="form-label">Level</label>
                    <select id="inputLevel" className="form-select" value={newSkill.inputLevel} style={{ borderRadius: '30px', boxShadow: '0px 2px 16px rgba(128, 128, 128, 0.25)' }} onChange={onHandleChange}>
                        <option value="select">Select your skill level</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Experienced</option>
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {(newSkill.inputSkill === "" || newSkill.inputLevel === "") ?
                        <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                            <span className="d-inline-block" >
                                <button type="button" disabled className="btn btn-outline-success" >Add Skill</button></span>
                        </OverlayTrigger>
                        : <button type="button" className="btn btn-outline-success" onClick={saveSkills}>Add Skill</button>
                    }
                    <div>
                        <ButtonSaveNext disabled={disable} data={skills} saveName='skills' nextLink='/details/summary' saveInfoFunction={props.saveInfoFunction} icon={true} />
                    </div>
                </div>
                <hr></hr>
                {skills.length > 0 && <>
                    <h4>Skills Added</h4>
                    {skills.map((element) => {
                        return <div className="row" key={element.id} style={{ paddingTop: '10px' }}>
                            <div className="col-4">{element.inputSkill}</div>
                            <div className="col-4">{element.inputLevel}</div>
                            <div className="col-4">
                                <button type="button" className="btn btn-outline-danger" onClick={() => { deleteSkill(element.id) }}>Delete</button>
                            </div>
                        </div>
                    })
                    }
                </>
                }
            </form>
        </div>
    )
}