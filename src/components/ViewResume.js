import React, { useContext, useEffect, useState } from 'react'
import Resume from './Resume/Resume';
import Pdf from "react-to-pdf";
import ResumeDetailsContext from '../context/ResumeDetailsContext';
import Resume2 from './Resume/Resume2';
import CustomFormHeading from './CustomFormHeading';
function ViewResume() {
  const ref = React.createRef();
  const ResumeDetails = useContext(ResumeDetailsContext);
  const [userDetails, setUserDetails] = useState(ResumeDetails.dataUser);
  const [templateId, setTemplateId] = useState(1);
  useEffect(() => {
    ResumeDetails.setUserData({
      personalInfo: JSON.parse(window.localStorage.getItem('personalInfo')),
      education: JSON.parse(window.localStorage.getItem('educationDetails')),
      experience: JSON.parse(window.localStorage.getItem('experienceDetails')),
      skills: JSON.parse(window.localStorage.getItem('skills')),
      summary: JSON.parse(window.localStorage.getItem('summary'))
    })
    setTemplateId(JSON.parse(window.localStorage.getItem('template')))
  }, [])
  useEffect(() => {
    setUserDetails(ResumeDetails.dataUser);
  }, [ResumeDetails.dataUser])

  return (<>
    {userDetails &&
      <div style={{ marginTop: '20px' }} className="container-fluid">
        <div className="row">
          <div className="col-md-3" style={{ paddingTop: '15px' }}>
            <Pdf targetRef={ref} filename={`${userDetails.personalInfo.firstName}_Resume.pdf`}>
              {({ toPdf }) => <button type="button" className="btn" style={{ backgroundColor: '#8BDB81', color: 'black', borderRadius: '20px', fontFamily: 'Poppins, sans-serif' }} onClick={toPdf}>Download Resume Pdf</button>}
            </Pdf>
            <h6 style={{ paddingTop: '10px', fontFamily: 'Poppins, sans-serif' }}>Not Satisfied? <a href="/details/personalInfo">Update Resume.</a></h6>
          </div>
          <div className="col-md-8">
            <CustomFormHeading heading="Resume View" />
            <div ref={ref}>
              {userDetails && templateId === 1 && <Resume src={userDetails} />}
              {userDetails && templateId === 2 && <Resume2 src={userDetails} />}
            </div>
          </div>
        </div>
      </div >
    }
  </>
  )
}

export default ViewResume
