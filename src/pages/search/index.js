import React, { useState, useEffect, useContext } from 'react';
import './index.scss';
import { Context } from '@/context';
import queryString from 'query-string'
function Search(props) {
  const [active, setActive] = useState(0);
  let [tabIndex, setTabIndex] = useState(0);
  let [data] = useState([])
  const tabList = [
    { name: '综合', link: '/home/推荐' },
    { name: '文章', link: '/home/关注' },
    { name: '小册', link: '/home/后端' },
    { name: '标签', link: '/home/前端' },
    { name: '用户', link: '/home/Android' }
  ]
  const changeTab = (i) => {
    setTabIndex(i)
    let obj = {
      ...queryString.parse(props.location.search),
      type: i
    }
    props.history.push({
      pathname: '/search',
      search: "?" + queryString.stringify(obj),
      query: {
        a:1
      }
    })
  }
  const activeChange = (val) => {
    setActive(val)
    let obj = {
      ...queryString.parse(props.location.search),
      sort: val
    }
    props.history.push({
      pathname: '/search',
      search: "?" + queryString.stringify(obj)
    })
  }
  const top = useContext(Context);
  useEffect(() => {
    console.log(queryString.parse(props.location.search))
  }, [props.location.search])
  return (
    <div className="search" style={{marginTop: '120px'}}>
      <div className="header-bottom" style={{transform: top > 150 ? 'translate3d(0,-60px,0)' : 'translate3d(0,0,0)'}}>
        <ul className="tab-ul">
            {
              tabList.map((item,index) => {
                return <li key={item.name} className={tabIndex===index?'active':''} onClick={() => changeTab(index)}>{item.name}</li>
              })
            }
        </ul>
      </div>
      <p className="tab">
        <span className = {active === 0 ?'active' : ''} onClick={() => activeChange(0)}>综合排序</span>
        <span className = {active === 1 ?'active' : ''} onClick={() => activeChange(1)}>最新优先</span>
        <span className = {active === 2 ?'active' : ''} onClick={() => activeChange(2)}>最热优先</span>
      </p>
      <div className="content">
      {
        data.length ? data.map((item, index) => {
          return <p>{ item }</p>
        })
        : <p className="empty">列表为空</p>
      }
      </div>
    </div>
  );
}

export default Search;
