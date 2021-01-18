import React from 'react';
import x from '../img/plus_black.svg';
import check from '../img/check.png';

interface SettingProps {
  isSettingModalOn: boolean;
  isDarkMode: boolean;
  color: string;
  handleSettingModal: () => void;
  handleDarkMode: () => void;
  changeColor: (inputColor: string) => void;
}

const Setting: React.FC<SettingProps> = ({
  isSettingModalOn,
  isDarkMode,
  color,
  handleSettingModal,
  handleDarkMode,
  changeColor
}) => {


  return(
    <div className='darkbackground'>
      <section className='setting-container'>
        <img className='setting-x' src={x} alt='' onClick={handleSettingModal} />
        <article className='setting-userinfo'>
          <header className='setting-userinfo-title'>UserInfo</header>
        </article>
        <div className='setting-center'></div>
        <article className='setting-general'>
          <header className='setting-general-title'>General</header>
          <div className='setting-general-color'>
            <h1>Background Color</h1>
            <div className='colors'>
              <div className={color === 'blue' ? 'blue selected' : 'blue'} onClick={() => changeColor('blue')}/>
              <div className={color === 'red' ? 'red selected' : 'red'} onClick={() => changeColor('red')}/>
              <div className={color === 'orange' ? 'orange selected' : 'orange'} onClick={() => changeColor('orange')}/>
              <div className={color === 'yellow' ? 'yellow selected' : 'yellow'} onClick={() => changeColor('yellow')}/>
              <div className={color === 'cyan' ? 'cyan selected' : 'cyan'} onClick={() => changeColor('cyan')}/>
              <div className={color === 'teal' ? 'teal selected' : 'teal'} onClick={() => changeColor('teal')}/>
              <div className={color === 'violet' ? 'violet selected' : 'violet'} onClick={() => changeColor('violet')}/>
              <div className={color === 'lime' ? 'lime selected' : 'lime'} onClick={() => changeColor('lime')}/>
              <div className={color === 'random' ? 'random selected' : 'random'} onClick={() => changeColor('random')}/>
              <div className='no'/>
            </div>
          </div>
          <div className='setting-general-darkmode'>
            <h1>DarkMode</h1>
            <div className='darkmode' onClick={handleDarkMode}>
              <div className={isDarkMode ? 'pointer-on' : 'pointer'}></div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Setting;
