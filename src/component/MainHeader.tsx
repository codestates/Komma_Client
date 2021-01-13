import React from 'react';
import logo from '../img/logo.png';

interface MainHeaderProps {
  isLogin: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ isLogin }) => {


  return(
    <header className='header'>
      <img src={logo} alt='' className='logo'/>
      {isLogin ? <div className='timer-container'></div> : null}
      <span className='menu'>{isLogin ? 'Setting' : 'Login'}</span>
    </header>
  );
}

export default MainHeader;
