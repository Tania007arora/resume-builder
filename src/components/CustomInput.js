import React from 'react'

function CustomInput({ id, value, onChangeFunction, type, disable }) {
  return (
    <input type={type ? type : 'text'} className="form-control" style={{ borderRadius: '30px', boxShadow: '0px 2px 16px rgba(128, 128, 128, 0.25)' }} id={id} value={value} onChange={onChangeFunction} disabled={disable} />

  )
}

export default CustomInput