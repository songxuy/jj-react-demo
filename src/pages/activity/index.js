import React, { useRef, useEffect} from 'react';
function Activity() {
  let canvas = useRef(null)
  useEffect(() => {
    canvas.current.height = 500;
    canvas.current.width = 350;
    let canvasWidth = canvas.current.width;
    let canvasHeight = canvas.current.height;
    let xOffset1 = 0
    let xOffset2 = 0.75
    let rangeValue = 0.8;
    let speed = 0.05
    let nowRange = 0
    let isDrawCircle = false
    const ctx = canvas.current.getContext('2d');
    const drawSin = (xOffset = 0, color) => {
      const points = [];
      const width = canvasWidth;
      const height = canvasHeight;
      const startX = 0;
      const waveWidth = 0.05; // 波浪宽度,数越小越宽
      const waveHeight = 6; // 波浪高度,数越大越高
      // const xOffset = 0; // 水平位移
      ctx.beginPath();
      for (let x = startX; x < startX + width; x = x + 30 / width) {
        const y = waveHeight * Math.sin((startX + x) * waveWidth + xOffset);
        points.push([x, (1 - nowRange)*height + y]);
        ctx.lineTo(x, (1 - nowRange)*height + y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(startX, height);
      ctx.lineTo(points[0][0], points[0][1]);
      const radius = width / 2;
      const grd = ctx.createLinearGradient(radius, radius, radius, height);
      grd.addColorStop(0, color[0]);
      grd.addColorStop(1, color[1]);
      ctx.fillStyle = grd;
      ctx.fill();
    }
    const drawCircle = () => {
      const r = canvasWidth / 2;
      const lineWidth = 5;
      const cR = r - (lineWidth);
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.arc(r, r, cR, 0, 2 * Math.PI);
      ctx.strokeStyle = '#dfe6ec'
      ctx.stroke();
      ctx.clip();
      isDrawCircle = true;
    }
    const draw = () => {
      /* const canvas = this.canvas;
      const ctx = canvas.getContext('2d'); */
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      // 曲线绘制
      if (!isDrawCircle) {
        drawCircle(ctx);
      }
      if (nowRange < rangeValue) {
        nowRange += 0.002;
      }
      /* this.drawSin(ctx, this.xOffset1, ['red', 'orange']) */
      drawSin(xOffset2, ['#F39C6B', '#A0563B']);
      drawSin(xOffset1, ['rgba(243, 156, 107, 0.48)', 'rgba(160, 86, 59, 0.48)']);
      xOffset1 += speed;
      xOffset2 += speed;
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }, [])
  return (
    <div className="activity">
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default Activity;