import React, { useState, useEffect, useCallback } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import HomePage from './pages/home';
import Activity from '@/pages/activity';
import Point from '@/pages/point';
import Topic from '@/pages/topic';
import Volumes from '@/pages/volumes';
import Center from '@/pages/center';
import SetInfo from '@/pages/setInfo';
import Message from '@/pages/message';
import Search from '@/pages/search'
import People from '@/pages/people';
import CountDown from '@/pages/countDown';
import Clock from '@/pages/clock';
import Scratch from '@/pages/scratch';
import Palette from '@/pages/palette';
import Box from '@/pages/box';
import TextAnimate from '@/pages/text';
import Loading from '@/components/loading';
import BtnActive from '@/pages/btn';
import './App.scss';
import { Menu, Dropdown, Input } from 'antd';
import { CaretDownOutlined, MessageFilled } from '@ant-design/icons';
import logo from '@/assets/images/juejin.svg';
import { Context } from './context/index.js';
import queryString from 'query-string'
function App() {
  let [menuVisible, setMenuVisible] = useState(false);
  let [placeholder, setPlaceeholder] = useState('搜索B站');
  let [showSearch, setShowSearch] = useState(false)
  let [top, setTop] = useState(0);
  let [dropIndex, setDropIndex] = useState();
  let { pathname } = useLocation();
  let [searchValue, setSearchValue] = useState('')
  let history = useHistory();
  let [historyData, setHistoryData] = useState([])
  let [showLoading, setLoaing] = useState(false)
  const menu =(
      <Menu 
        style={{ width: 80, textAlign: 'center' }}
        selectedKeys={[dropIndex]}>
        <Menu.Item key="0" onClick={() => changeDrop('0')}>
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="1" onClick={() => changeDrop('1')}>
          <Link to="/point">沸点</Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => changeDrop('2')}>
          <Link to="/topic">话题</Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => changeDrop('3')}>
          <Link to="/volumes">小册</Link>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => changeDrop('4')}>
          <Link to="/activity">活动</Link>
        </Menu.Item>
        <Menu.Item key="5" onClick={() => changeDrop('5')}>
          <Link to="/people">Peo</Link>
        </Menu.Item>
        <Menu.Item key="6" onClick={() => changeDrop('6')}>
          <Link to="/countDown">倒计时</Link>
      </Menu.Item>
      <Menu.Item key="7" onClick={() => changeDrop('7')}>
          <Link to="/clock">时钟</Link>
      </Menu.Item>
      <Menu.Item key="8" onClick={() => changeDrop('8')}>
          <Link to="/scratch">刮奖</Link>
      </Menu.Item>
      <Menu.Item key="9" onClick={() => changeDrop('9')}>
          <Link to="/palette">画板</Link>
      </Menu.Item>
      <Menu.Item key="10" onClick={() => changeDrop('10')}>
          <Link to="/box">天空盒子</Link>
        </Menu.Item>
        <Menu.Item key="11" onClick={() => changeDrop('11')}>
          <Link to="/text">文字动画</Link>
        </Menu.Item>
        <Menu.Item key="12" onClick={() => changeDrop('12')}>
          <Link to="/btn">按钮动效</Link>
        </Menu.Item>
      </Menu>

  );
  const changeDrop = useCallback((i) => {
    setDropIndex(i)
    setMenuVisible(false)
  }, [])
  const handleScroll = useCallback(() => {
    //滚动条高度
    // let clientHeight = document.documentElement.clientHeight; //可视区域高度
    let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
    // let scrollHeight =document.documentElement.scrollHeight; //滚动内容高度
    setTop(scrollTop);
  }, [])
  const handleFocus = useCallback((e) => {
    if (!e.target.value.length) {
      setPlaceeholder('文章/小册/标签/用户')
      if (historyData.length) {
        setShowSearch(true)
      }
    }
  }, [historyData.length])
  const handleBlur = useCallback((e) => {
    setPlaceeholder('搜索B站')
    setTimeout(() => {
      setShowSearch(false)
    })
  }, [])
  const handleChange = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value.length) {
      setShowSearch(false)
    } else {
      if (historyData.length) {
        setShowSearch(true)
      }
    }
  }
  const handlePressEnter = (e) => {
    if (e.target.value.length) {
      if (historyData.indexOf(e.target.value) === -1) {
        let arr = [].concat(historyData)
        arr.unshift(e.target.value)
        setHistoryData(arr)
        localStorage.setItem('history', JSON.stringify(arr))
      }
      history.push({
        pathname: '/search',
        search: "?query=" + e.target.value
      })
    }
  }
  const toSearch = (val) => {
    setSearchValue(val)
    console.log(val)
    history.push({
      pathname: '/search',
      search: "?query=" + val
    })
  }
  const clearHistory = () => {
    setHistoryData([])
    localStorage.setItem("history", JSON.stringify([]))
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, [handleScroll])
  useEffect(() => {
    if (pathname.indexOf('message')!==-1 || pathname.indexOf('center')!==-1) {
      setDropIndex('')
    }
    if (window.location.search.indexOf('query')) {
      setSearchValue(queryString.parse(window.location.search).query)
    }
  }, [pathname])
  useEffect(() => {
    if (localStorage.getItem('history')) {
      setHistoryData(JSON.parse(localStorage.getItem('history')))
    }
    setLoaing(true)
    setTimeout(() => {
      setLoaing(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      <div className="header" style={{transform: top > 150 ? 'translate3d(0,-60px,0)' : 'translate3d(0,0,0)'}}>
        <div className="header-top">
          <img src={logo} alt="logo" className="logo"/>
          <Dropdown overlay={menu} trigger={['click']} onVisibleChange={(flag) => setMenuVisible(flag)}>
            <span className="ant-dropdown-link" style={{color: '#007fff'}} onClick={e => e.preventDefault()}>
              首页 <CaretDownOutlined style={{color: '#007fff', transition: 'all .5s', transform: menuVisible ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
            </span>
          </Dropdown>
          <div className="search">
            <Input placeholder={placeholder} value={ searchValue } style={{ width: '120px', height: '34px' }} onChange={(e) => handleChange(e)} onFocus={(e) => handleFocus(e)} onBlur={handleBlur} onPressEnter={ (e) => handlePressEnter(e)}/>
            <div className="search-history" style={{display: showSearch ? 'block' : 'none'}}>
              <div className="header">
                <p>搜索历史</p>
                <p onClick={ clearHistory }>清空</p>
              </div>
              <div className="list">
                {
                  historyData.map((item, idx) => {
                    return <div className="item" key={ idx } onClick={ () => toSearch(item)}>{ item }</div>
                  })
                }
              </div>
            </div>
          </div>
          <Link to="/message"><MessageFilled style={{color: '#71777c', fontSize: '24px', padding: '0 10px'}}/></Link>
          <Link to="/center"><img className="usericon" src={require('./assets/images/icon.png')} alt="user icon" /></Link>
        </div> 
      </div>
      <div style={{marginTop: '60px'}}>
        <Context.Provider value={top}>
			  	<Switch>
            <Route exact path="/"><Redirect to="/home/推荐" /></Route>
			  		<Route path="/home/:name" component={HomePage} />
            <Route path="/activity" component={Activity} />
            <Route path="/point" component={Point} />
            <Route path="/topic" component={Topic} />
            <Route path="/volumes" component={Volumes} />
            <Route path="/setInfo" component={SetInfo} />
            <Route path="/center" component={Center} />
            <Route path="/message" component={Message} />
            <Route path="/search" component={Search} />
            <Route path="/people" component={People} />
            <Route path="/countDown" component={CountDown} />
            <Route path="/clock" component={Clock} />
            <Route path="/scratch" component={Scratch} />
            <Route path="/palette" component={Palette} />
            <Route path="/box" component={Box} />
            <Route path="/text" component={TextAnimate} />
            <Route path="/btn" component={BtnActive} />
			  	</Switch>
        </Context.Provider>
      </div>
      <Loading show={showLoading }/>
    </div>
  );
}

export default App;
