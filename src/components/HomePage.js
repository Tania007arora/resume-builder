import React from 'react';
import { useNavigate } from "react-router-dom";
import CustomHeading from './CustomHeading';
import CustomTitleHeading from './CustomTitleHeading';

function HomePage() {
  let navigate = useNavigate();
  function onHandleSubmit() {
    navigate('/template');
  }
  const title = `Create professional resume
                  Today by following simple
                  and easy steps`;
  const SUB_HEADING = 'Easy Online Resume Builder';
  const HEADING = "Resume Builder";
  return (<>
    <div className="container" style={{ marginTop: '70px', marginBottom: '20px' }}>
      <div className='row'>
        <div className="col-md-6" >
          <div style={{ fontSize: '4.2rem' }}><CustomHeading heading={HEADING} /></div>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', color: '#898989', fontSize: '2rem' }}>{SUB_HEADING}</p>
          <div style={{ fontSize: '2rem', lineHeight: '48px', marginTop: '50px' }}><CustomTitleHeading title={title} /></div>
          <button style={{ marginTop: '70px', fontFamily: 'Poppins, sans-serif', fontSize: '1.55rem', fontWeight: 500, borderRadius: '20px', backgroundColor: '#00C2FF', color: 'white', padding: '10px' }} onClick={onHandleSubmit} type="button" className="btn">Create Resume</button>
        </div>
        <div className="col" style={{ paddingLeft: '70px' }}>
          <img alt="resume" style={{ width: '485px', height: '485px' }} src="/homepage.png"></img>
        </div>
      </div>
    </div >
  </>
  )
}

export default HomePage;
