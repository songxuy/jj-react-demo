import React, { useState, useEffect, useCallback, useContext } from 'react';
import './index.scss';
import ArticleItem from '@/components/ArticleItem'
import {
  useParams
} from "react-router-dom";
import { CaretDownOutlined } from '@ant-design/icons';
import {
  Link
} from "react-router-dom";
import { Context } from '@/context';
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
  let { name } = useParams();
  const [active, setActive] = useState(0);
  const tagList = [
    {
      name: '后端',
      tags: ['Java', '后端', 'Spring Boot', 'Python', 'Go', 'Spring', 'MySQL', 'Redis', '数据库', '算法', '架构', 'JVM', '服务器', 'Linux', '设计模式'],
      showAll: false,
      nowTab: 0
    },
    {
      name: '前端',
      tags: ['JavaScript', '前端', 'Vue.js', 'React.js' ,'Node.js', 'CSS', 'Webpack', '微信小程序', '面试', 'TypeScript', 'Flutter', '浏览器', 'Github', 'Promise', '前端框架'],
      showAll: false,
      nowTab: 0
    },
    {
      name: 'Android',
      tags: ['Android', 'Flutter', 'Java', 'Kotlin' ,'源码', 'Android Jetpack', 'gradle', 'Github', 'Google', '面试', '开源', '架构', '性能优化', 'RxJava', 'Android Studio'],
      showAll: false,
      nowTab: 0
    }
  ]
  let [tabIndex, setTabIndex] = useState(0);
  const [nowTagList, setNowTagList] = useState({})
  const tabList = [
    { name: '推荐', link: '/home/推荐' },
    { name: '关注', link: '/home/关注' },
    { name: '后端', link: '/home/后端' },
    { name: '前端', link: '/home/前端' },
    { name: 'Android', link: '/home/Android' },
    { name: 'iOS', link: '/home/iOS' },
    { name: '人工智能', link: '/home/人工智能' },
    { name: '开发工具', link: '/home/开发工具' },
    { name: '代码人生', link: '/home/代码人生' },
    { name: '阅读', link: '/home/阅读' },
  ]
  const top = useContext(Context);
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
    setList([...list]); // 重新赋值render
  }
  const setShowAll = (val) => {
    setNowTagList({...nowTagList, showAll: val});
  }
  const changeTab = useCallback(
    (i) => {
      if (i !== tabIndex) {
        setTabIndex(i);
      }
    }, [tabIndex]);
  useEffect(() => {
    for(const key in tagList) {
      if (tagList[key].name === name) {
        setNowTagList({...tagList[key]});
        break;
      }
    }
    return () => {
      setNowTagList([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])
  useEffect(() => {
    const str = decodeURIComponent(window.location.pathname);
    if (str.includes('/home')) {
      for(let i = 0;i < tabList.length; i++) {
        if (tabList[i].link === str) {
          setTabIndex(i);
          break;
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname])
  return (
    <div className="home" style={{marginTop: '120px'}}>
      <div className="header-bottom" style={{transform: top > 150 ? 'translate3d(0,-60px,0)' : 'translate3d(0,0,0)'}}>
        <ul className="tab-ul">
            {
              tabList.map((item,index) => {
                return <li key={item.name} className={tabIndex===index?'active':''} onClick={() => changeTab(index)}><Link to={item.link}>{item.name}</Link></li>
              })
            }
        </ul>
      </div>
      {
        nowTagList.tags && nowTagList.tags.length ? <div className="tag-list">
          <p className={nowTagList.nowTab === 0 ? 'active' : ''} onClick={() => setNowTagList({ ...nowTagList, nowTab: 0 })}>全部</p>
        {
          (nowTagList.showAll ? nowTagList.tags : nowTagList.tags.slice(0, 9)).map((it,idx) => {
            return <p key={it} onClick={() => setNowTagList({...nowTagList, nowTab: idx + 1}) } className={nowTagList.nowTab === idx+1 ? 'active' : ''}>{it}</p>
          })
        }
        { !nowTagList.showAll ? <p onClick={() => setShowAll(true)}>展开<CaretDownOutlined style={{color: '#8a9aa9'}}/></p> : undefined}
      </div> : undefined
      }
      { name === '推荐' ? <p className="tab">
        <span className = {active === 0 ?'active' : ''} onClick={() => setActive(0)}>热门</span>
        <span className = {active === 1 ?'active' : ''} onClick={() => setActive(1)}>最新</span>
        <span className = {active === 2 ?'active' : ''} onClick={() => setActive(2)}>热榜</span>
      </p> : undefined }
      {
        list.map((item, index) => {
          return <ArticleItem key={item.id + index.toString()} item={item} changeLike={changeLike}/>
        })
      }
    </div>
  );
}

export default Home;
