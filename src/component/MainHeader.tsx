import React from 'react';
import TimerContainer from '../containers/TimerContainer';
import logo from '../img/logo.png';

interface MainHeaderProps {
  isLogin: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ isLogin }) => {


  return(
    <header className='header'>
      <img src={logo} alt='' className='logo'/>
      {/*isLogin ? <TimerContainer /> : null*/}
      <TimerContainer/>
      <span className='menu'>{isLogin ? 'Setting' : 'Login'}</span>
    </header>
  );
}

interface TimerProps {
  isCounting: boolean;
  counterDuration: number;
  elapseTime: number;
  minute: number;
  seconds: number;
  startToTimer: () => void;
  stopToTimer: () => void;
  pauseToTimer: () => void;
  addTenMinute: () => void;
  removeTenMinute: () => void;
  removeOneSeconds: () => void;
}

export const Timer: React.FC<TimerProps> = ({
  isCounting,
  counterDuration,
  elapseTime,
  minute,
  seconds,
  startToTimer,
  stopToTimer,
  pauseToTimer,
  addTenMinute,
  removeTenMinute,
  removeOneSeconds
}) => {


  const handleCounting = () => {
    startToTimer();
    const timerId = setInterval(() => {
      if(!isCounting) {
        console.log('타이머 끝내기');
        clearInterval(timerId);
      }
      else {
        removeOneSeconds();
      }
    }, 1000);
  }


  return(
    <span className='timer-container'>
      <p className='time'>{`${minute < 10 ? '0' + minute : minute} : ${seconds < 10 ? '0' + seconds : seconds}`}</p>
      <button className='timer-button' onClick={addTenMinute}>+</button>
      <button className='timer-button' onClick={removeTenMinute}>-</button>
      <button className='timer-start' onClick={handleCounting}>{isCounting ? 'Pause' : 'Start'}</button>
    </span>
  );
}

export default MainHeader;
