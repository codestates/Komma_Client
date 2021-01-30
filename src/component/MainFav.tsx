import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import img_medi from '../img/meditation.png';
import img_sleep from '../img/sleep.png';
import img_add from '../img/plus.png';
import img_delete from '../img/trash.png';
import x from '../img/plus_black.svg';
import computer from '../img/computer.png'
import cycling from '../img/cycling.png'
import heart from '../img/heart.png'
import question from '../img/question.png'
import man from '../img/man.png'
import rating from '../img/rating.png'
import shuffle from '../img/shuffle.png'
import smile1 from '../img/smile (1).png'
import smile from '../img/smile.png'
import woman from '../img/woman.png'
import yoga from '../img/yoga.png'
import moon from '../img/moon.png'
import axios from 'axios';
import { setMixtapeProperty } from '../modules/mixtape';



interface MainFavProps {
  isLogin: boolean;
  color: string;
  width: number;
  isListAddModalOn?: boolean;
  isDeleteMode?: boolean;
  playList: any;
  mixtapes?: any[];
  soundList: any[];
  selectedIcon?: string;
  onhandleListAddModal: () => void;
  onHandleDeleteMode: () => void;
  onaddItem: (playlists: object) => void;
  ondeleteItem: (playlistsId: number) => void;
  onsetSoundListProperty: (modifiedSoundList: any[]) => void;
  onsetMixtapeProperty: (modifiedMixtape: any[]) => void;
  onhandleSelectedIcon: (icon: string) => void;
  handleLoginModal: () => void;
  handleLogin: () => void;
}



const MainFav: React.FC<MainFavProps> = ({
  color,
  isLogin,
  width,
  mixtapes,
  selectedIcon,
  playList,
  onhandleSelectedIcon,
  onhandleListAddModal,
  onHandleDeleteMode,
  onsetSoundListProperty,
  onsetMixtapeProperty,
  onaddItem,
  isListAddModalOn,
  isDeleteMode,
  soundList,
  handleLoginModal,
  handleLogin
}) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: width > 800 ? 3.9 : 2,
    slidesToScroll: width > 800 ? 2.5 : 1
  }

  const handleListAddModal = () => {
    if(!isLogin) {
      handleLoginModal();
    }
    else {
      onhandleListAddModal();
    }
  }

  return (
    <div>
      {isListAddModalOn ? <FavAddModal handleLogin={handleLogin} onaddItem={onaddItem} playList={playList} onhandleSelectedIcon={onhandleSelectedIcon} selectedIcon={selectedIcon} onhandleListAddModal={onhandleListAddModal} /> : null}
    <nav className={width > 800 ? 'fav-container' : 'fav-container-m'}>
        <div className={width > 800 ? 'fav-icons' : 'fav-icons-m'}>
          <span className='fav-icons-desc'>
            Mixtape ,
        </span>
          <span className='fav-icons-add' onClick={handleListAddModal}>
            <img src={img_add} alt='' />
          </span>
          <span className='fav-icons-delete' onClick={onHandleDeleteMode}>
            <img src={img_delete} alt='' />
          </span>
        </div>
        <Slider className={width > 800 ? 'fav-cards' : 'fav-cards-m'} {...settings}>
          {mixtapes?.map(tape => <SingleFav
            key={tape.id}
            width={width}
            id={tape.id}
            onsetSoundListProperty={onsetSoundListProperty}
            soundList={soundList}
            title={tape.title}
            savesongs={tape.savesongs}
            icon={tape.icon}
            play={tape.play}
            onsetMixtapeProperty={onsetMixtapeProperty}
            mixtapes={mixtapes}
            isDeleteMode={isDeleteMode}
            handleLogin={handleLogin}
          />)}
        </Slider>
        <div className={`side-blur ${color}`}></div>
        <div className={`side-blur right ${color}`}></div>
      </nav>
    </div>
  );
}


