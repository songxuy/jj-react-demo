import React from 'react';
import './index.scss'
function Center() {
  return (
    <div className="center">
      <div className="user-info">
        <div className="icon">
          <img className="usericon" src={require('../../assets/images/icon.png')} alt="user icon"/>
        </div>
        <div className="user-name">小白鸽S</div>
        <div className="user-desc">
          <p>+ 你从事什么职业？</p>
          <p>+ 你的武器库有哪些武（ji）器（shu）？</p>
        </div>
        <div className="user-tab">
          <p>
            <span>8</span>
            <span>关注</span>
          </p>
          <p>
            <span>0</span>
            <span>关注者</span>
          </p>
          <p>
            <span>0</span>
            <span>掘力值</span>
          </p>
          <p>
            <span>设置</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Center;
