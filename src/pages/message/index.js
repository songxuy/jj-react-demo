import React, { useState } from 'react';
import './index.scss';
import Comment from './components/comment';
import Like from './components/like';
import Focus from './components/focus';
import System from './components/system';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function Message(props) {
  const [tab, setTab] = useState(0);
  const toPage = (idx) => {
    if(idx === 0 && tab !== 0) {
      setTab(idx);
      props.history.push('/message/comment')
    } else if (idx === 1 && tab !== 1){
      setTab(idx);
      props.history.push('/message/like')
    } else if (idx === 2 && tab !== 2){
      setTab(idx);
      props.history.push('/message/focus')
    } else if (idx === 3 && tab !== 3){
      setTab(idx);
      props.history.push('/message/system')
    }
  }
  return (
      <div className="message">
        <div className="msg-tab">
          <p className={tab === 0 ? 'active' : ''} onClick={() => toPage(0)}>评论消息</p>
          <p className={tab === 1 ? 'active' : ''} onClick={() => toPage(1)}>点赞消息</p>
          <p className={tab === 2 ? 'active' : ''} onClick={() => toPage(2)}>关注消息</p>
          <p className={tab === 3 ? 'active' : ''} onClick={() => toPage(3)}>系统消息</p>
        </div>
        <div style={{marginTop: '115px'}}>
			  	<Switch>
            <Route exact path="/message"><Redirect to="/message/comment" /></Route>
			  		<Route path="/message/comment" component={Comment} />
            <Route path="/message/like" component={Like} />
            <Route path="/message/focus" component={Focus} />
            <Route path="/message/system" component={System} />
			  	</Switch>
        </div>
      </div>
  )
}
export default Message;