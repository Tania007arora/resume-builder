import React from 'react';
import ProgressBar from './ProgressBar';
import { Outlet } from "react-router-dom";
function DetailsForms({ details }) {
  return (<div className="container-fluid">
    <div className="row">
      <div className="col-md-3" style={{ paddingLeft: '0px' }}>
        <ProgressBar userDetails={details} />
      </div>
      <div className="col-md-9" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default DetailsForms;
