import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import ColorPicker from '@/components/ColorPicker'
import { CheckOutlined } from '@ant-design/icons';
function Palette() {
  let canvas = useRef(null)
  let [color, setColor] = useState('#000')
  let [type, setType] = useState('huabi')
  let [isDraw, setDraw] = useState(false)
  let [bx, setBx] = useState(0)
  let [by, setBy] = useState(0)
  let [imgData, setImgData] = useState(null)
  let ctx = useRef(null)
  useEffect(() => {
    canvas.current.width = document.documentElement.clientWidth - 6
    canvas.current.height = 400
    ctx.current = canvas.current.getContext('2d')
    return () => {
      canvas.current = null
      ctx.current = null
    }
  }, [])

  const clear = () => {
    setImgData(null)
    ctx.current.clearRect(0, 0, canvas.current.width, 400)
  }
  const saveImg = () => {
    const url = canvas.current.toDataURL();
    const a = document.createElement("a");
    a.download = "sunshine";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  const canvasDown = (e) => {
    setDraw(true)
    var bbox = canvas.current.getBoundingClientRect();
    setBx(e.pageX - bbox.left)
    setBy(e.pageY - bbox.top)
  }
  const canvasMove = (e) => {
    if (!isDraw) return;
    /* const canvas = this.canvasDom;
    const ctx = this.ctx; */
    var bbox = canvas.current.getBoundingClientRect();
    const x = e.pageX - bbox.left;
    const y = e.pageY - bbox.top;
    switch (type) {
      case 'huabi': huabiFn(ctx.current, x, y)
        break;
      case 'rect': rectFn(ctx.current, x, y)
        break;
      case 'arc': arcFn(ctx.current, x, y)
        break;
      default: break;
    }

  }
  const canvasUp = () => {
    setImgData(ctx.current.getImageData(0, 0, canvas.current.width, 400))
    setDraw(false)
  }
  const touchStart = (e) => {
    setDraw(true)
    var bbox = canvas.current.getBoundingClientRect();
    setBx(e.targetTouches[0].pageX - bbox.left)
    setBy(e.targetTouches[0].pageY - bbox.top)
  }
  const touchMove = (e) => {
    if (!isDraw) return;
    /* const canvas = this.canvasDom;
    const ctx = this.ctx; */
    var bbox = canvas.current.getBoundingClientRect();
    const x = e.targetTouches[0].pageX - bbox.left;
    const y = e.targetTouches[0].pageY - bbox.top;
    switch (type) {
      case 'huabi': huabiFn(ctx.current, x, y)
        break;
      case 'rect': rectFn(ctx.current, x, y)
        break;
      case 'arc': arcFn(ctx.current, x, y)
        break;
      default: break;
    }
  }
  const touchEnd = () => {
    setImgData(ctx.current.getImageData(0, 0, canvas.current.width, 400))
    setDraw(false)
  }
  const huabiFn = (ctx, x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
  const rectFn = (ctx, x, y) => {
    const beginX = bx;
    const beginY = by;
    ctx.clearRect(0, 0, canvas.current.width, 400);
    imgData && ctx.putImageData(imgData, 0, 0, 0, 0, canvas.current.width, 400);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.rect(beginX, beginY, x - beginX, y - beginY);
    ctx.stroke();
    ctx.closePath();
  }
  const arcFn = (ctx, x, y) => {
    const beginX = bx;
    const beginY = by;
    isDraw && ctx.clearRect(0, 0, canvas.current.width, 400);
    imgData && ctx.putImageData(imgData, 0, 0, 0, 0, canvas.current.width, 400);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(
      beginX,
      beginY,
      Math.round(
        Math.sqrt((x - beginX) * (x - beginX) + (y - beginY) * (y - beginY))
      ),
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.closePath();
  }
  return (
    <div className="palette">
      <div className="menu">
        <p className="btn primary" onClick={() => setType('huabi')}>画笔 {type === 'huabi' ? <CheckOutlined style={{color: '#fff', marginLeft: '5px'}}/> : '' }</p>
        <p className="btn success" onClick={() => setType('rect')}>正方形 { type === 'rect' ? <CheckOutlined style={{color: '#fff', marginLeft: '5px'}}/> : '' }</p>
        <p className="btn warning" onClick={() => setType('arc')}>圆形 { type === 'arc' ? <CheckOutlined style={{color: '#fff', marginLeft: '5px'}}/> : '' }</p>
        <ColorPicker color={color} setColor={setColor} />
        <p className="btn normal" style={{ marginLeft: '5px' }} onClick={ clear}>清空</p>
        <p className="btn normal" onClick={saveImg}>保存</p>
      </div>
      <canvas ref={canvas} onMouseDown={canvasDown} onMouseMove={canvasMove} onMouseUp={canvasUp} onMouseOut={canvasUp} onTouchStart={touchStart} onTouchMove={ touchMove } onTouchEnd={touchEnd} onTouchCancel={touchEnd}></canvas>
    </div>
  );
}

export default Palette;