interface SingleFavProps {
  width: number;
  title: string;
  icon: string;
  savesongs: any[];
  soundList: any[];
  play: boolean;
  id: number;
  mixtapes: any[];
  isDeleteMode?: boolean;
  onsetSoundListProperty: (modifiedSoundList: any[]) => void;
  onsetMixtapeProperty: (modifiedMixtape: any[]) => void;
  handleLogin: () => void;
}
export const SingleFav: React.FC<SingleFavProps> = ({
  width,
  title,
  icon,
  savesongs, //실행시킬친구들
  soundList,  // 모든 소리들 
  play,
  id,
  mixtapes,
  isDeleteMode,
  onsetSoundListProperty, // 모든소리들을 변형시켜준다
  onsetMixtapeProperty,
  handleLogin
}) => {

  const favRef: any = useRef();
  const iconRef: any = useRef();
  const titleRef: any = useRef();

  useEffect(() => {
    if(play) {
      favRef.current.className = 'fav-single-active'
    } else {
      favRef.current.className = 'fav-single'
    }
  })

  // 삭제모드시 스타일 변경
  useEffect(() => {
    if(isDeleteMode) {
      iconRef.current.style.opacity = '0.2';
      titleRef.current.style.opacity = '0.2';
    }
    else {
      iconRef.current.style.opacity = '1';
      titleRef.current.style.opacity = '1';
    }
  })

  // 믹스테잎 삭제 함수
  const deleteMixtape = () => {
    let token = localStorage.getItem('token');
    axios.post(
      'http://www.kommaa.shop/playlist/deleteplaylist',
      { id: id },
      { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return axios.get(
        'http://www.kommaa.shop/users/userinfo',
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      )
    })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      if(mixtapes) {
        let modifiedMixtape = mixtapes.slice(0, 3);
        if(data.playlist) {
          for(let i = 0; i < data.playlists.length; i ++) {
            modifiedMixtape.push(data.playlists[i]);
          }
          setMixtapeProperty(modifiedMixtape);
        }
        else {
          setMixtapeProperty(modifiedMixtape);
        }
      }
      window.location.reload();
    })
    .catch(error => {
      console.log(error.response);
      if(error.response.status === 400) {
        //! 세션만료 모달, 로그인 해제
        localStorage.clear();
        handleLogin();
        window.location.reload();
        return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
      }
    })
  }

  const handlePlayMixtapes = () => {
    let modifiedSoundlist = soundList.slice()
    let modifiedMixtapes = mixtapes.slice()
    if(isDeleteMode) {
      return;
    }

    if (play) {
      width > 800 ? favRef.current.className = 'fav-single' : favRef.current.className = 'fav-single-m';
      for (let i = 0; i < mixtapes.length; i++) {
        if (mixtapes[i].id === id) {
          modifiedMixtapes[i].play = false;
          for (let j = 0; j < soundList.length; j++) {
            modifiedSoundlist[j].play = false;
          }
        }
      }
    } else {
      favRef.current.className = 'fav-single-active'
      for (let j = 0; j < soundList.length; j++) {
        modifiedSoundlist[j].play = false;
      }
      for (let i = 0; i < mixtapes.length; i++) {
        if (mixtapes[i].id === id) {
          modifiedMixtapes[i].play = true;
          for (let j = 0; j < mixtapes[i].savesongs.length; j++) {
            for (let z = 0; z < soundList.length; z++) {
              if (mixtapes[i].savesongs[j].id === soundList[z].id) {
                let song = mixtapes[i].savesongs[j]
                modifiedSoundlist[z].defaultVolume = song.defaultVolume
                modifiedSoundlist[z].play = true
              }
            }
          }
        } else {
          modifiedMixtapes[i].play = false;
        }
      }
    }
    onsetSoundListProperty(modifiedSoundlist)
    onsetMixtapeProperty(modifiedMixtapes)
    console.log(soundList)
    console.log(mixtapes)
  }

  return (
    <div className={width > 800 ? 'fav-single' : 'fav-single-m'} ref={favRef} onClick={isDeleteMode && id < 900 ? deleteMixtape : handlePlayMixtapes}>
      { isDeleteMode && id < 900 ? <img className='fav_delet_x' src={img_delete} alt="x" /> : null }
      <div className='fav-img'>
        <img src={icon} alt='' ref={iconRef}/>
      </div>
      <p className='fav-desc' ref={titleRef}>
        {title}
      </p>
    </div>
  );
}



