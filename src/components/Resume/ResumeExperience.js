import React from 'react'

function ResumeExperience({ src }) {
  return (
    <div className="container">
      {src && src.map((item) => {
        return <div key={item.id} className='row'>
          <div className="col-md-2" style={{ borderRight: '2px solid', fontSize: '11px' }}>
            {item.startDate && <><span>{item.startDate.toString().replaceAll('-', '/')}-</span>
              {item.gridCheck === true || !item.endDate ? <span>present</span> : <span>{item.endDate.toString().replaceAll('-', '/')}</span>}
            </>
            }
            {/* dates */}
          </div>
          <div className="col-md-10">
            <h5>{item.inputEmployer}</h5>
            <h6>{item.inputJobtitle},{item.inputState}</h6>
            <p>{item.jobDescription}</p>
            {/* experience */}
          </div>
        </div>
      })}

    </div>
  )
}

export default ResumeExperience
