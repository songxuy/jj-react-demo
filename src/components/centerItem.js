import React from 'react';
import './css/centerItem.scss'
import { getDay } from '@/utils/timeFormate.js'
function centerItem(props) {
  return (
    <div className="centerItem">
      <div className="top-info">
        <div className="icon"><img className="usericon" src={require('../assets/images/icon.png')} alt="user icon"/></div>
        <div className="centerItem-info">
          <p>{props.item.auther}</p>
          <p><span>{props.item.pos}</span><span style={{margin: '0 5px'}}>·</span><span>{getDay(props.item.time)}</span></p>
        </div>
        { props.item.isFocus ? <div className="gz-btn1">已关注</div> :  <div className="gz-btn2">关注</div>}
      </div>
      <div className="center-content">
        <p className="title">{props.item.title}</p>
        <p className="content">{props.item.content}</p>
      </div>
      <div className="active-btn">
        <p onClick={() => props.changeLike(props.item)}>{ props.item.hasZan ? <img src={require('../assets/images/zan2.svg')} alt="zan" /> : <img src={require('../assets/images/zan.svg')} alt="zan"/>} <span className={props.item.hasZan ? 'count2' : 'count'}>{props.item.zanNum}</span></p>
        <p><img src={require('../assets/images/comment.svg')} alt="comment"/><span className="count">{props.item.commentNum}</span></p>
      </div>
    </div>
  );
}

export default centerItem;