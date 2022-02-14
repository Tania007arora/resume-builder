import React from 'react'

function ResumeEducation({ src }) {
  return (
    <div className="container">
      {src && src.map((item) => {
        return <div className='row' key={item.id} >
          <div className="col-md-2" style={{ borderRight: '2px solid', fontSize: '11px' }}>
            {item.startDate && <><span >{item.startDate.toString().replaceAll('-', '/')}-</span>
              {item.gridCheck === true ? <span>present</span> : <span>{item.endDate.toString().replaceAll('-', '/')}</span>}
            </>
            }
            {/* dates */}
          </div>
          <div className="col-md-10" >
            <h6>{item.inputDegree}</h6>
            <h6>{item.inputCollege},{item.inputState}</h6>
            {/* stream,colege name */}
          </div>
        </div>
      })}
    </div>
  )
}

export default ResumeEducation
