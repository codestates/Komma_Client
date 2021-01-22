import React, { useEffect, useRef } from 'react';
import medi from '../img/meditation.png';
import wheelUp from '../img/wheelup.png';
import wheelDown from '../img/wheeldown.png';
import pointerLeft from '../img/pointer-left.png';
import pointerRight from '../img/pointer-right.png';
import sounds from '../sounds/index';
import { getSoundList } from '../modules/list';
import axios from 'axios';

interface ListProps {
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
  playList?: any;
  soundList: any[];
  addList: (item: object) => void;
  deleteList: (itemId: number) => void;
  setList: (list: any[]) => void;
  setSoundListProperty: (modifiedSoundList: any[]) => void;
}

const MainList: React.FC<ListProps> = ({
  playList,
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
    ref.current.style.transform = `rotate(${degree}deg)`;
    ref.current.addEventListener('mousewheel', (delta: any) => {
      if(delta.wheelDelta >= 0) {
        //console.log('++');
        //console.log(delta.wheelDelta);
        ref.current.style.transform = `rotate(${degree}deg)`;
        degree = degree - 1;
      }
      else {
        //console.log('--');
        //console.log(delta.wheelDelta);
        ref.current.style.transform = `rotate(${degree}deg)`;
        degree = degree + 1;
      }
    })
  }, []);

  // 서버에서 노래정보 가져오기
  useEffect(() => {
    axios('http://www.kommaa.shop/users/songlist', {
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
    <div className='sound-list' ref={ref} >
      {
        soundList.map((sound) => <SingleSoundCard
        key={sound.id}
        id={sound.id}
        url={sound.soundFile}
        title={sound.title}
        volume={sound.defaltVoulume}
        icon={sound.iconImg}
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
  playList,
  soundList,
  addList,
  deleteList,
  setList,
  setSoundListProperty,
}) => {

  

  const audioRef: any = useRef();
  const imgRef: any = useRef();

  // 볼륨조절 함수
  const value1: any = useRef();
  const value2: any = useRef();
  const value3: any = useRef();
  const value4: any = useRef();
  const value5: any = useRef();

  // playlist로 볼륨조작시 아래 볼륨스타일 싱크맞춰주기
  /*
  useEffect(() => {
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        if(audioRef.current.volume !== Number(soundList[i].volume)) {
          console.log(audioRef.current.volume)
          console.log(Number(soundList[i].volume))
          audioRef.current.volume = Number(soundList[i].volume);
          editVolumeStyle();
        }
      }
    }
  }, [soundList])
*/


  // 아이콘 아래 볼륨스타일 선택 시 볼륨조절 함수
  const handleVolume = () => {
    let modifiedSoundList = soundList.slice()
    let audio = audioRef.current;
    if(audio.volume < 1) {
      audio.volume = (audio.volume + 0.2).toFixed(1);
      console.log(audio.volume);
    }
    else {
      audio.volume = 0.2;
      console.log(audio.volume);
    }
    // 스테이트 목록에도 변경한 볼륨 동기화
    for(let i = 0; i < modifiedSoundList.length; i ++) {
      if(id === modifiedSoundList[i].id) {
        modifiedSoundList[i].volume = audio.volume;
        setSoundListProperty(modifiedSoundList);
      }
    }
    editVolumeStyle();
  }

  // 오디오 볼륨에 따라 원판 볼륨게이지 스타일 조작하는 클로저 함수
  const editVolumeStyle = () => {
    let audio = audioRef.current;
    if(audio.volume === 1) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '1';
      value3.current.style.opacity = '1';
      value4.current.style.opacity = '1';
      value5.current.style.opacity = '1';
    }
    else if(audio.volume === 0.8) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '1';
      value3.current.style.opacity = '1';
      value4.current.style.opacity = '1';
      value5.current.style.opacity = '0.2';
    }
    else if(audio.volume === 0.6 || audio.volume === 0.5) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '1';
      value3.current.style.opacity = '1';
      value4.current.style.opacity = '0.2';
      value5.current.style.opacity = '0.2';
    }
    else if(audio.volume === 0.4) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '1';
      value3.current.style.opacity = '0.2';
      value4.current.style.opacity = '0.2';
      value5.current.style.opacity = '0.2';
    }
    else if(audio.volume === 0.2) {
      value1.current.style.opacity = '1';
      value2.current.style.opacity = '0.2';
      value3.current.style.opacity = '0.2';
      value4.current.style.opacity = '0.2';
      value5.current.style.opacity = '0.2';
    }
  }

  // 플레이리스트 항목도 같이 삭제하는 함수
  const deletePlayList = (id: number) => {
    for(let i = 0; i < playList.length; i ++) {
      if(playList[i].id === id) {
        let copiedPlayList = playList.slice();
        copiedPlayList.splice(i, 1);
        setList(copiedPlayList);
      }
    }
  }

  // 아이콘 클릭으로 시작, 정지 컨트롤 및 플레이리스트에 추가
  const handleSound = () => {
    let audio = audioRef.current;
    let img = imgRef.current;
    if(audio.paused) {
      audio.play()
      img.style.width = '65%';
      img.style.top = '-40px';
      addList({id: id, url: url, img: icon, title: title, volume: volume});
    }
    else {
      audio.pause();
      img.style.width = '50%';
      img.style.top = '0px';
      deletePlayList(id);
      console.log(id)
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
