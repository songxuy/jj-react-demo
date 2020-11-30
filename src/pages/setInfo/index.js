import React, { useState } from 'react';
import './index.scss';

import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Profile from './components/profile';
import Account from './components/account'
function SetInfo(props) {
  const [tab, setTab] = useState(0);
  const toPage = (idx) => {
    if(idx === 0 && tab !== 0) {
      setTab(idx);
      props.history.push('/setInfo/profile')
    } else if (idx === 1 && tab !== 1){
      setTab(idx);
      props.history.push('/setInfo/account')
    }
  }
  return (
      <div className="set-info">
        <div className="set-tab">
          <p onClick={() => props.history.push('/center')}>&lt;返回个人主页</p>
          <p className={tab === 0 ? 'active' : ''} onClick={() => toPage(0)}>个人资料</p>
          <p className={tab === 1 ? 'active' : ''} onClick={() => toPage(1)}>账号设置</p>
        </div>
        <div style={{marginTop: '115px'}}>
			  	<Switch>
            <Route exact path="/setInfo"><Redirect to="/setInfo/profile" /></Route>
			  		<Route path="/setInfo/profile" component={Profile} />
            <Route path="/setInfo/account" component={Account} />
			  	</Switch>
        </div>
      </div>
  )
}
export default SetInfo;