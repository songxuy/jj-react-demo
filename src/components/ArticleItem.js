import React from 'react';
import './css/index.scss'
import { getDay } from '@/utils/timeFormate.js'
function ArticleItem(props) {
  return (
    <div className="ArticleItem">
      <div className="user-info">{props.item.label ? <p className="label">{props.item.label}</p> : undefined}<p>{props.item.auther}</p><p>{getDay(props.item.create_time)}</p>
        <p className="tag">
          {
            props.item.tags.map((item, key) => {
              if (key !== props.item.tags.length - 1) {
                return <span key={item} className='hasmore'>{item}</span>
              } else {
                return <span key={item}>{item}</span>
              }
            })
          }
        </p>
      </div>
        <div className="art-title"><p>{props.item.title}</p></div>
      <div className="active-btn">
        <p onClick={() => props.changeLike(props.item)}>{ props.item.isLike ? <img src={require('../assets/images/zan2.svg')} alt="zan" /> : <img src={require('../assets/images/zan.svg')} alt="zan"/>} <span className={props.item.isLike ? 'count2' : 'count'}>{props.item.like}</span></p>
        <p><img src={require('../assets/images/comment.svg')} alt="comment"/><span className="count">{props.item.commentsNum}</span></p>
      </div>
    </div>
  );
}

export default ArticleItem;