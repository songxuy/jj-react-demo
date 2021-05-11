import React, { useEffect, useRef } from 'react';
import './index.scss'
function Volumes() {
  let canvas = useRef(null)
  /* let [canvasWidth, setWidth] = useState(0)
  let [canvasHeight, setHeight] = useState(0)
  let [ctx, setCtx] = useState(null) */

  useEffect(() => {
    canvas.current.height = 500;
    canvas.current.width = 350;
    let canvasWidth = canvas.current.width
    let canvasHeight = canvas.current.height
    let ctx = canvas.current.getContext('2d')
    let xSpeed = 0.5
    let amplitude = 50
    let xSpeed2 = 0.3
    let amplitude2= 50
    const draw = (speed, yti) => {
      ctx.beginPath();
      ctx.lineWidth = 1
      let grad = ctx.createLinearGradient(0, 0, canvasWidth, 0); //创建渐变 初始坐标到终点坐标
      grad.addColorStop(0, 'red');
      grad.addColorStop(1, '#fff');
      ctx.strokeStyle = grad
      for (let x = 0; x < canvasWidth; x++) {
        const radians = x / canvasWidth * Math.PI * 2
        const scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5
        const y = Math.sin(x * 0.02 + speed) * yti * scale + 250
        ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.closePath()
    }
    const drawImg = () => {
      xSpeed += 0.1
      xSpeed2 += 0.05
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      draw(xSpeed, amplitude)
      draw(xSpeed2, amplitude2)
      requestAnimationFrame(drawImg)
    }
    requestAnimationFrame(drawImg)
  }, [])  
  return (
    <div className="volumes">
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default Volumes;
