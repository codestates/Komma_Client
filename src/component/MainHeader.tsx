import React,{ useEffect } from 'react';
import TimerContainer from '../containers/TimerContainer';
import logo from '../img/logo.png';

interface MainHeaderProps {
  isLogin: boolean;
  handleLoginModal: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ isLogin, handleLoginModal }) => {


  return(
    <header className='header'>
      <img src={logo} alt='' className='logo'/>
      {/*isLogin ? <TimerContainer /> : null*/}
      <TimerContainer/>
      {
        !isLogin ?
        <span className='menu' onClick={handleLoginModal} >Login</span> :
        <span className='menu' >Setting</span>
      }
    </header>
  );
}

interface TimerProps {
  isCounting: boolean;
  minute: number;
  seconds: number;
  startToTimer: () => void;
  stopToTimer: () => void;
  addTenMinute: () => void;
  removeTenMinute: () => void;
  removeOneSeconds: () => void;
  handlingEndingModal: () => void;
}

export const Timer: React.FC<TimerProps> = ({
  isCounting,
  minute,
  seconds,
  startToTimer,
  stopToTimer,
  addTenMinute,
  removeTenMinute,
  removeOneSeconds,
  handlingEndingModal
}) => {

  const handleCounting = () => {
    // 시간이 설정 안되어있으면 거절 메시지
    const currentTime = document.querySelector('.time')?.textContent;
    if(currentTime === '00 : 00') {
      return alert('시간 맞춰주세요! 이거는 임시 알럿창');
    }
    // isCount 상태를 변경하고 1초마다 카운팅 시작
    startToTimer();
    const timerId = setInterval(() => {
      const currentTime = document.querySelector('.time')?.textContent;
      if(currentTime === '00 : 00') {
        console.log('타이머 끝내기');
        clearInterval(timerId); // shut down setInterval
        stopToTimer(); // isCount to false
        handlingEndingModal(); // isEndingModalOn to true
      }
      else {
        removeOneSeconds(); // function for spend one sec
      }
    }, 1000);
  }

  return(
    <span className='timer-container'>
      <p className='time' >{`${minute < 10 ? '0' + minute : minute} : ${seconds < 10 ? '0' + seconds : seconds}`}</p>
      <div className='timer-buttons'>
        <div className='timer-plus' onClick={addTenMinute}>+10</div>
        <div className='timer-minus' onClick={removeTenMinute}>-10</div>
        {
          !isCounting ?
          <div className='timer-start' onClick={handleCounting}>Start</div> :
          <div className='timer-start' onClick={stopToTimer}>Clear</div>
        }
      </div>
    </span>
  );
}

export default MainHeader;
