import React, { useEffect, useRef } from 'react';
import medi from '../img/meditation.png';
import wheelUp from '../img/wheelup.png';
import wheelDown from '../img/wheeldown.png';
import pointerLeft from '../img/pointer-left.png';
import pointerRight from '../img/pointer-right.png';

const MainList: React.FC = () => {

  /*
    원판을 돌아가게 만드려는 시도 1
    스크롤이벤트를 사용하여 구현하려 억지로 overflow: hidden 속성을 없애
    스크롤이 가능하게 스크롤 바를 만들었다. 결과는 스크롤바의 움직임에 대응해 아이템이 움직인다는
    사실을 몰랐어서, 빠른 스크롤바에 움직임에 아이템의 변화 속도가 쫒아가지 못해 실패.
    성공적으로 돌아가긴 하나 엄청난 버벅임과 움찔거림으로 사용이 불가하다.

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  })
  let ref: any = useRef();
  const handleScroll = () => {
    let lastScrollY = window.scrollY;
    window.requestAnimationFrame(() => {
      ref.current.style.transform = `rotate(${lastScrollY /30}deg)`;
      ref.current.style.top = `${lastScrollY + 510}px`
    });
  }
  */

  /*
    원판 돌아가게 만드려는 시도 2
    휠이벤트 사용하여 성공.
    모바일 환경에서는 호버 기능과 같이 사용 불가하여, 클릭 이벤트 등으로 대체해야 할듯함.
  */
  let ref: any = useRef();
  let degree: number = 0;
  useEffect(() => {
    ref.current.addEventListener('mousewheel', (delta: any) => {
      if(delta.wheelDelta >= 0) {
        console.log('++');
        console.log(delta.wheelDelta);
        ref.current.style.transform = `rotate(${degree}deg)`;
        degree = degree - 3;
      }
      else {
        console.log('--');
        console.log(delta.wheelDelta);
        ref.current.style.transform = `rotate(${degree}deg)`;
        degree = degree + 3;
      }
    })
  }, []);

  

  



  return(
    <div className='sound-list' ref={ref} >
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
      <SingleSoundCard/>
    </div>
  );
}

const SingleSoundCard: React.FC = () => {

  return(
    <div className='sound-card one'>
      <img src={medi} alt=''/>
      <p>음량조절 바</p>
    </div>
  );
}

export const ListTutorial = () => {

  // 원판 이용안내창 등장 후 제거
  let tutorialTarget: any = useRef();
  useEffect(() => {
    setTimeout(() => {
      tutorialTarget.current.style.opacity = 1;
    }, 500);
    setTimeout(() => {
      tutorialTarget.current.style.opacity = 0;
    }, 4500);
    setTimeout(() => {
      tutorialTarget.current.style.display = 'none';
    }, 5500);
  }, []);

  return(
    <div className='tutorial' ref={tutorialTarget}>
      <h1>Mouse Wheel</h1>
      <img src={pointerLeft} alt='' className='pointer left' />
      <img src={pointerRight} alt='' className='pointer right' />
      <div>
        <img src={wheelUp} alt='' />
        <img src={wheelDown} alt='' />
      </div>
    </div>
  );
}

export default MainList
