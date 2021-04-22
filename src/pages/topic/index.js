import React, { useEffect } from 'react';
import './index.scss';
function Topic() {
  /* const cssHelper = (el, prototype) => {
    for (let i in prototype) {
      el.style[i] = prototype[i]
    }
  } */
  /* const generateWatemark = () => {
    const waterHeight = 100;
    const waterWidth = 180;
    const { clientWidth, clientHeight } = document.documentElement || document.body;
    const column = Math.floor(clientWidth / waterWidth);
    const rows = Math.floor(clientHeight / waterHeight);
    const waterWrapper = document.createElement('div');
    console.log(clientWidth, clientHeight, rows, column);
    for (let i = 0; i < column * rows; i++) {
        const wrap = document.createElement('div');
        wrap.innerHTML = '凉风有信';
        cssHelper(wrap, Object.create({
          position: 'relative',
          display: 'inline-block',
          fontSize: `16px`,
          color: '#000',
          lineHeight: '100px',
          opacity: 0.1,
          transform: `rotate(-15deg)`,
          transformOrigin: '0 0',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          width: `${waterWidth}px`,
          height: `${waterHeight}px`,
          flex: `0 0 ${waterWidth}px`,
          textAlign: 'center'
        }));
        waterWrapper.appendChild(wrap);
    }
    let parent = document.querySelector('.topic');
    parent.appendChild(waterWrapper);
  } */
  const createWaterMark = () => { 
    const angle = -20;
    const txt = '凉风有信';
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 180, 100);
    ctx.fillStyle = '#000';
    ctx.globalAlpha = 0.1;
    ctx.font = `16px serif`;
    ctx.rotate(Math.PI / 180 * angle);
    ctx.fillText(txt, 0, 50);
    return canvas.toDataURL();
  }
  const createCanvas = () => {
    const watermakr = document.createElement('div');
    watermakr.className = 'watermark';
    watermakr.style.backgroundImage = `url(${createWaterMark()})`;
    let parent = document.querySelector('.topic');
    parent.appendChild(watermakr);
  }
  /* const createWaterMarks = () => {
    const svgStr =
      `<svg xmlns="http://www.w3.org/2000/svg" width="180px" height="100px">
        <text x="0px" y="30px" dy="16px"
        text-anchor="start"
        stroke="#000"
        stroke-opacity="0.1"
        fill="none"
        transform="rotate(-20)"
        font-weight="100"
        font-size="16"
        >
          凉风有信
        </text>
      </svg>`;
    return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`;
  } */
  /* const createSvg = () => {
    const watermakr = document.createElement('div');
    watermakr.className = 'watermark';
    watermakr.style.backgroundImage = `url(${createWaterMarks()})`;
    let parent = document.querySelector('.topic');                                                                  
    parent.appendChild(watermakr);
  } */
  useEffect(() => {
    //generateWatemark();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    createCanvas()
    // createSvg();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="topic">
      topic page
    </div>
  );
}

export default Topic;
