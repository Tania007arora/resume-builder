import React from 'react';
import CustomTitleHeading from './CustomTitleHeading';
import '../App.css';
import { Link } from "react-router-dom";

function ProgressBar({ userDetails }) {
  const fields = [
    {
      title: 'Personal Details',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
      </svg>,
      color: userDetails && userDetails.personalInfo && userDetails.personalInfo.firstName ? '#2f8d46' : '#282a36',
      link: '/details/personalInfo'
    },
    {
      title: 'Education',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
      </svg>,
      color: userDetails && userDetails.education && userDetails.education.length > 0 ? '#2f8d46' : '#282a36',
      link: '/details/education'
    },
    {
      title: 'Experience',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
      </svg>,
      color: userDetails && userDetails.experience && userDetails.experience.length > 0 ? '#2f8d46' : '#282a36',
      link: '/details/experience'
    },
    {
      title: 'Skills',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16">
        <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
      </svg>,
      color: userDetails && userDetails.skills && userDetails.skills.length > 0 ? '#2f8d46' : '#282a36',
      link: '/details/skills'
    },
    {
      title: 'Summary',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
      </svg>,
      color: userDetails && userDetails.summary && userDetails.summary.summaryText ? '#2f8d46' : '#282a36',
      link: '/details/summary'
    }
  ]
  return (<>
    <div style={{ backgroundColor: '#CDC9C9', height: '100vh', minHeight: '100%', paddingTop: '50px' }}>
      {fields.map((field) => {
        return <Link to={field.link} key={field.title} style={{ textDecoration: 'None', color: field.color }}><div style={{ display: 'flex', alignItems: 'center', color: field.color, padding: '15px' }} className="progress2" >
          {field.icon}
          <span style={{ paddingLeft: '10px', fontSize: '1.25rem' }}><CustomTitleHeading title={field.title} /></span>
        </div></Link>
      })
      }

    </div>
  </>
  )
}

export default ProgressBar;
