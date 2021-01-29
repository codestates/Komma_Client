import React, { useEffect, useRef } from 'react';
import MainHeaderContainer from '../containers/MainHeaderContainer';
import { ListTutorial, TouchGuide } from './MainList';
import MainListContainer from '../containers/MainListContainer';
import MainFavContainer from '../containers/MainFavContainer';
import MainSelectContainer from '../containers/MainSelectedContainer';
import SigninContainer from '../containers/SigninContainer';
import Ending from './Ending';
import SettingContainer from '../containers/SettingContainer';
import comma from '../img/comma.png';
import axios from 'axios';
import mixtape from '../modules/mixtape';

interface MainProps {
  color: string;
  width: number;
  isLoginModalOn: boolean;
  isEndingModalOn: boolean;
  isSettingModalOn: boolean;
  isDarkMode: boolean;
  isRandomOn: boolean;
  mixtape?: any[];
  soundList: any[];
  playList: any[];
  isLoadingOn: boolean;
  degree: number;
  handleEndingModal: () => void;
  loginStabilizer: () => void;
  changeColor: (color: string) => void;
  handleDarkMode: () => void;
  handleRandomOn: () => void;
  setMixtapeProperty: (modifiedMixtape: any[]) => void;
  setSoundListProperty: (modifiedSoundList: any[]) => void;
  handleLoadingOn: () => void;
  handleWindowSize: (size: number) => void;
  handleDegree: (deg: number) => void;
}

const Main: React.FC<MainProps> = ({
  color,
  degree,
  width,
  isLoginModalOn,
  isEndingModalOn,
  isSettingModalOn,
  isDarkMode,
  isRandomOn,
  isLoadingOn,
  mixtape,
  playList,
  soundList,
  handleEndingModal,
  loginStabilizer,
  changeColor,
  handleDarkMode,
  handleRandomOn,
  setMixtapeProperty,
  setSoundListProperty,
  handleLoadingOn,
  handleWindowSize,
  handleDegree
}) => {

  // 화면 가로크기 입력 함수
  useEffect(() => {
    handleWindowSize(window.innerWidth);
    window.addEventListener('resize', () => handleWindowSize(window.innerWidth));
    return () => {
      window.addEventListener('resize', () => handleWindowSize(window.innerWidth));
    }
  }, []);

  // 타이머 종료시 음악, 믹스테잎 종료 함수
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
          modifiedMixtape[i].play = false;
        }
        setMixtapeProperty(modifiedMixtape);
      }
    }
  })

  // 로그인 유지 함수
  useEffect(() => {
    let token: any = localStorage.getItem('token')
    handleLoadingOn();
    setTimeout(() => {
      handleLoadingOn();
    }, 3000)
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
        console.log(data);
        if(data.userInfo.sitecolor !== color) {
          changeColor(data.userInfo.sitecolor);
        }
        // 믹스테잎 업데이트
        if(mixtape) {
          let modifiedMixtape = mixtape.slice();
          console.log(modifiedMixtape)
          console.log(data.playlists)
          if(modifiedMixtape.length === 4) {
            for(let i = 0; i < data.playlists.length; i ++) {
              modifiedMixtape.push(data.playlists[i]);
              setMixtapeProperty(modifiedMixtape);
            }
            console.log(modifiedMixtape)
            console.log('믹스테잎 업데이트');
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
    console.log('로그인유지 작동');
  }, [])
/*
  // 컬러 랜덤 핸들링
  let Myinterval: any;
  let mainRef: any = useRef();
  let delay: number | null;
  useEffect(() => {
    if(color === 'random') {
      console.log('인터벌 시작')
      delay = 10000;
      isRandomOn = true; // to true;
      Myinterval = setInterval(generateRandomColor, delay);
    }
    else {
      isRandomOn = false;
      delay = NaN;
      clearInterval(Myinterval);
      console.log('인터벌 종료') // to false;
    }
  }, [color])

  // 인터벌 함수
  const generateRandomColor = () => {
    if(isRandomOn) {
      console.log('인터벌 실행중')
      mainRef.current.className = `Main-random-${Math.floor(Math.random() * (9 - 1) +1 )}`
    }
  }
*/
  return(
    <main
      className={`Main-${color}`}
    >
      <MainHeaderContainer />
      <MainFavContainer />
      <MainSelectContainer />
      <MainListContainer />
      <ListTutorial width={width} handleWindowSize={handleWindowSize}/>
      { width < 800 ? <TouchGuide degree={degree} handleDegree={handleDegree}/> : null }
      {
        playList.length > 0 ? 
        <div className='waveBox'>
          <div className='wave-one'></div>
          <div className='wave-two'></div>
        </div> :
        <div className='waveBox-off'>
          <div className='wave-one'></div>
          <div className='wave-two'></div>
        </div>
      } 
      { isLoginModalOn ? <SigninContainer /> : null }
      { isEndingModalOn ? <Ending handleEndingModal={handleEndingModal}/> : null }
      { isSettingModalOn ? <SettingContainer /> : null }
    </main>
  );
}

export default Main
