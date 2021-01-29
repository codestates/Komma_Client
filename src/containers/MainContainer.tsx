import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { handleEndingModal } from '../modules/timer';
import { loginStabilizer } from '../modules/signin';
import { changeColor, handleRandomOn } from '../modules/color';
import { handleDarkMode, handleWindowSize } from '../modules/setting';
import { setMixtapeProperty } from '../modules/mixtape';
import { setSoundListProperty, handleLoadingOn, handleDegree } from '../modules/list';
import Main from '../component/Main';

const MainContainer: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.color.backgroundColor);
  const degree = useSelector((state: RootState) => state.list.degree);
  const isLoginModalOn = useSelector((state: RootState) => state.signin.isLoginModalOn);
  const isEndingModalOn = useSelector((state: RootState) => state.timer.isEndingModalOn);
  const isSettingModalOn = useSelector((state: RootState) => state.setting.isSettingModalOn);
  const isDarkMode = useSelector((state: RootState) => state.setting.isDarkMode);
  const isRandomOn = useSelector((state: RootState) => state.color.isRandomOn);
  const mixtape = useSelector((state: RootState) => state.mixtape?.mixtapes);
  const soundList = useSelector((state: RootState) => state.list.soundList);
  const isLoadingOn = useSelector((state: RootState) => state.list.isLoadingOn);
  const playList = useSelector((state: RootState) => state.selected.playList);
  const width = useSelector((state: RootState) => state.setting.windowWidth);
  const dispatch = useDispatch();

  const handlingEndingModal = () => {
    dispatch(handleEndingModal());
  };
  const loginStabilizing = () => {
    dispatch(loginStabilizer());
  };
  const changingColor = (color: string) => {
    dispatch(changeColor(color));
  };
  const handlingDarkMode = () => {
    dispatch(handleDarkMode());
  }
  const handlingRandomOn = () => {
    dispatch(handleRandomOn());
  }
  const settingMixtapeProperty = (modifiedMixtape: any[]) => {
    dispatch(setMixtapeProperty(modifiedMixtape));
  }
  const settingSoundListProperty = (modifiedSoundList: any[]) => {
    dispatch(setSoundListProperty(modifiedSoundList));
  }
  const handlingLoadingOn = () => {
    dispatch(handleLoadingOn());
  }
  const handlingWindowSize = (size: number) => {
    dispatch(handleWindowSize(size));
  };
  const handlingDegree = (deg: number) => {
    dispatch(handleDegree(deg));
  };

  return (
    <Main
      color={backgroundColor}
      degree={degree}
      width={width}
      isLoginModalOn={isLoginModalOn}
      isEndingModalOn={isEndingModalOn}
      isSettingModalOn={isSettingModalOn}
      isDarkMode={isDarkMode}
      isRandomOn={isRandomOn}
      isLoadingOn={isLoadingOn}
      mixtape={mixtape}
      playList={playList}
      soundList={soundList}
      handleEndingModal={handlingEndingModal}
      loginStabilizer={loginStabilizing}
      changeColor={changingColor}
      handleDarkMode={handlingDarkMode}
      handleRandomOn={handleRandomOn}
      setSoundListProperty={settingSoundListProperty}
      setMixtapeProperty={settingMixtapeProperty}
      handleLoadingOn={handlingLoadingOn}
      handleWindowSize={handlingWindowSize}
      handleDegree={handlingDegree}
    />
  );
}

export default MainContainer
