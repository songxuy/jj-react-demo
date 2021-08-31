import React from 'react';
import './index.scss';
function Box() {
  return (
    <div className="sky-box" id="camera">
    <div className="space">
      <img className="front" src="//yun.dui88.com/tuia/junhehe/skybox/front.jpg" alt="" />
      <img className="back" src="//yun.dui88.com/tuia/junhehe/skybox/back.jpg" alt="" />
      <img className="left" src="//yun.dui88.com/tuia/junhehe/skybox/left.jpg" alt="" />
      <img className="right" src="//yun.dui88.com/tuia/junhehe/skybox/right.jpg" alt="" />
      <img className="bottom" src="//yun.dui88.com/tuia/junhehe/skybox/bottom.jpg" alt="" />
      <img className="top" src="//yun.dui88.com/tuia/junhehe/skybox/top.jpg" alt="" />
    </div>
  </div>
  );
}

export default Box;