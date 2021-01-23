import React from 'react'
import Fade from 'react-reveal/Fade';
import minus from '../../img/minus-grey.png';
import plus from '../../img/plus-grey.png';
import start from '../../img/start-grey.png';
import stop from '../../img/stop-grey.png';


interface TimerProps {
  color: string;
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
  color,
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
    const currentTime = document.querySelector('.time')?.textContent;
    if (currentTime === '00 : 00') {
      return alert('시간 맞춰주세요! 이거는 임시 알럿창');
    }
    // isCount 상태를 변경하고 1초마다 카운팅 시작
    startToTimer();
    const timerId = setInterval(() => {
      const currentTime = document.querySelector('.time')?.textContent;
      if (currentTime === '00 : 00') {
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
  return (
    <div className='intro_Fn3'>
      <Fade delay={400}><div className='intro_body3-1'>
        <Fade delay={700}><div className='intro_describe3'> SETTING</div></Fade>
        <Fade delay={1000}> <div className='intro_describe3-2'>설정하세요. </div> </Fade>e
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
        <div className={`intro-${color}`}>
          <Fade delay={1500}><div className='intro_describe4'>SELECT</div></Fade>
          <Fade delay={1800}><div className='intro_describe4-2'>선택하세요.</div></Fade>
          <div className='setting-general-color'>
            <h1>Background Color</h1>
            <div className='colors'>
              <div className={color === 'blue' ? 'blue selected' : 'blue'} onClick={() => onIntroColorChnage('blue')} />
              <div className={color === 'red' ? 'red selected' : 'red'} onClick={() => onIntroColorChnage('red')} />
              <div className={color === 'orange' ? 'orange selected' : 'orange'} onClick={() => onIntroColorChnage('orange')} />
              <div className={color === 'yellow' ? 'yellow selected' : 'yellow'} onClick={() => onIntroColorChnage('yellow')} />
              <div className={color === 'cyan' ? 'cyan selected' : 'cyan'} onClick={() => onIntroColorChnage('cyan')} />
              <div className={color === 'teal' ? 'teal selected' : 'teal'} onClick={() => onIntroColorChnage('teal')} />
              <div className={color === 'violet' ? 'violet selected' : 'violet'} onClick={() => onIntroColorChnage('violet')} />
              <div className={color === 'lime' ? 'lime selected' : 'lime'} onClick={() => onIntroColorChnage('lime')} />
              <div className={color === 'random' ? 'random selected' : 'random'} onClick={() => onIntroColorChnage('random')} />
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  )
}
export default IntroFn3;