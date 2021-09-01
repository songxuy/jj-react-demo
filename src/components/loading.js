import React from 'react'
import './css/loading.scss'
function Loading(props) {
  return (
    <div className="loading" style={props.show ? { display: 'block' } : {display: 'none'}}>
      <div className="sword">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
export default Loading