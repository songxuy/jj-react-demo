import React, { useState } from 'react'
import './css/color.scss'
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import { HexColorPicker } from "react-colorful";
function ColorPick(props) {
  let [color, setColor] = useState(props.color);
  let [isShow, setShow] = useState(false)
  const changeShow = () => {
    setShow(!isShow)
  }
  const changeColor = (t) => {
    setColor(t)
    props.setColor(t)
  }
  return (
    <div className="container-color">
      <div className='color' style={{backgroundColor: color}} onClick={changeShow}>{color ? <DownOutlined style={{ color: '#fff', top: '-1px', position: 'relative'}}/>
        : <CloseOutlined style={{ color: '#000', top: '-1px', position: 'relative' }} />}</div>
      {
        isShow ?
        <div className="floatBox">
            <HexColorPicker color={color} onChange={changeColor} />
        </div>
        : null
      }
    </div>
  )
}
export default ColorPick