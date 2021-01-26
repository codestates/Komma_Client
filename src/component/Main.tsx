import React, { useEffect, useRef } from 'react';
import MainHeaderContainer from '../containers/MainHeaderContainer';
import { ListTutorial } from './MainList';
import MainListContainer from '../containers/MainListContainer';
import MainFavContainer from '../containers/MainFavContainer';
import MainSelectContainer from '../containers/MainSelectedContainer';
import SigninContainer from '../containers/SigninContainer';
import Ending from './Ending';
import SettingContainer from '../containers/SettingContainer';
import axios from 'axios';
import { getSoundList } from '../modules/list';
import mixtape from '../modules/mixtape';

interface MainProps {
  color: string;
  isLoginModalOn: boolean;
  isEndingModalOn: boolean;
  isSettingModalOn: boolean;
  isDarkMode: boolean;
  isRandomOn: boolean;
  mixtape?: any[];
  soundList: any[];
  handleEndingModal: () => void;
  loginStabilizer: () => void;
  changeColor: (color: string) => void;
  handleDarkMode: () => void;
  handleRandomOn: () => void;
  setMixtapeProperty: (modifiedMixtape: any[]) => void;
  setSoundListProperty: (modifiedSoundList: any[]) => void;
}

const Main: React.FC<MainProps> = ({
  color,
  isLoginModalOn,
  isEndingModalOn,
  isSettingModalOn,
  isDarkMode,
  isRandomOn,
  mixtape,
  soundList,
  handleEndingModal,
  loginStabilizer,
  changeColor,
  handleDarkMode,
  handleRandomOn,
  setMixtapeProperty,
  setSoundListProperty
}) => {

  useEffect(() => {
    let modifiedSoundList = soundList.slice();

    if(isEndingModalOn) {
      for(let i = 0; i < soundList.length; i ++) {
        modifiedSoundList[i].play = false;
        setSoundListProperty(modifiedSoundList);
      }
      if(mixtape) {
        let modifiedMixtape = mixtape.slice();
        for(let i = 0; i < mixtape.length; i ++) {
          modifiedMixtape[i].playlists.play = false;
        }
        setMixtapeProperty(modifiedMixtape);
      }
    }
  })

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
        if(data.userInfo.sitecolor !== color) {
          changeColor(data.userInfo.sitecolor);
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
    console.log('로그인유지 작동');
  })

  // 컬러 랜덤 핸들링
  //let Myinterval: any;
  let mainRef: any = useRef();
  useEffect(() => {
    let isRandomColorOn = false;
    console.log('컬러변경 함수 실행')
    if(color === 'random') {
      console.log('인터벌 시작')
      isRandomColorOn = true; // to true;
      let Myinterval = setInterval(() => {
        if(isRandomColorOn) {
          console.log('인터벌 실행중')
          mainRef.current.className = `Main-random-${Math.floor(Math.random() * (9 - 1) +1 )}`
        }
        else {
          clearInterval(Myinterval);
          console.log('인터벌 끝')
        }
      }, 10000)
    }
    else {
      isRandomColorOn = false; // to false;
    }
  }, [color])

  return(
    <main
      className={`Main-${color}`}
      ref={mainRef}
    >
      <MainHeaderContainer />
      <MainFavContainer />
      <MainSelectContainer />
      <MainListContainer />
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
