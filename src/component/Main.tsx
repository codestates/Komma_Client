import React, { useState, useEffect } from 'react';
import MainHeaderContainer from '../containers/MainHeaderContainer';
import MainList from './MainList';
import MainFavContainer from '../containers/MainFavContainer';
import MainSelectContainer from '../containers/MainSelectedContainer';

interface MainProps {
  color: string;
  changeColorRed: () => void;
  changeColorBlue: () => void;
  changeColorViolet: () => void;
  changeColorOrange: () => void;
  changeColorYellow: () => void;
  changeColorCyan: () => void;
  changeColorLime: () => void;
  changeColorTeal: () => void;
  changeColorRandom: () => void;
}

const Main: React.FC<MainProps> = ({
  color,
  changeColorRed,
  changeColorBlue,
  changeColorViolet,
  changeColorOrange,
  changeColorYellow,
  changeColorCyan,
  changeColorLime,
  changeColorTeal,
  changeColorRandom
}) => {


  const generateRandomColor = () => {
    setInterval(changeColorRandom, 7000);
  }


  return(
    <main className={`Main-${color}`}>
      <MainHeaderContainer />
      <MainFavContainer />
      <MainSelectContainer />
      <div className='waveBox'>
        <div className='wave-one'></div>
        <div className='wave-two'></div>
      </div>
      <button onClick={changeColorRed}>Red</button>
      <button onClick={changeColorBlue}>Blue</button>
      <button onClick={changeColorViolet}>Violet</button>
      <button onClick={changeColorOrange}>Orange</button>
      <button onClick={changeColorYellow}>Yellow</button>
      <button onClick={changeColorCyan}>Cyan</button>
      <button onClick={changeColorLime}>Lime</button>
      <button onClick={changeColorTeal}>Teal</button>
      <button onClick={generateRandomColor}>Random</button>
      <MainList/>
    </main>
  );
}

export default Main
