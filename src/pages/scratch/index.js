import React, { useEffect, useRef } from 'react';
import './index.scss';
function Scratch() {
  let canvas = useRef(null)
  useEffect(() => {
    canvas.current.width = document.documentElement.clientWidth
    canvas.current.height = 300
    const ctx = canvas.current.getContext('2d');
    // 填充的颜色
    ctx.fillStyle = 'darkgray'
    // 填充矩形 fillRect(起始X,起始Y,终点X,终点Y)
    ctx.fillRect(0, 0, canvas.current.width, canvas.current.height)
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.font = 'bold 14px Arial' //文字样式：加粗 16像素 字体Arial
    // 绘制填充文字
    ctx.fillText('刮刮卡', canvas.current.width / 2, canvas.current.height / 2)
    let isDraw = false
    canvas.current.ontouchstart= function () {
        isDraw = true
    }
    canvas.current.ontouchmove = function (e) {
      if (!isDraw) return
      // 计算鼠标在canvas里的位置
      var bbox = canvas.current.getBoundingClientRect();
      const x = e.targetTouches[0].pageX - bbox.left
      const y = e.targetTouches[0].pageY - bbox.top
      // 设置globalCompositeOperation
      ctx.globalCompositeOperation = 'destination-out'
      // 画圆
      ctx.arc(x, y, 10, 0, 2 * Math.PI)
      // 填充圆形
      ctx.fill()
    }
    canvas.current.ontouchend = function () {
        isDraw = false
    }
  }, [])
  return (
    <div className="scratch">
      <canvas ref={canvas}></canvas>
      <div className="text">恭喜您获得100w</div>
    </div>
  );
}

export default Scratch;
