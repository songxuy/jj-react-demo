import React from 'react'
import { Button } from 'antd';
import './css/comment.scss'
import { getDay } from '@/utils/timeFormate.js'
function CommentItem(props) {
  return (
    <div className="container">
      <div className="icon">
        <img src={require('../assets/images/icon.png')} alt="user icon" />
      </div>
      <div className="comment_info">
        <p className="name">{props.item.name}</p>
        <p className="action">{props.item.action}</p>
        <p className="time">{ getDay(props.item.time) }</p>
      </div>
      <div className="btn">
        {
          props.item.isLike ? <Button type="primary" onClick={ () => props.changeLike(props.item.id) }>取消关注</Button>
            : <Button className="success" onClick={ () => props.changeLike(props.item.id) }>关注</Button>
        }
      </div>
    </div>
  )
}
export default CommentItem