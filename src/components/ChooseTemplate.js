import React from 'react';
import CustomSubHeading from './CustomSubHeading';
import { useNavigate } from "react-router-dom";
import CustomHeading from './CustomHeading';
import '../App.css';
import StepsAnimation from './StepsAnimation';

function ChooseTemplate() {
  let navigate = useNavigate();
  const templates = [
    {
      id: 1,
      image: '/templatea.png',
      name: 'Template A'
    },
    {
      id: 2,
      image: '/templateb.png',
      name: 'Template B'
    },
  ]
  function onClickTemplate(id) {
    window.localStorage.setItem("template", id);
    navigate("/details/personalInfo");
  }
  const HEADING = 'Choose A Template';
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3.37rem' }}><CustomHeading heading={HEADING} /></div>
      <div style={{ display: 'flex', justifyContent: 'space-around', '&:hover': { cursor: 'pointer' } }}>
        {
          templates.map((template) => {
            return <div key={template.id}><div onClick={() => onClickTemplate(template.id)} style={{ boxShadow: '0 0 10px gray', marginTop: '20px', borderRadius: '10px', backgroundImage: `url(${template.image})`, width: '400px', height: '400px', backgroundSize: 'cover' }} className='template'></div>
              <div style={{ fontSize: '1.75rem' }}><CustomSubHeading heading={template.name} /></div>
            </div>
          })
        }
      </div>
      <StepsAnimation />
    </div >
  )
}

export default ChooseTemplate;
