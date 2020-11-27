import React, { useState, useRef } from 'react';
import '../profile.scss'
function Profile() {
  const [ userInfo, setUserInfo] = useState([
    {
      key: '用户名',
      value: '小白鸽s',
      isEdit: false,
      placeholder: '请填写用户名',
      newValue: '小白鸽s'
    },
    {
      key: '职位',
      value: '',
      isEdit: false,
      placeholder: '填写你的职位',
      newValue: ''
    },
    {
      key: '公司',
      value: '',
      isEdit: false,
      placeholder: '填写你的公司',
      newValue: ''
    },
    {
      key: '个人介绍',
      value: '',
      isEdit: false,
      placeholder: '填写职业技能、擅长的事情、喜欢的事情等',
      newValue: ''
    },
    {
      key: '个人主页',
      value: '',
      isEdit: false,
      placeholder: '填写你的个人主页',
      newValue: ''
    }
  ])
  const [icon ,setIcon] = useState({
    value: 'https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/8472e0c51625f36b24c23f80697a7447~300x300.image',
    newValue: 'https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/8472e0c51625f36b24c23f80697a7447~300x300.image'
  })
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
  const addpic = () => {
    document.getElementById('upload_file').click()
  }
  const fileChange = (el) => {
    if (!el.target.files[0].size) return // 判断是否有文件数量
    fileList(el.target.files) // 获取files文件组传入处理
    el.target.value = '' // 清空val值，以便可以重复添加一张图片
  }
  const fileList = (files) => {
    for (let i = 0; i < files.length; i++) {
        fileAdd(files[i])
    }
  }
  const fileAdd = (file) => {
    /* const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function() {
        console.log(reader)
        
    } */
    let blob = window.URL.createObjectURL(file)
    setIcon({
      ...icon,
      newValue: blob
    })
    console.log(blob)
  }
  const ref = {
    'inp0': useRef(null),
    'inp1': useRef(null),
    'inp2': useRef(null),
    'inp3': useRef(null),
    'inp4': useRef(null)
  };
  return (
    <div className="profile">
      <p className="title">个人资料</p>
      <ul className="setting-list">
        <li>
          <p className="inner-title">头像</p>
          <div className="li-content">
            <div className="li-left">
              <img className="usericon" src={icon.newValue} alt="user icon"/>
              <input
                   onChange={(e)=> fileChange(e) }
                   type="file"
                   id="upload_file"
                   multiple
                   style={{display: 'none'}}
               />
            </div>
            <div className="li-right">
              <p className="upload-tip">支持 jpg、png、jpeg 格式大小 5M 以内的图片</p>
              <p className="upload-btn" onClick={() => addpic()}>点击上传</p>
            </div>
          </div>
        </li>
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
                    { item.isEdit ? '' : <p className="edit" onClick={() => getFocus(idx)}>修改</p> }
                    { item.isEdit ? <p className="save" onClick={() => save(idx)}>保存</p> : ''}
                    { item.isEdit ? <p className="cancel" onClick={() => cancel(idx)}>取消</p> : ''}
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

export default Profile;
