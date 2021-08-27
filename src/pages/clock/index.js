import React, { useEffect, useRef } from 'react';
import './index.scss';
function Clock() {
  let canvas = useRef(null)
  let timer = useRef(null)
  useEffect(() => {
    canvas.current.height = 300
    canvas.current.width = 300
    const ctx = canvas.current.getContext('2d')
    const draw = () => {
      ctx.save()
      ctx.clearRect(0, 0, 300, 300)
      ctx.translate(150, 150)
      ctx.save()
      
      ctx.beginPath()
      // 画圆线使用arc(中心点X,中心点Y,半径,起始角度,结束角度)
      ctx.arc(0, 0, 100, 0, 2 * Math.PI)
      ctx.stroke() // 执行画线段的操作
      ctx.closePath()

      // 画小圆
      ctx.beginPath()
      ctx.arc(0, 0, 5, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.closePath()
      
      // 获取当前 时，分，秒
      let time = new Date()
      let hour = time.getHours() % 12
      let min = time.getMinutes()
      let sec = time.getSeconds()

      // 时针
      ctx.rotate(2 * Math.PI / 12 * hour + 2 * Math.PI / 12 * (min / 60) - 90)
      ctx.beginPath()
      // moveTo设置画线起点
      ctx.moveTo(-10, 0)
      // lineTo设置画线经过点
      ctx.lineTo(40, 0)
      // 设置线宽
      ctx.lineWidth = 10
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
      ctx.save()

      // 分针
      ctx.rotate(2 * Math.PI / 60 * min + 2 * Math.PI / 60 * (sec / 60) - 90)
      ctx.beginPath()
      ctx.moveTo(-10, 0)
      ctx.lineTo(60, 0)
      ctx.lineWidth = 5
      ctx.strokeStyle = 'blue'
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
      ctx.save()

      //秒针
      ctx.rotate(2 * Math.PI / 60 * sec - 90)
      ctx.beginPath()
      ctx.moveTo(-10, 0)
      ctx.lineTo(80, 0)
      ctx.strokeStyle = 'red'
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
      ctx.save()

      // 绘制刻度，也是跟绘制时分秒针一样，只不过刻度是死的
      ctx.lineWidth = 1
      for (let i = 0; i < 60; i++) {
          ctx.rotate(2 * Math.PI / 60)
          ctx.beginPath()
          ctx.moveTo(90, 0)
          ctx.lineTo(100, 0)
          // ctx.strokeStyle = 'red'
          ctx.stroke()
          ctx.closePath()
      }
      ctx.restore()
      ctx.save()
      ctx.lineWidth = 5
      for (let i = 0; i < 12; i++) {
          ctx.rotate(2 * Math.PI / 12)
          ctx.beginPath()
          ctx.moveTo(85, 0)
          ctx.lineTo(100, 0)
          // ctx.strokeStyle = 'red'
          ctx.stroke()
          ctx.closePath()
      }

      ctx.restore()
      ctx.restore()
    }

    timer.current = setInterval(() => {
      draw()
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className="clock">
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default Clock;