interface FavAddProps {
  selectedIcon?: string;
  onhandleSelectedIcon: (icon: string) => void;
  onhandleListAddModal: () => void;
  playList: any[];
  onaddItem: (item: any) => void;
  handleLogin: () => void;
}
export const FavAddModal: React.FC<FavAddProps> = ({
  onhandleListAddModal,
  selectedIcon,
  onhandleSelectedIcon,
  playList,
  onaddItem,
  handleLogin
}) => {

  const errorRef: any = useRef();
  const inputRef: any = useRef();
  const iconRef1: any = useRef();
  const iconRef2: any = useRef();
  const iconRef3: any = useRef();
  const iconRef4: any = useRef();
  const iconRef5: any = useRef();
  const iconRef6: any = useRef();
  const iconRef7: any = useRef();
  const iconRef8: any = useRef();
  const iconRef9: any = useRef();
  const iconRef10: any = useRef();
  const iconRef11: any = useRef();
  const iconRef12: any = useRef();

  const chooseIcon = (url: string, e: any) => {
    if(e.target.className === 'fav_icon') {
      let icons = [
        iconRef1, iconRef2, iconRef3,
        iconRef4, iconRef5, iconRef6,
        iconRef7, iconRef8, iconRef9,
        iconRef10, iconRef11, iconRef12
      ];
      for(let i of icons) {
        if(i.current.className === 'fav_icon_active') {
          i.current.className = 'fav_icon';
        }
      }
      onhandleSelectedIcon(url);
      e.target.className = 'fav_icon_active';
    }
    else if(e.target.className === 'fav_icon_active') {
      e.target.className = 'fav_icon';
    }
  }


  const saveMixtapes = () => {
    let mixtape = {
      title: inputRef.current.value,
      savesongs: [
        ...playList
      ],
      icon: selectedIcon
    }
    let token: any = localStorage.getItem('token')
    if(!selectedIcon) {
      errorRef.current.textContent = '아이콘을 선택해주세요!'
      return;
    }
    if(!inputRef.current.value) {
      errorRef.current.textContent = '믹스테잎 이름을 입력해주세요!'
      return;
    }
    if(playList.length < 2) {
      errorRef.current.textContent = '소리를 2개 이상 선택해주세요!'
      return;
    }
    axios.post(
      'http://www.kommaa.shop/playlist/saveplaylist',
      { ...mixtape },
      { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
    )
      .then(res => res.data)
      .then(data => {
        console.log(data)
        return axios.get(
          'http://www.kommaa.shop/users/userinfo',
          { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
        )
      })
      .then(res => res.data)
      .then(data => {
        console.log(data);
        onaddItem(data.playlists[data.playlists.length - 1]);
        onhandleSelectedIcon('');
        onhandleListAddModal();
      })
      .catch(error => {
        console.log(error.response);
        if(error.response.status === 400) {
          //! 세션만료 모달, 로그인 해제
          localStorage.clear();
          handleLogin();
          window.location.reload();
          return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
        }
      })
  }

  return (
    <div className='fav_back'>
      <div className='fav_back_one' onClick={onhandleListAddModal} />
      <div className='fav_back_two' onClick={onhandleListAddModal} />
      <div className='fav_back_three' onClick={onhandleListAddModal} />
      <div className='fav_back_four' onClick={onhandleListAddModal} />
      <div className='fav_modal'>
        <div className='fav_iconbox'>
          <img className='fav_x' src={x} alt="x" onClick={onhandleListAddModal} />
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/vR7MiCh.png', e)} src={computer} alt="airpot" ref={iconRef1}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/E2u4I6X.png', e)} src={cycling} alt="airpot" ref={iconRef2}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/aiy6OCI.png', e)} src={heart} alt="airpot" ref={iconRef3}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/OJm8WyS.png', e)} src={question} alt="airpot" ref={iconRef4}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/TsyGxBq.png', e)} src={man} alt="airpot" ref={iconRef5}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/mc87bg6.png', e)} src={moon} alt="airpot" ref={iconRef6}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/nHbNWeR.png', e)} src={rating} alt="airpot" ref={iconRef7}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/POL0Oip.png', e)} src={shuffle} alt="airpot" ref={iconRef8}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/gi1x3TN.png', e)} src={smile1} alt="airpot" ref={iconRef9}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/rwGlahO.png', e)} src={smile} alt="airpot" ref={iconRef10}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/ZuC0S8E.png', e)} src={woman} alt="airpot" ref={iconRef11}/>
          <img className='fav_icon' onClick={(e) => chooseIcon('https://i.imgur.com/Qo2Pa0H.png', e)} src={yoga} alt="airpot" ref={iconRef12}/>
        </div>
        <input className='fav_input' ref={inputRef} placeholder='이름을 입력해주세요' />
        <button className='fav_button' onClick={saveMixtapes}>SAVE</button>
        <p className='fav_error' ref={errorRef}></p>
      </div>
    </div>
  )
}


export default MainFav;
