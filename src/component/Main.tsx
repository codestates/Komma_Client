import React, { useState, useEffect } from 'react';
import MainHeaderContainer from '../containers/MainHeaderContainer';
import MainList from './MainList';
import MainFavContainer from '../containers/MainFavContainer';
import MainSelectContainer from '../containers/MainSelectedContainer';
import SigninContainer from '../containers/SigninContainer';
import Ending from './Ending';
import SettingContainer from '../containers/SettingContainer';

interface MainProps {
  color: string;
  isLoginModalOn: boolean;
  isEndingModalOn: boolean;
  isSettingModalOn: boolean;
  handleEndingModal: () => void;
}

const Main: React.FC<MainProps> = ({
  color,
  isLoginModalOn,
  isEndingModalOn,
  isSettingModalOn,
  handleEndingModal
}) => {

  return(
    <main className={`Main-${color}`}>
      <MainHeaderContainer />
      <MainFavContainer />
      <MainSelectContainer />
      <div className='waveBox'>
        <div className='wave-one'></div>
        <div className='wave-two'></div>
      </div>
      <MainList/>
      { isLoginModalOn ? <SigninContainer /> : null }
      { isEndingModalOn ? <Ending handleEndingModal={handleEndingModal}/> : null }
      { isSettingModalOn ? <SettingContainer /> : null }
    </main>
  );
}

export default Main
