import React, { useState } from 'react';
import CommentItem from '@/components/commentItem'
function Like() {
  let [commentList, setCommentList] = useState([
    {
      id: 1,
      name: '不开心的你',
      action: '点赞了你',
      time: '2021-03-29 12:00:00',
      isLike: false
    },
    {
      id: 2,
      name: 'DOVE',
      action: '点赞了你',
      time: '2021-02-28 12:00:00',
      isLike: true
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
    <div className="like">
      {
        commentList.map((it, idx) => {
          return <CommentItem item={it} key={idx} changeLike={ changeLike }/>
        })
      }
    </div>
  );
}

export default Like;
