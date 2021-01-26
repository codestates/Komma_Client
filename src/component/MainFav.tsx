import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import img_medi from '../img/meditation.png';
import img_sleep from '../img/sleep.png';
import img_add from '../img/plus.png';
import img_delete from '../img/trash.png';
import x from '../img/x.png';
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



interface MainFavProps {
  color: string;
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
}



const MainFav: React.FC<MainFavProps> = ({
  color,
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
  soundList
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3.9,
    slidesToScroll: 2.5
  }

  return (
    <div>
      {isListAddModalOn ? <FavAddModal onaddItem={onaddItem} playList={playList} onhandleSelectedIcon={onhandleSelectedIcon} selectedIcon={selectedIcon} onhandleListAddModal={onhandleListAddModal} /> : null}
      <nav className='fav-container'>
        <div className='fav-icons'>
          <span className='fav-icons-desc'>
            Mixtape ,
        </span>
          <span className='fav-icons-add' onClick={onhandleListAddModal}>
            <img src={img_add} alt='' />
          </span>
          <span className='fav-icons-delete' onClick={onHandleDeleteMode}>
            <img src={img_delete} alt='' />
          </span>
        </div>
        <Slider className='fav-cards' {...settings}>
          {mixtapes?.map(tape => <SingleFav
            key={tape.playlists.id}
            id={tape.playlists.id}
            onsetSoundListProperty={onsetSoundListProperty}
            soundList={soundList}
            title={tape.title}
            savesongs={tape.playlists.savesongs}
            icon={tape.playlists.icon}
            play={tape.playlists.play}
            onsetMixtapeProperty={onsetMixtapeProperty}
            mixtapes={mixtapes}
          />)}
        </Slider>
        <div className={`side-blur ${color}`}></div>
        <div className={`side-blur right ${color}`}></div>
      </nav>
    </div>
  );
}


interface SingleFavProps {
  title: string;
  icon: string;
  savesongs: any[];
  soundList: any[];
  play: boolean;
  id: number;
  mixtapes: any[];
  onsetSoundListProperty: (modifiedSoundList: any[]) => void;
  onsetMixtapeProperty: (modifiedMixtape: any[]) => void;
}
export const SingleFav: React.FC<SingleFavProps> = ({
  title,
  icon,
  savesongs, //실행시킬친구들
  soundList,  // 모든 소리들 
  play,
  id,
  mixtapes,
  onsetSoundListProperty, // 모든소리들을 변형시켜준다
  onsetMixtapeProperty

}) => {

  const favRef: any = useRef()

  useEffect(() => {
    if (play) {
      favRef.current.className = 'fav-single-active'
    } else {
      favRef.current.className = 'fav-single'
    }
  })


  const handlePlayMixtapes = () => {
    let modifiedSoundlist = soundList.slice()
    let modifiedMixtapes = mixtapes.slice()

    if (play) {
      favRef.current.className = 'fav-single'
      for (let i = 0; i < mixtapes.length; i++) {
        if (mixtapes[i].playlists.id === id) {
          modifiedMixtapes[i].playlists.play = false;
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
        if (mixtapes[i].playlists.id === id) {
          modifiedMixtapes[i].playlists.play = true;
          for (let j = 0; j < mixtapes[i].playlists.savesongs.length; j++) {
            for (let z = 0; z < soundList.length; z++) {
              if (mixtapes[i].playlists.savesongs[j].id === soundList[z].id) {
                let song = mixtapes[i].playlists.savesongs[j]
                modifiedSoundlist[z].defaultVolume = song.defaultVolume
                modifiedSoundlist[z].play = true
              }
            }
          }
        } else {
          modifiedMixtapes[i].playlists.play = false;
        }
      }
    }
    onsetSoundListProperty(modifiedSoundlist)
    onsetMixtapeProperty(modifiedMixtapes)
    console.log(soundList)
    console.log(mixtapes)
  }

  return (
    <div className='fav-single' ref={favRef} onClick={handlePlayMixtapes}>
      <div className='fav-img'>
        <img src={icon} alt='' />
      </div>
      <p className='fav-desc'>
        {title}
      </p>
    </div>
  );
}
export const SingleFav1: React.FC = () => {

  return (
    <div className='fav-single'>
      <img className='fav_delet_x' src={x} alt="x" />
      <div className='fav-img'>
        <img src={img_medi} alt='' />
      </div>
      <p className='fav-desc'>
        Meditation
      </p>
    </div>
  );
}



interface FavAddProps {
  selectedIcon,
  onhandleSelectedIcon,
  onhandleListAddModal,
  playList,
  onaddItem
}
export const FavAddModal: React.FC<FavAddProps> = ({
  onhandleListAddModal,
  selectedIcon,
  onhandleSelectedIcon,
  playList,
  onaddItem
}) => {
  const inputRef: any = useRef()
  const saveMixtapes = () => {
    let mixtape = {
      title: inputRef.current.value,
      savesongs: [
        ...playList
      ],
      icon: selectedIcon
    }
    let token: any = localStorage.getItem('token')
    axios.post(
      'http://www.kommaa.shop/users/saveplaylist',
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
        console.log(data)
        onaddItem(data.playlists)//1  12  123 으로 될 수 있으니 액션변경요함
      })
  }

  return (
    <div className='favModalBody'>
      <div className='favModalBox'>
        <img className='fav_x' src={x} alt="x" onClick={onhandleListAddModal} />
        <img className='fav_icon' onClick={() => onhandleSelectedIcon('https://i.imgur.com/vR7MiCh.png')} src={computer} alt="airpot" />
        <img className='fav_icon' onClick={() => onhandleSelectedIcon('https://i.imgur.com/E2u4I6X.png')} src={cycling} alt="airpot" />
        <img className='fav_icon' onClick={() => onhandleSelectedIcon('https://i.imgur.com/aiy6OCI.png')} src={heart} alt="airpot" />
        <img className='fav_icon' onClick={() => onhandleSelectedIcon('https://i.imgur.com/OJm8WyS.png')} src={question} alt="airpot" />
        <img className='fav_icon' onClick={() => onhandleSelectedIcon('https://i.imgur.com/TsyGxBq.png')} src={man} alt="airpot" />
        <img className='fav_icon' onClick={() => onhandleSelectedIcon('https://i.imgur.com/mc87bg6.png')} src={moon} alt="airpot" />
        <img className='fav_icon1' onClick={() => onhandleSelectedIcon('https://i.imgur.com/nHbNWeR.png')} src={rating} alt="airpot" />
        <img className='fav_icon1' onClick={() => onhandleSelectedIcon('https://i.imgur.com/POL0Oip.png')} src={shuffle} alt="airpot" />
        <img className='fav_icon1' onClick={() => onhandleSelectedIcon('https://i.imgur.com/gi1x3TN.png')} src={smile1} alt="airpot" />
        <img className='fav_icon1' onClick={() => onhandleSelectedIcon('https://i.imgur.com/rwGlahO.png')} src={smile} alt="airpot" />
        <img className='fav_icon1' onClick={() => onhandleSelectedIcon('https://i.imgur.com/ZuC0S8E.png')} src={woman} alt="airpot" />
        <img className='fav_icon1' onClick={() => onhandleSelectedIcon('https://i.imgur.com/Qo2Pa0H.png')} src={yoga} alt="airpot" />
        <input className='fav_input' ref={inputRef} placeholder='이름을 입력해주세요' />
        <button className='fav_button' onClick={saveMixtapes}>SAVE</button>
      </div>
    </div>
  )
}


export default MainFav;
