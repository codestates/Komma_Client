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
}

interface SingleListProps {
  soundList: any[];
  id: number;
  title: string;
  url: string;
  icon: string;
  volume: string;
  deleteList: (itemId: number) => void;
  setSoundListProperty: (modifiedSoundList: any[]) => void;
}

const MainSelected: React.FC<SelectedProps> = ({
  soundList,
  isListBarOpen,
  playList,
  handleList,
  addList,
  deleteList,
  setSoundListProperty
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
            id={sound.id}
            title={sound.title}
            url={sound.url}
            icon={sound.icon}
            volume={sound.volume}
            deleteList={deleteList}
            setSoundListProperty={setSoundListProperty}
          />)}
        </div>
      </div>
    </aside>
  );
}

export const SingleList: React.FC<SingleListProps> = ({
  soundList,
  title,
  id,
  url,
  icon,
  volume,
  deleteList,
  setSoundListProperty
}) => {

  const value1: any = useRef();
  const value2: any = useRef();
  const value3: any = useRef();
  const value4: any = useRef();
  const value5: any = useRef();

  useEffect(() => {
    value5.current.style.opacity = '0.2';
    value4.current.style.opacity = '0.2';
  }, []);


  // 볼륨조절 함수 
  const controlVolume = (id: number) => {
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        let modifiedSoundList = soundList.slice()
        if(Number(modifiedSoundList[i].volume) < 1) {
          modifiedSoundList[i].volume = Number(modifiedSoundList[i].volume) + 0.2;
          console.log(modifiedSoundList[i].title)
          console.log(modifiedSoundList[i].volume)
        }
        else {
          modifiedSoundList[i].volume = 0.2;
          console.log(modifiedSoundList[i].volume);
        }
        setSoundListProperty(modifiedSoundList);
      }
    }
  }

  useEffect(() => {
    editVolumeStyle(id);
  }, [soundList]);

  // 오디오 볼륨에 따라 원판 볼륨게이지 스타일 조작하는 클로저 함수
  const editVolumeStyle = (id: number) => {
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        let audio = soundList[i];
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
    }
  }


  return(
    <div className='list-single'>
      <img id='img' src={icon} alt=''/>
      <div className='sound-bar-list'>
        <span className='slider-rail-list' onClick={() => controlVolume(id)}>
          <span className='slider-value-list 5' ref={value1}/>
          <span className='slider-value-list 4' ref={value2}/>
          <span className='slider-value-list 3' ref={value3}/>
          <span className='slider-value-list 2' ref={value4}/>
          <span className='slider-value-list 1' ref={value5}/>
        </span>
      </div>
      <img id='x' src={small_plus} alt='' onClick={() => deleteList(id)}/>
    </div>
  );
}

export default MainSelected
