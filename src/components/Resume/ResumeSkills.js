import React from 'react'

function ResumeSkills({ src, theme }) {
  function levelCircles(level) {
    let circles = [];
    for (let i = 0; i < 5; i++) {
      if (i < level) {
        circles.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8" />
        </svg>)
      } else {
        circles.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        </svg>)
      }
    }
    return circles;
  }
  return (
    <div className="container-fluid">
      {src && src.map((skill) => {
        return <div key={skill.id}>
          <div className="row">
            <span style={{ fontWeight: '500' }}>{skill.inputSkill}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
            {theme === 'text' && <span>{skill.inputLevel}</span>}
            {theme !== 'text' && skill.inputLevel === 'Intermediate' && <span>{
              levelCircles(3)
            }</span>
            }
            {theme !== 'text' && skill.inputLevel === 'Experienced' && <span>{levelCircles(4)}</span>}
            {theme !== 'text' && skill.inputLevel === 'Beginner' && <span>{levelCircles(2)}</span>}

          </div>
        </div>
      })}
    </div>
  )
}

export default ResumeSkills
