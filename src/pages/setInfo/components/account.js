import React, { useState, useRef } from 'react';
import '../account.scss'
function Account() {
  const [ userInfo, setUserInfo] = useState([
    {
      key: '手机',
      value: '18096295110',
      isEdit: false,
      placeholder: '未绑定',
      newValue: '18096295110'
    },
    {
      key: '微信',
      value: '',
      isEdit: false,
      placeholder: '未绑定',
      newValue: ''
    },
    {
      key: '新浪微博',
      value: '',
      isEdit: false,
      placeholder: '未绑定',
      newValue: ''
    },
    {
      key: 'Github',
      value: '',
      isEdit: false,
      placeholder: '未绑定',
      newValue: ''
    },
    {
      key: '密码',
      value: '',
      isEdit: false,
      placeholder: '',
      newValue: ''
    },
    {
      key: '账号注销',
      value: '',
      isEdit: false,
      placeholder: '',
      newValue: ''
    }
  ])
  const changeKey = (e, idx, key) => {
    let arr = JSON.parse(JSON.stringify(userInfo));
    arr[idx][key] = e
    setUserInfo(arr)
  }
  const getFocus = (idx) => {
    ref['inp' + idx].current.focus();
    changeKey(true, idx, 'isEdit');
  }
  const save = (idx) => {
    changeKey(userInfo[idx].newValue, idx, 'value');
    changeKey(false, idx, 'isEdit');
  }
  const cancel = (idx) => {
    changeKey(userInfo[idx].value, idx, 'newValue');
    changeKey(false, idx, 'isEdit');
  }
  const ref = {
    'inp0': useRef(null),
    'inp1': useRef(null),
    'inp2': useRef(null),
    'inp3': useRef(null),
    'inp4': useRef(null),
    'inp5': useRef(null)
  };
  return (
    <div className="account">
      <p className="title">账号设置</p>
      <ul className="setting-list">
        {
          userInfo.map((item, idx) => {
            return (
              <li key={idx + item.key}>
                <p className="inner-title">{item.key}</p>
                <div className="li-content">
                  <div className="li-left">
                    <input value={item.newValue} ref={ref['inp' + idx]} onChange={(e) => changeKey(e.target.value, idx, 'newValue')} placeholder={item.placeholder} onFocus={() => changeKey(true, idx, 'isEdit')}/>
                  </div>
                  <div className="li-right">
                    { item.key !== '密码' && item.key !== '账号注销' ? item.isEdit ? '' : <p className="edit" onClick={() => getFocus(idx)}>修改</p> : ''}
                    { item.key !== '密码' && item.key !== '账号注销' ? item.isEdit ? <p className="save" onClick={() => save(idx)}>保存</p> : '' : ''}
                    { item.key !== '密码' && item.key !== '账号注销' ? item.isEdit ? <p className="cancel" onClick={() => cancel(idx)}>取消</p> : '' : ''}
                    { item.key === '密码' ? <p className="edit" onClick={() => cancel(idx)}>重置</p> : ''}
                    { item.key === '账号注销' ? <p className="edit" onClick={() => cancel(idx)}>注销</p> : ''}
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Account
