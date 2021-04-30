import React, { useState } from 'react';
import CommentItem from '@/components/commentItem'
function Focus() {
  let [commentList, setCommentList] = useState([
    {
      id: 1,
      name: '不开心的你',
      action: '关注了你',
      time: '2021-03-29 12:00:00',
      isLike: false
    },
    {
      id: 2,
      name: 'DOVE',
      action: '关注了你',
      time: '2021-02-28 12:00:00',
      isLike: true
    },
    {
      id: 3,
      name: 'LV',
      action: '关注了你',
      time: '2021-04-27 12:00:00',
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
    <div className="focus">
      {
        commentList.map((it, idx) => {
          return <CommentItem item={it} key={idx} changeLike={ changeLike }/>
        })
      }
    </div>
  );
}

export default Focus;
