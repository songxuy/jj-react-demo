import React, { useState } from 'react';
import CommentItem from '@/components/commentItem'
function Comment() {
  let [commentList, setCommentList] = useState([
    {
      id: 1,
      name: 'XYZC企服解决方案供应商',
      action: '评论了你',
      time: '2021-04-29 12:00:00',
      isLike: false
    },
    {
      id: 2,
      name: '腾讯',
      action: '评论了你',
      time: '2021-04-28 12:00:00',
      isLike: true
    },
    {
      id: 3,
      name: '字节跳动',
      action: '评论了你',
      time: '2021-04-27 12:00:00',
      isLike: true
    },
    {
      id: 4,
      name: 'Taro',
      action: '评论了你',
      time: '2021-04-26 12:00:00',
      isLike: false
    }
  ])
  const changeLike = (id) => {
    commentList.forEach(item => {
      if (item.id === id) {
        item.isLike = !item.isLike
      }
    })
    setCommentList([...commentList])
  }
  return (
    <div className="comment">
      {
        commentList.map((it, idx) => {
          return <CommentItem item={it} key={idx} changeLike={ changeLike }/>
        })
      }
    </div>
  );
}

export default Comment;
