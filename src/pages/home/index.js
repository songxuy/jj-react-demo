import React, { useState } from 'react';
import './index.scss';
import ArticleItem from '@/components/ArticleItem'
import {
  useParams
} from "react-router-dom";
function Home() {
  const [list, setList] = useState(
    [
      {
        id: 1,
        label: '',
        auther: 'yck',
        create_time: '2020-10-30 08:30',
        tags: ['JavaScript', '前端'],
        title: '前端前沿观察，Cookie 居然可以这样整了',
        isLike: false,
        like: 42,
        commentsNum: 18
      },
      {
        id: 2,
        label: '',
        auther: '沉默王二',
        create_time: '2020-10-30 06:30',
        tags: ['后端', 'github'],
        title: 'GitHub上最励志的计算机自学教程（重制版）',
        isLike: false,
        like: 86,
        commentsNum: 2
      },
      {
        id: 3,
        label: '',
        auther: 'ssh',
        create_time: '2020-10-30 10:30',
        tags: ['Reactjs', '前端'],
        title: '我在大厂写React，学到了什么？性能优化篇',
        isLike: true,
        like: 40,
        commentsNum: 3
      },
      {
        id: 4,
        label: '沸点',
        auther: '稀土军',
        create_time: '2020-10-22 08:30',
        tags: ['掘金官方'],
        title: '【掘金1024程序员节】“码”上测一测你的程序员图鉴',
        isLike: false,
        like: 258,
        commentsNum: 2196
      },
      {
        id: 1,
        label: '',
        auther: 'yck',
        create_time: '2020-10-30 08:30',
        tags: ['JavaScript', '前端'],
        title: '前端前沿观察，Cookie 居然可以这样整了',
        isLike: false,
        like: 42,
        commentsNum: 18
      },
      {
        id: 2,
        label: '',
        auther: '沉默王二',
        create_time: '2020-10-30 06:30',
        tags: ['后端', 'github'],
        title: 'GitHub上最励志的计算机自学教程（重制版）',
        isLike: false,
        like: 86,
        commentsNum: 2
      },
      {
        id: 3,
        label: '',
        auther: 'ssh',
        create_time: '2020-10-30 10:30',
        tags: ['Reactjs', '前端'],
        title: '我在大厂写React，学到了什么？性能优化篇',
        isLike: true,
        like: 40,
        commentsNum: 3
      },
      {
        id: 4,
        label: '沸点',
        auther: '稀土军',
        create_time: '2020-10-22 08:30',
        tags: ['掘金官方'],
        title: '【掘金1024程序员节】“码”上测一测你的程序员图鉴',
        isLike: false,
        like: 258,
        commentsNum: 2196
      },
      {
        id: 1,
        label: '',
        auther: 'yck',
        create_time: '2020-10-30 08:30',
        tags: ['JavaScript', '前端'],
        title: '前端前沿观察，Cookie 居然可以这样整了',
        isLike: false,
        like: 42,
        commentsNum: 18
      },
      {
        id: 2,
        label: '',
        auther: '沉默王二',
        create_time: '2020-10-30 06:30',
        tags: ['后端', 'github'],
        title: 'GitHub上最励志的计算机自学教程（重制版）',
        isLike: false,
        like: 86,
        commentsNum: 2
      },
      {
        id: 3,
        label: '',
        auther: 'ssh',
        create_time: '2020-10-30 10:30',
        tags: ['Reactjs', '前端'],
        title: '我在大厂写React，学到了什么？性能优化篇',
        isLike: true,
        like: 40,
        commentsNum: 3
      },
      {
        id: 4,
        label: '沸点',
        auther: '稀土军',
        create_time: '2020-10-22 08:30',
        tags: ['掘金官方'],
        title: '【掘金1024程序员节】“码”上测一测你的程序员图鉴',
        isLike: false,
        like: 258,
        commentsNum: 2196
      }
    ]
  );
  /* let { name } = useParams(); */
  const [active, setActive] = useState(0);
  const changeLike = (item) => {
    list.forEach(it => {
      if (it.id === item.id) {
        it.isLike = !it.isLike
        if (it.isLike) {
          it.like++
        } else {
          it.like--
        }
      }
    })
    setList([...list]);
  }
  return (
    <div className="home">
      <p className="tab">
        <span className={active===0?'active':''} onClick={() => setActive(0)}>热门</span>
        <span className={active===1?'active':''} onClick={() => setActive(1)}>最新</span>
        <span className={active===2?'active':''} onClick={() => setActive(2)}>热榜</span>
      </p>
      {
        list.map((item, index) => {
          return <ArticleItem key={item.id + index.toString()} item={item} changeLike={changeLike}/>
        })
      }
    </div>
  );
}

export default Home;
