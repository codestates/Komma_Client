import React, { useState, useEffect } from 'react';
import MainHeaderContainer from '../containers/MainHeaderContainer';
import MainList, { ListTutorial } from './MainList';
import MainFavContainer from '../containers/MainFavContainer';
import MainSelectContainer from '../containers/MainSelectedContainer';
import SigninContainer from '../containers/SigninContainer';
import Ending from './Ending';
import SettingContainer from '../containers/SettingContainer';
import axios from 'axios';

interface MainProps {
  color: string;
  isLoginModalOn: boolean;
  isEndingModalOn: boolean;
  isSettingModalOn: boolean;
  isDarkMode: boolean;
  handleEndingModal: () => void;
  loginStabilizer: () => void;
  changeColor: (color: string) => void;
  handleDarkMode: () => void;
}

const Main: React.FC<MainProps> = ({
  color,
  isLoginModalOn,
  isEndingModalOn,
  isSettingModalOn,
  isDarkMode,
  handleEndingModal,
  loginStabilizer,
  changeColor,
  handleDarkMode
}) => {

  useEffect(() => {
    let token: any = localStorage.getItem('token')
    if(JSON.parse(token)) {
      loginStabilizer(); // 토큰 존재시 로그인상태 유지
      // 메인페이지 열릴 때 마다 유저정보에 담긴 각각 화면 구성하는 상태 가져와서 갱신
      let token = localStorage.getItem('token');
      axios.get(
        'http://www.kommaa.shop/users/userinfo',
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      )
      .then(res => res.data)
      .then(data => {
        // 컬러, 다크모드, 플레이리스트, 현재선택 음악 리스트...?
        changeColor(data.userInfo.sitecolor);
        if(isDarkMode !== data.userInfo.darkmode) {
          handleDarkMode();
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
    console.log('로그인유지 작동');
  })

  return(
    <main className={`Main-${color}`}>
      <MainHeaderContainer />
      <MainFavContainer />
      <MainSelectContainer />
      <MainList />
      <ListTutorial />
      <div className='waveBox'>
        <div className='wave-one'></div>
        <div className='wave-two'></div>
      </div>
      { isLoginModalOn ? <SigninContainer /> : null }
      { isEndingModalOn ? <Ending handleEndingModal={handleEndingModal}/> : null }
      { isSettingModalOn ? <SettingContainer /> : null }
    </main>
  );
}

export default Main
