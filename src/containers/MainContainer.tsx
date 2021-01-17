import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {
  changeColorRed,
  changeColorBlue,
  changeColorViolet,
  changeColorOrange,
  changeColorYellow,
  changeColorCyan,
  changeColorTeal,
  changeColorLime,
  changeColorRandom
} from '../modules/color';
import Main from '../component/Main';

const MainContainer: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.color.backgroundColor);
  const isLoginModalOn = useSelector((state: RootState) => state.signin.isLoginModalOn);
  const dispatch = useDispatch();

  const changeColorToRed = () => {
    dispatch(changeColorRed());
  };
  const changeColorToBlue = () => {
    dispatch(changeColorBlue());
  };
  const changeColorToViolet = () => {
    dispatch(changeColorViolet());
  };
  const changeColorToOrange = () => {
    dispatch(changeColorOrange());
  };
  const changeColorToCyan = () => {
    dispatch(changeColorCyan());
  };
  const changeColorToTeal = () => {
    dispatch(changeColorTeal());
  };
  const changeColorToLime = () => {
    dispatch(changeColorLime());
  };
  const changeColorToRandom = () => {
    dispatch(changeColorRandom());
  };
  const changeColorToYellow = () => {
    dispatch(changeColorYellow());
  };

  return (
    <Main
      color={backgroundColor}
      isLoginModalOn={isLoginModalOn}
      changeColorRed={changeColorToRed}
      changeColorBlue={changeColorToBlue}
      changeColorViolet={changeColorToViolet}
      changeColorOrange={changeColorToOrange}
      changeColorYellow={changeColorToYellow}
      changeColorCyan={changeColorToCyan}
      changeColorTeal={changeColorToTeal}
      changeColorLime={changeColorToLime}
      changeColorRandom={changeColorToRandom}
    />
  );
}

export default MainContainer
