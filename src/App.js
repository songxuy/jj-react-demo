import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import HomePage from './pages/home';
import Activity from '@/pages/activity';
import Point from '@/pages/point';
import Topic from '@/pages/topic';
import Volumes from '@/pages/volumes';
import Center from '@/pages/center';
import './App.scss';
import { Menu, Dropdown, Input } from 'antd';
import { CaretDownOutlined, MessageFilled } from '@ant-design/icons';
import logo from '@/assets/images/juejin.svg';
import { Context } from './context/index.js';
function App() {
  let [menuVisible, setMenuVisible] = useState(false);
  
  let [top, setTop] = useState(0);
  let [dropIndex, setDropIndex] = useState('0');
  
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
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, [handleScroll])
  
  return (
    <Router>
    <div className="App">
      <div className="header" style={{transform: top > 150 ? 'translate3d(0,-60px,0)' : 'translate3d(0,0,0)'}}>
        <div className="header-top">
          <img src={logo} alt="logo" className="logo"/>
          <Dropdown overlay={menu} trigger={['click']} onVisibleChange={(flag) => setMenuVisible(flag)}>
            <span className="ant-dropdown-link" style={{color: '#007fff'}} onClick={e => e.preventDefault()}>
              首页 <CaretDownOutlined style={{color: '#007fff', transition: 'all .5s', transform: menuVisible ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
            </span>
          </Dropdown>
          <Input placeholder="搜索B站" style={{width: '120px', height: '34px', margin: '0 10px 0 20px'}} onPressEnter={(e) => console.log(e.target.value)}/>
          <MessageFilled style={{color: '#71777c', fontSize: '24px', padding: '0 10px'}}/>
          <Link to="/center"><img className="usericon" src={require('./assets/images/icon.png')} alt="user icon"/></Link>
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
            <Route path="/center" component={Center} />
			  	</Switch>
          </Context.Provider>
      </div>
    </div>
    </Router>
  );
}

export default App;
