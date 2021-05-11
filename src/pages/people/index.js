import React, { useRef, useEffect } from 'react';
import './index.scss'
function People() {
  let canvas = useRef(null)

  useEffect(() => {
    canvas.current.height = 500;
    canvas.current.width = 350;
    let canvasHeight = 500
    let canvasWidth = 350
    let ctx = canvas.current.getContext('2d');
    let time = 0
    const run = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      time = time + 0.05
      drawHead(time)
      drawBody(time)
      drawShadow(time)
      drawFeet(time)
      ctx.restore()
      requestAnimationFrame(run);
    }
    const drawHead = (t) => {
      ctx.save()
      ctx.beginPath()
      ctx.translate(0, Math.sin(t) * 4)
      ctx.arc(150, 55, 35, 0, 2 * Math.PI)
      ctx.fillStyle= "#fff"
      ctx.fill()
      ctx.closePath()
      ctx.restore()
    }
    const drawBody = (t) => {
      ctx.beginPath()
      ctx.save()
      ctx.rotate(Math.sin(t) * Math.PI / 180 * -1)
      ctx.translate(75, Math.sin(t) * 4 + 100)
      ctx.scale(0.5, 0.5)
      const body = new Path2D('M125,284 L1,284 C0.33333333,94.6666667 35,0 105,0 C115.666667,4 122.333333,20.6666667 125,50 L125,284 Z')
      body.moveTo(85, 70)
      ctx.fillStyle= "#fff"
      ctx.fill(body)
      ctx.restore()
      ctx.closePath()
    }
    const drawShadow = (t) => {
      ctx.beginPath()
      ctx.save()
      ctx.scale(0.5, 0.5)
      ctx.translate(210, 750)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.ellipse(0, 0, 120 + Math.sin(t) * 10, 8, 0, 0, 2 * Math.PI) //画椭圆 暂时只有chrome支持该方法
      ctx.fill()
      ctx.restore()
      ctx.closePath()
    }
    const drawFeet = (t) => {
      t = t / 2
      ctx.save()
      ctx.scale(0.5, 0.5)
      ctx.translate(170, 720)
      const foot = new Path2D('M23,0 C67,0 80,16 80,22 C80,26 78.6666667,28 76,28 C29.3333333,28 6,28 6,28 C6,28 -1.34111707e-14,30 0,17 C1.42108547e-14,4 10,1.9505735e-16 13,0 C16,0 13,0 23,0 Z')
      
      ctx.save()
      ctx.translate(Math.cos(t) * -50, Math.sin(t) > 0 ? Math.sin(t) * -35 : 0)
      if (t < Math.PI) {
        ctx.rotate(Math.sin(t) * Math.PI / 180 * -5)
      }
      ctx.fillStyle= "#fff"
      ctx.fill(foot)
      ctx.restore()

      ctx.save()
      ctx.translate(Math.cos(t + Math.PI) * -50, Math.sin(t + Math.PI) > 0 ? Math.sin(t + Math.PI) * -35 : 0)
      if (t > Math.PI) {
        ctx.rotate(Math.sin(t + Math.PI) * Math.PI / 180 * -5)
      }
      ctx.fillStyle= "#fff"
      ctx.fill(foot)
      ctx.restore()
    }
    requestAnimationFrame(run);
  }, [])
  return (
    <div className="people">
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default People;