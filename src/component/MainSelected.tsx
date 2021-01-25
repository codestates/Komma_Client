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
            //url={sound.url}
            //icon={sound.icon}
            //volume={sound.volume}
            url={sound.url}
            icon={sound.img}
            volume={sound.defaltVoulume}
            deleteList={deleteList}
            setSoundListProperty={setSoundListProperty}
            setList={setList}
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
  setList
}) => {

  const value1: any = useRef();
  const value2: any = useRef();
  const value3: any = useRef();
  const value4: any = useRef();
  const value5: any = useRef();

  useEffect(() => {
    value5.current.style.opacity = '0.2';
    value4.current.style.opacity = '0.2';
    value3.current.style.opacity = '0.2';
  }, []);


  // 볼륨조절 함수 
  const controlVolume = (id: number) => {
    for(let i = 0; i < soundList.length; i ++) {
      if(id === soundList[i].id) {
        let modifiedSoundList = soundList.slice()
        if(Number(modifiedSoundList[i].defaltVoulume) < 1) {
          modifiedSoundList[i].defaltVoulume = Number(modifiedSoundList[i].defaltVoulume) + 0.2;
          if(modifiedSoundList[i].defaltVoulume === 0.6000000000000001) {
            modifiedSoundList[i].defaltVoulume = 0.6;
          }
          console.log(modifiedSoundList[i].title)
          console.log(modifiedSoundList[i].defaltVoulume)
        }
        else {
          modifiedSoundList[i].defaltVoulume = 0.2;
          console.log(modifiedSoundList[i].defaltVoulume);
        }
        setSoundListProperty(modifiedSoundList);
        editVolumeStyle(id);
      }
    }
  }

  // 리스트 삭제 버튼 
  const deleteButton = (id: number) => {
    for(let i = 0; i < playList.length; i ++) {
      if(playList[i].id === id) {
        let copiedPlayList = playList.slice();
        copiedPlayList.splice(i, 1);
        setList(copiedPlayList);
      }
    }
    for(let i = 0; i < soundList.length; i ++) {
      if(soundList[i].id === id) {
        let copiedSoundList = soundList.slice();
        copiedSoundList[i].play = false;
        setSoundListProperty(copiedSoundList);
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
        if(audio.defaltVoulume === 1) {
          value1.current.style.opacity = '1';
          value2.current.style.opacity = '1';
          value3.current.style.opacity = '1';
          value4.current.style.opacity = '1';
          value5.current.style.opacity = '1';
        }
        else if(audio.defaltVoulume === 0.8) {
          value1.current.style.opacity = '1';
          value2.current.style.opacity = '1';
          value3.current.style.opacity = '1';
          value4.current.style.opacity = '1';
          value5.current.style.opacity = '0.2';
        }
        else if(audio.defaltVoulume === 0.6) {
          value1.current.style.opacity = '1';
          value2.current.style.opacity = '1';
          value3.current.style.opacity = '1';
          value4.current.style.opacity = '0.2';
          value5.current.style.opacity = '0.2';
        }
        else if(audio.defaltVoulume === 0.4) {
          value1.current.style.opacity = '1';
          value2.current.style.opacity = '1';
          value3.current.style.opacity = '0.2';
          value4.current.style.opacity = '0.2';
          value5.current.style.opacity = '0.2';
        }
        else if(audio.defaltVoulume === 0.2) {
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
      <img className='soundimg' src={icon} alt='' />
      <div className='sound-bar-list'>
        <span className='slider-rail-list' onClick={() => controlVolume(id)}>
          <span className='slider-value-list 5' ref={value1}/>
          <span className='slider-value-list 4' ref={value2}/>
          <span className='slider-value-list 3' ref={value3}/>
          <span className='slider-value-list 2' ref={value4}/>
          <span className='slider-value-list 1' ref={value5}/>
        </span>
      </div>
      <img id='x' src={small_plus} alt='' onClick={() => deleteButton(id)}/>
    </div>
  );
}

export default MainSelected
