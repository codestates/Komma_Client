import React, { useEffect, useRef } from 'react';
import selected from '../modules/selected';
import plus from '../img/list-button.png';
import small_plus from '../img/plus.png';
import sleep from '../img/sleep.png';
import { idText } from 'typescript';

interface SelectedProps {
  soundList: any[];
  isListBarOpen?: boolean;
  playList?: any[];
  handleList: () => void;
  addList: (item: object) => void;
  deleteList: (itemId: number) => void;
  setSoundListProperty: (modifiedSoundList: any[]) => void;
  setList: (modifiedList: any[]) => void;
}

interface SingleListProps {
  soundList: any[];
  playList: any[];
  id: number;
  title: string;
  url: string;
  icon: string;
  volume: string;
  addList: (item: object) => void;
  deleteList: (itemId: number) => void;
  setSoundListProperty: (modifiedSoundList: any[]) => void;
  setList: (modifiedList: any[]) => void;
}

const MainSelected: React.FC<SelectedProps> = ({
  soundList,
  isListBarOpen,
  playList,
  handleList,
  addList,
  deleteList,
  setSoundListProperty,
  setList
}) => {

  return(
    <aside className={isListBarOpen ? 'selectedBar' : 'selectedBar hide'}>
      <div className={isListBarOpen ? 'selectedButton' : 'selectedButton hide'} onClick={handleList}>
        <img src={plus} alt='' />
      </div>
      <div className='selectedList'>
        <p>PlayList ,</p>
        <div className='list-container'>
          {playList?.map((sound) => <SingleList
            key={sound.id}
            soundList={soundList}
            playList={playList}
            id={sound.id}
            title={sound.title}
            url={sound.url}
            icon={sound.iconImg}
            volume={sound.defaultVolume}
            deleteList={deleteList}
            setSoundListProperty={setSoundListProperty}
            setList={setList}
            addList={addList}
          />)}
        </div>
      </div>
    </aside>
  );
}

export const SingleList: React.FC<SingleListProps> = ({
  soundList,
  playList,
  title,
  id,
  url,
  icon,
  volume,
  deleteList,
  setSoundListProperty,
  setList,
  addList
}) => {

  const value1: any = useRef();
  const value2: any = useRef();
  const value3: any = useRef();
  const value4: any = useRef();
  const value5: any = useRef();

  //! 플레이리스트에서 삭제 시 사운드리스트에서도 플레이 중지
  const deleteFromList = () => {
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        let modifiedSoundList = soundList.slice();
        modifiedSoundList[i].play = false;
        setSoundListProperty(modifiedSoundList);
      }
    }
  }

  //! 플레이리스트 사운드바 사운드리스트에 맞춰서 동기화
  useEffect(() => {
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        editVolumeStyle(soundList[i].defaultVolume);
      }
    }
  })

  //! 플레이리스트에서 사운드 조작 시 사운드리스트 사운드도 조정
  const controlVolume = () => {
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
    <div className='list-single'>
      <img className='soundimg' src={icon} alt='' />
      <div className='sound-bar-list'>
        <span className='slider-rail-list' onClick={controlVolume}>
          <span className='slider-value-list 5' ref={value1}/>
          <span className='slider-value-list 4' ref={value2}/>
          <span className='slider-value-list 3' ref={value3}/>
          <span className='slider-value-list 2' ref={value4}/>
          <span className='slider-value-list 1' ref={value5}/>
        </span>
      </div>
      <img id='x' src={small_plus} alt='' onClick={deleteFromList}/>
    </div>
  );
}

export default MainSelected
