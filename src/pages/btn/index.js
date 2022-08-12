/*
 * @Description: 
 * @Autor: sxy
 * @Date: 2022-08-12 15:48:13
 * @LastEditors: sxy
 * @LastEditTime: 2022-08-12 15:57:53
 */
import React, { useEffect} from 'react';
import './index.scss';
function BtnActive() {
  useEffect(() => {
		let wrapper = document.getElementById('btnWrapper');
		wrapper.style.setProperty('--groove-left', '12px');
		let btns = document.getElementsByClassName('btn');
		for (let i = 0; i < btns.length; i++) {
		  btns[i].addEventListener('click', function (e) {
		    ThemeChange(i === 1);
		    resetBtn(btns);
		    wrapper.style.setProperty('--groove-left', `calc(12px + ${i * 50}%)`);
		    wrapper.style.setProperty('--wraper-origin', `${i === 0 ? '75% top' : '25% top'}`);
		    wrapper.style.setProperty('--wraper-rotate', `${i === 0 ? -8 : 8}deg`);
		    wrapper.className = 'rotateWrap';
		    setTimeout(() => {
		        btns[i].className = 'btn active';
		    }, 500);
		    setTimeout(() => {
		        wrapper.className = ''
		    }, 550);
		  })
		}
	}, []);
	const resetBtn = (btns) => {
    for (let i = 0; i < btns.length; i++) {
      setTimeout(() => {
		    btns[i].className = 'btn';
		  }, 100)
		}
	}
	const ThemeChange = (bol) => {
		let body = document.querySelector(".btns");
    body.className = bol ? 'dark btns' : 'btns'
	}
  return (
    <div className="btns">
			<div id="btnWrapper">
    		<div className="btn active">开灯</div>
    	  <div className="btn">关灯</div>
    	</div>
		</div>
  );
}

export default BtnActive;