import React, { useEffect, useRef } from 'react';
import medi from '../img/meditation.png';
import wheelUp from '../img/wheelup.png';
import wheelDown from '../img/wheeldown.png';
import pointerLeft from '../img/pointer-left.png';
import pointerRight from '../img/pointer-right.png';
import touch from '../img/touch.png';
import touchGuide from '../img/start-grey.png';
import arrow from '../img/volume-arrow.png';
import axios from 'axios';

interface ListProps {
  width: number;
  playList?: any[];
  soundList: any[];
  addList: (item: object) => void;
  deleteList: (itemId: number) => void;
  setList: (list: any[]) => void;
  setSoundListProperty: (modifiedSoundList: any[]) => void;
  getSoundList: (sounds: any[]) => void;
}

interface SingleSoundProps {
  id: number;
  url: string;
  icon: string;
  title: string;
  volume: string;
  play: boolean;
  playList?: any;
  soundList: any[];
  addList: (item: object) => void;
  deleteList: (itemId: number) => void;
  setList: (list: any[]) => void;
  setSoundListProperty: (modifiedSoundList: any[]) => void;
}

const MainList: React.FC<ListProps> = ({
  playList,
  width,
  soundList,
  addList,
  deleteList,
  setList,
  setSoundListProperty,
  getSoundList
}) => {

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
  let degree: number = 220;
  useEffect(() => {
    if(width > 1099) {
      ref.current.style.transform = `rotate(${degree}deg)`;
      ref.current.addEventListener('mousewheel', (delta: any) => {
        if(delta.wheelDelta >= 0) {
          //console.log('++');
          //console.log(delta.wheelDelta);
          ref.current.style.transform = `rotate(${degree}deg)`;
          degree = degree - 2;
        }
        else {
          //console.log('--');
          //console.log(delta.wheelDelta);
          ref.current.style.transform = `rotate(${degree}deg)`;
          degree = degree + 2;
        }
      })
    }
  }, []);

  // 서버에서 노래정보 가져오기
  useEffect(() => {
    axios('https://kommaa.shop/playlist/songlist', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.data)
    .then(data => {
      console.log(data.songlist);
      getSoundList(data.songlist);
    })
  }, []);

  return(
    <div className={width > 1101 ? 'sound-list' : 'sound-list-m'} ref={ref} >
      {
        soundList.map((sound) => <SingleSoundCard
        key={sound.id}
        id={sound.id}
        url={sound.soundFile}
        title={sound.title}
        volume={sound.defaultVolume}
        icon={sound.iconImg}
        play={sound.play}
        playList={playList}
        soundList={soundList}
        addList={addList}
        deleteList={deleteList}
        setList={setList}
        setSoundListProperty={setSoundListProperty}
        />)
      }
    </div>
  );
}

