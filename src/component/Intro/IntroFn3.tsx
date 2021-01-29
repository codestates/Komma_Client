import React from 'react'
import Fade from 'react-reveal/Fade';
import minus from '../../img/minus-grey.png';
import plus from '../../img/plus-grey.png';
import start from '../../img/start-grey.png';
import stop from '../../img/stop-grey.png';


interface TimerProps {
  introColor: string;
  isCounting: boolean;
  minute: number;
  seconds: number;
  onIntroColorChnage: (introColor: string) => void;
  startToTimer: () => void;
  stopToTimer: () => void;
  addTenMinute: () => void;
  removeTenMinute: () => void;
  removeOneSeconds: () => void;
  handlingEndingModal: () => void;
}

const IntroFn3: React.FC<TimerProps> = ({
  introColor,
  isCounting,
  minute,
  seconds,
  onIntroColorChnage,
  startToTimer,
  stopToTimer,
  addTenMinute,
  removeTenMinute,
  removeOneSeconds,
  handlingEndingModal
}) => {

  const handleCounting = () => {
    // 시간이 설정 안되어있으면 거절 메시지
    const currentTime = document.querySelector('.time1')?.textContent;
    if (currentTime === '00 : 00') {
      return alert('시간 맞춰주세요! 이거는 임시 알럿창');
    }
    // isCount 상태를 변경하고 1초마다 카운팅 시작
    startToTimer();
    const timerId = setInterval(() => {
      const currentTime = document.querySelector('.time1')?.textContent;
      if (currentTime === '00 : 00') {
        console.log('타이머 끝내기');
        clearInterval(timerId); // shut down setInterval
        stopToTimer(); // isCount to false
      }
      else {
        removeOneSeconds(); // function for spend one sec
      }
    }, 1000);
  }
  return (
    <div className='intro_Fn3'>
      <Fade delay={400}><div className='intro_body3-1'>
        <Fade delay={700}><div className='intro_describe3'> SETTING</div></Fade>
        <Fade delay={1000}> <div className='intro_describe3-2'>5분단위로 타이머를 설정해보세요!</div> </Fade>
        <span className='timer-container1'>
          <p className='time1' >{`${minute < 10 ? '0' + minute : minute} : ${seconds < 10 ? '0' + seconds : seconds}`}</p>
          <div className='timer-plus1' onClick={addTenMinute}><img src={plus} alt='' /></div>
          <div className='timer-minus1' onClick={removeTenMinute}><img src={minus} alt='' /></div>
          {
            !isCounting ?
              <div className='timer-start1' onClick={handleCounting}><img src={start} alt='' /></div> :
              <div className='timer-stop1' onClick={stopToTimer}><img src={stop} alt='' /></div>
          }
        </span>

      </div>
      </Fade>
      <Fade delay={1200}><div className='intro_body3-2'>
        <div className={`intro-${introColor}`}>
          <Fade delay={1500}><div className='intro_describe4'>SELECT</div></Fade>
          <Fade delay={1800}><div className='intro_describe4-2'>배경화면을 원하는 색으로 설정해보세요!</div></Fade>
          <div className='setting-general1-color1'>
            <div className='introColor'>
              <div className={introColor === 'blue1' ? 'blue1 selected1' : 'blue1'} onClick={() => onIntroColorChnage('blue1')} />
              <div className={introColor === 'red1' ? 'red1 selected1' : 'red1'} onClick={() => onIntroColorChnage('red1')} />
              <div className={introColor === 'orange1' ? 'orange1 selected1' : 'orange1'} onClick={() => onIntroColorChnage('orange1')} />
              <div className={introColor === 'yellow1' ? 'yellow1 selected1' : 'yellow1'} onClick={() => onIntroColorChnage('yellow1')} />
              <div className={introColor === 'cyan1' ? 'cyan1 selected1' : 'cyan1'} onClick={() => onIntroColorChnage('cyan1')} />
              <div className={introColor === 'teal1' ? 'teal1 selected1' : 'teal1'} onClick={() => onIntroColorChnage('teal1')} />
              <div className={introColor === 'violet1' ? 'violet1 selected1' : 'violet1'} onClick={() => onIntroColorChnage('violet1')} />
              <div className={introColor === 'lime1' ? 'lime1 selected1' : 'lime1'} onClick={() => onIntroColorChnage('lime1')} />
              <div className={introColor === 'white1' ? 'white1 selected1' : 'white1'} onClick={() => onIntroColorChnage('white1')} />
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  )
}
export default IntroFn3;