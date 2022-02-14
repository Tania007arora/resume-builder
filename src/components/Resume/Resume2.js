import React from 'react';
import ResumeEducation from './ResumeEducation'
import ResumeExperience from './ResumeExperience'
import ResumeSkills from './ResumeSkills'
import ContactDetails from './ContactDetails'

//template 2
function Resume2({ src }) {
  return (
    <div style={{ width: '21cm', height: '29.7cm' }}>
      <div style={{ backgroundColor: '#383c48' }}>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{src.personalInfo.firstName && src.personalInfo.lastName && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', color: 'white' }}> {src.personalInfo.firstName} {src.personalInfo.lastName}</div>}
              {src.personalInfo.inputEmail && <span style={{ color: 'white', fontSize: '14px' }}>{src.personalInfo.inputEmail}</span>}</div>
          </div>
        </div>
      </div>
      <div className="conatiner" style={{ padding: '20px' }}>
        <div className="row">
          <div className="col-md-8" >
            {src.summary && <p style={{ fontSize: '1rem', fontFamily: 'Roboto Condensed sans-serif' }}>{src.summary.summaryText}</p>}
            {src.experience && src.experience.length > 0 && <>
              <h5>Experience</h5>
              <hr></hr>
              <ResumeExperience src={src.experience} />
            </>}
            {
              src.education && src.education.length > 0 && <>
                <h5>Education</h5>
                <hr></hr>
                <ResumeEducation src={src.education} />
              </>
            }
          </div>
          <div className="col-md-4" style={{ backgroundColor: '#f4f4f4', display: 'flex', justifyContent: 'space-between' }}>
            <div><h5 style={{ paddingTop: '10px' }}>Personal Information</h5>
              <hr></hr>
              {src.personalInfo && <ContactDetails src={src.personalInfo} theme='dark' />}

              {src.skills && src.skills.length > 0 &&
                <div style={{ paddingTop: '20px' }}>
                  <h5>Skills</h5>
                  <hr></hr>
                  <ResumeSkills src={src.skills} />
                </div>

              }
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Resume2;