const SingleSoundCard: React.FC<SingleSoundProps> = ({
  id,
  url,
  icon,
  title,
  volume,
  play,
  playList,
  soundList,
  addList,
  deleteList,
  setList,
  setSoundListProperty,
}) => {

  const audioRef: any = useRef();
  const imgRef: any = useRef();
  const value1: any = useRef();
  const value2: any = useRef();
  const value3: any = useRef();
  const value4: any = useRef();
  const value5: any = useRef();

  //! play 값에따라 오디오 실행 및 아이콘효과 및 플레이리스트에 넣기
  useEffect(() => {
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        if(soundList[i].play) {
          audioRef.current.play();
          imgRef.current.style.width = '65%';
          imgRef.current.style.top = '-40px';
          // 플레이 리스트에 넣기
          let alreadyInList = false;
          for(let j = 0; j < playList.length; j ++) {
            if(playList[j].id === id) {
              alreadyInList = true;
            }
          }
          if(!alreadyInList) {
            addList(soundList[i]);
          }
        }
        else {
          audioRef.current.pause();
          imgRef.current.style.width = '50%';
          imgRef.current.style.top = '0px';
          // 플레이 리스트에서 제거
          deleteList(id);
        }
      }
    }
  }, [soundList])

  //! 아이콘 클릭으로 play 값 변경
  const handleSound = () => {
    let modifiedSoundList = soundList.slice();
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        if(play) {
          modifiedSoundList[i].play = false;
          setSoundListProperty(modifiedSoundList);
        }
        else {
          modifiedSoundList[i].play = true;
          setSoundListProperty(modifiedSoundList);
        }
      }
    }
  }

  //! volume 값에 따라 사운드바 및 오디오태그 사운드 조절
  useEffect(() => {
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        editVolumeStyle(soundList[i].defaultVolume)
        audioRef.current.volume = soundList[i].defaultVolume
      }
    }
  })

  //! 볼륨 아이콘 클릭으로 volume 값 조절
  const handleVolume = () => {
    let modifiedSoundList = soundList.slice();
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        if(soundList[i].defaultVolume < 1) {
          modifiedSoundList[i].defaultVolume = Number((modifiedSoundList[i].defaultVolume + 0.2).toFixed(1));
        }
        else {
          modifiedSoundList[i].defaultVolume = 0.2;
        }
        console.log(modifiedSoundList[i].defaultVolume)
        setSoundListProperty(modifiedSoundList);
      }
    }
  }

  //! 오디오 볼륨에 따라 원판 볼륨게이지 스타일 조작하는 클로저 함수
  const editVolumeStyle = (volume: number) => {
    if(volume === 1) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '1';
      value3.current.style.opacity = '1';
      value4.current.style.opacity = '1';
      value5.current.style.opacity = '1';
    }
    else if(volume === 0.8) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '1';
      value3.current.style.opacity = '1';
      value4.current.style.opacity = '1';
      value5.current.style.opacity = '0.2';
    }
    else if(volume === 0.6) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '1';
      value3.current.style.opacity = '1';
      value4.current.style.opacity = '0.2';
      value5.current.style.opacity = '0.2';
    }
    else if(volume === 0.4) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '1';
      value3.current.style.opacity = '0.2';
      value4.current.style.opacity = '0.2';
      value5.current.style.opacity = '0.2';
    }
    else if(volume === 0.2) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '0.2';
      value3.current.style.opacity = '0.2';
      value4.current.style.opacity = '0.2';
      value5.current.style.opacity = '0.2';
    }
  }

  return(
    <div className='sound-card one'>
      <img src={icon} alt='' ref={imgRef} onClick={handleSound} draggable='false'/>
      <audio className={`audio-element audio${id}`} ref={audioRef} loop>
        <source src={url} type='audio/mp3'></source>
      </audio>
      <div className='sound-bar'>
        <span className='slider-rail' onClick={handleVolume}>
          <span className='slider-value 5' ref={value5}/>
          <span className='slider-value 4' ref={value4}/>
          <span className='slider-value 3' ref={value3}/>
          <span className='slider-value 2' ref={value2}/>
          <span className='slider-value 1' ref={value1}/>
        </span>
      </div>
    </div>
  );
}

interface TutorialProps {
  width: number;
  handleWindowSize: (size: number) => void;
}


export const ListTutorial = ({ width, handleWindowSize }) => {

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

  if(width > 1100) {
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
  else {
    return(
      <div className='tutorial m' ref={tutorialTarget}>
        <h1>Touch</h1>
        <img src={pointerLeft} alt='' className='pointer left' />
        <img src={pointerRight} alt='' className='pointer right' />
        <div>
          <img src={touch} alt='' />
        </div>
      </div>
    );
  }
}

interface GuideProps {
  degree: number;
  handleDegree: (deg: number) => void;
}

export const TouchGuide: React.FC<GuideProps> = ({ degree, handleDegree }) => {

  let soundList: any;

  useEffect(() => {
    soundList = document.querySelector('.sound-list-m');
    console.log(soundList)
    soundList.style.transform = `rotate(${degree}deg)`;
  }, [degree]);

  // 모바일 우회전 클릭 이벤트
  const touchRight = () => {
    handleDegree(degree - 15)
  }

  // 모바일 우회전 클릭 이벤트
  const touchLeft = () => {
    handleDegree(degree + 15)
  }

  return(
    <div className='touch-guide'>
      <img src={touchGuide} alt='' className='pointer left touch' onClick={touchLeft}/>
      <img src={touchGuide} alt='' className='pointer right touch' onClick={touchRight}/>
    </div>
  );
}

export const VolumeGuide: React.FC = () => {

  // 볼륨 가이드 플리커
  const flickerRef: any = useRef();
  useEffect(() => {
    let target: any = flickerRef.current.style;
    setTimeout(() => {
      target.transform = 'scale(1)';
    }, 6000);
    setTimeout(() => {
      target.transform = 'scale(0)';
    }, 11000);
  }, []);

  return(
    <div className='volume-arrow' ref={flickerRef}>
      <img src={arrow} alt=''/>
      <p>Volume</p>
      <p>Controller</p>
    </div>
  );
}

export default MainList
