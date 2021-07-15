import React, { useState, useEffect, useRef } from 'react';
import './index.scss'
function CountDown() {
  let [time, setTime] = useState(34364)
  let timer = useRef(null)
  useEffect(() => {
    let dom = document.querySelectorAll('.cat-flip-content')
    setTimeout(() => {
      if (getTime('s', time).slice(1) !== getTime('s', time - 1).slice(1)) {
        dom[5].classList.add('down');
      }
      if (getTime('s', time).slice(0, 1) !== getTime('s', time - 1).slice(0, 1)) {
        dom[4].classList.add('down');
      }
      if (getTime('m', time).slice(1) !== getTime('m', time - 1).slice(1)) {
        dom[3].classList.add('down');
      }
      if (getTime('m', time).slice(0, 1) !== getTime('m', time - 1).slice(0, 1)) {
        dom[2].classList.add('down');
      }
      if (getTime('h', time).slice(1) !== getTime('h', time - 1).slice(1)) {
        dom[1].classList.add('down');
      }
      if (getTime('h', time).slice(0, 1) !== getTime('h', time - 1).slice(0, 1)) {
        dom[0].classList.add('down');
      }
    }, 200)
    timer.current = setInterval(() => {
      setTime(t => t - 1)
      for (let d of dom) {
        d.classList.remove('down')
      }
    }, 900)
    return () => {
      clearInterval(timer.current)
    }
  }, [time])

  const getTime = (str, t) => {
    switch (str) {
      case 'h': return Math.floor(t / 3600).toString().padStart(2, '0');
      case 'm': return Math.floor((t - Math.floor(t / 3600) * 3600) / 60).toString().padStart(2, '0');
      case 's': return Math.floor(t - Math.floor(t / 3600) * 3600 - Math.floor((t - Math.floor(t / 3600) * 3600) / 60) * 60).toString().padStart(2, '0');
      default: return ''
    }
  }
  return (
    <div className="countDown">
      <div className="box">
        <p className="title">距结束</p>
        <div className="cat-count-down-wrap">
          <div className="cat-flip-item-content">
            <div>
              <div className="cat-flip-container">
                <div className="cat-flip-content">
                  <div className={`cat-flip-item front number${getTime('h', time).slice(0,1)}`}></div>
                  <div className={`cat-flip-item back number${getTime('h', time).slice(0,1) === '0' ? '9' : getTime('h', time).slice(0,1) - 1}`}></div>
                </div>
              </div>
            </div>
            <div>
              <div className="cat-flip-container">
                <div className="cat-flip-content">
                  <div className={`cat-flip-item front number${getTime('h', time).slice(1)}`}></div>
                  <div className={`cat-flip-item back number${getTime('h', time).slice(1) === '0' ? '9' : getTime('h', time).slice(1) - 1}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="dot">:</div>
          <div className="cat-flip-item-content">
            <div >
              <div className="cat-flip-container">
                <div className="cat-flip-content">
                  <div className={`cat-flip-item front number${getTime('m', time).slice(0,1)}`}></div>
                  <div className={`cat-flip-item back number${getTime('m', time).slice(0,1) === '0' ? '5' : getTime('m', time).slice(0,1) - 1}`}></div>
                </div>
              </div>
            </div>
            <div >
              <div className="cat-flip-container">
                <div className="cat-flip-content">
                  <div className={`cat-flip-item front number${getTime('m', time).slice(1)}`}></div>
                  <div className={`cat-flip-item back number${getTime('m', time).slice(1) === '0' ? '9' : getTime('m', time).slice(1) - 1}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="dot">:</div>
          <div className="cat-flip-item-content">
            <div >
              <div className="cat-flip-container">
                <div className="cat-flip-content">
                  <div className={`cat-flip-item front number${getTime('s', time).slice(0, 1)}`}></div>
                  <div className={`cat-flip-item back number${getTime('s', time).slice(0,1) === '0' ? '5' : getTime('s', time).slice(0,1) - 1}`}></div>
                </div>
              </div>
            </div>
            <div >
              <div className="cat-flip-container">
                <div className="cat-flip-content">
                  <div className={`cat-flip-item front number${getTime('s', time).slice(1)}`}></div>
                  <div className={`cat-flip-item back number${getTime('s', time).slice(1) === '0' ? '9' : getTime('s', time).slice(1) - 1}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;