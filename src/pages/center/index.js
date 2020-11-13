import React , { useState, useEffect, useRef, useCallback } from 'react';
import './index.scss'
import CenterItem from '@/components/centerItem';
function Center() {
  const flagList = [
    '你的武器库有哪些武（ji）器（shu）？',
    '你的人生格言是什么？',
    '你的信仰是什么？',
    '你有那些爱好？'
  ];
  const [articleList, setArticleList] = useState(
    [
      {
        id: '1',
        auther: '谭光志',
        pos: '前端工程师',
        time: '2020-11-08 12:45:33',
        title: '前端性能优化 24 条建议（2020）',
        content: '性能优化是把双刃剑，有好的一面也有坏的一面。好的一面就是能提升网站性能，坏的一面就是配置...',
        isFocus: true,
        zanNum: 1083,
        commentNum: 79,
        hasZan: true
      },
      {
        id: '2',
        auther: '阿宝哥',
        pos: '全栈修仙',
        time: '2020-11-07 12:45:33',
        title: '这些高阶的函数技术，你掌握了么 ',
        content: '在 JavaScript 中，函数为一等公民，所谓的 “一等公民”，指的是函数与其他数据...',
        isFocus: false,
        zanNum: 506,
        commentNum: 66,
        hasZan: true
      },
      {
        id: '3',
        auther: '谭光志',
        pos: '前端工程师',
        time: '2020-11-05 12:45:33',
        title: '手把手带你入门前端工程化——超详细教程',
        content: '部分小节提供了非常详细的实战教程，让大家动手实践。 另外我还写了一个前端工程化 demo...',
        isFocus: false,
        zanNum: 758,
        commentNum: 101,
        hasZan: true
      },
      {
        id: '4',
        auther: '天明夜尽',
        pos: '前端工程师',
        time: '2020-11-03 12:45:33',
        title: '恕我直言，你可能连 GitHub 搜索都不会用 - 如何精准搜索的神仙技巧',
        content: '今天给大家带来的是 在 GitHub 上如何精准搜索的神仙技巧。 以下为【前端GitHu...',
        isFocus: false,
        zanNum: 658,
        commentNum: 40,
        hasZan: true
      }
    ]
  )
  const [flagIdx, setFlagIdx] = useState(0);
  const [tabIdx, setTabIdx] = useState(0);
  const timer = useRef(null)
  const [top, setTop] = useState(0)
  const changeLike = (item) => {
    articleList.forEach(it => {
      if (it.id === item.id) {
        it.hasZan = !it.hasZan
        if (it.hasZan) {
          it.zanNum++
        } else {
          it.zanNum--
        }
      }
    })
    setArticleList([...articleList]); // 重新赋值render
  }
  useEffect(() => {
    timer.current = flagIdx;
  })
  useEffect(() => {
    let id = setInterval(() => {
      if(timer.current === flagList.length - 1) {
        setFlagIdx(0);
      } else {
        setFlagIdx(timer.current + 1)
      }
    }, 2000)
    return () => {
      clearInterval(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleScroll = useCallback(() => {
    //滚动条高度
    // let clientHeight = document.documentElement.clientHeight; //可视区域高度
    let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
    // let scrollHeight =document.documentElement.scrollHeight; //滚动内容高度
    setTop(scrollTop);
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, [handleScroll])
  return (
    <div className="center">
      <div className="user-info">
        <div className="icon">
          <img className="usericon" src={require('../../assets/images/icon.png')} alt="user icon"/>
        </div>
        <div className="user-name">小白鸽S</div>
        <div className="user-desc">
          <p>+ 你从事什么职业？</p>
          <p>+ { flagList[flagIdx] }</p>
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
          <p className="btn">
            设置
          </p>
        </div>
      </div>
      <div className={top > 430 ? 'user-tab3' : 'user-tab2' }>
        <p className={tabIdx === 0 ? 'active': ''} onClick={ () => setTabIdx(0) }>动态</p>
        <p className={tabIdx === 1 ? 'active': ''} onClick={ () => setTabIdx(1) }>文章</p>
        <p className={tabIdx === 2 ? 'active': ''} onClick={ () => setTabIdx(2) }>沸点</p>
        <p className={tabIdx === 3 ? 'active': ''} onClick={ () => setTabIdx(3) }>赞 <span>447</span></p>
      </div>
      <div className="user-content">
        {
          articleList.map(it => {
            return <CenterItem key={it.id} item={it} changeLike={changeLike}/>
          })
        }
      </div>
    </div>
  );
}

export default Center;
