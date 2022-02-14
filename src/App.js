import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Summary from './components/Summary';
import Experience from './components/Experience';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';
import ViewResume from './components/ViewResume';
import DetailsForms from './components/DetailsForms';
import React, { useState } from "react";
import ResumeDetailsContext from './context/ResumeDetailsContext';
import HomePage from './components/HomePage';
import ChooseTemplate from './components/ChooseTemplate';
import Navbar from './components/Navbar';

function App() {
  const persnalInfoStorage = JSON.parse(window.localStorage.getItem('personalInfo'));
  const educationDetailsStorage = JSON.parse(window.localStorage.getItem('educationDetails'));
  const experienceStorage = JSON.parse(window.localStorage.getItem('experienceDetails'));
  const skillStorage = JSON.parse(window.localStorage.getItem('skills'));
  const summaryStorage = JSON.parse(window.localStorage.getItem('summary'));

  const [data, setData] = useState({
    personalInfo: persnalInfoStorage,
    education: educationDetailsStorage,
    experience: experienceStorage,
    skills: skillStorage,
    summary: summaryStorage
  })

  function saveInfo(Data, name) {
    localStorage.setItem(name, JSON.stringify(Data));
  }
  return (
    <ResumeDetailsContext.Provider value={{ dataUser: data, setUserData: setData }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/template" element={<ChooseTemplate />}></Route>
          <Route path="/details" element={<DetailsForms details={data} />}>
            <Route path="personalInfo" element={<PersonalInfo personalInfoApp={persnalInfoStorage} saveInfoFunction={saveInfo} />}></Route>
            <Route path="education" element={<Education saveInfoFunction={saveInfo} educationDetailsPass={educationDetailsStorage} />}></Route >
            <Route path="summary" element={<Summary summaryPass={summaryStorage} saveInfoFunction={saveInfo} />
            }></Route >
            <Route path="experience" element={<Experience experiencePass={experienceStorage} saveInfoFunction={saveInfo} />}></Route >
            <Route path="skills" element={<Skills saveInfoFunction={saveInfo} skillPass={skillStorage} />}></Route >
          </Route>
          <Route path="resumeView" element={<ViewResume userDetails={data} />}></Route >
        </Routes >
      </Router >
    </ResumeDetailsContext.Provider >
  );
}

export default App;
