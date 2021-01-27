import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { handleEndingModal } from '../modules/timer';
import { loginStabilizer } from '../modules/signin';
import { changeColor, handleRandomOn } from '../modules/color';
import { handleDarkMode } from '../modules/setting';
import { setMixtapeProperty } from '../modules/mixtape';
import { setSoundListProperty, handleLoadingOn } from '../modules/list';
import Main from '../component/Main';

const MainContainer: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.color.backgroundColor);
  const isLoginModalOn = useSelector((state: RootState) => state.signin.isLoginModalOn);
  const isEndingModalOn = useSelector((state: RootState) => state.timer.isEndingModalOn);
  const isSettingModalOn = useSelector((state: RootState) => state.setting.isSettingModalOn);
  const isDarkMode = useSelector((state: RootState) => state.setting.isDarkMode);
  const isRandomOn = useSelector((state: RootState) => state.color.isRandomOn);
  const mixtape = useSelector((state: RootState) => state.mixtape?.mixtapes);
  const soundList = useSelector((state: RootState) => state.list.soundList);
  const isLoadingOn = useSelector((state: RootState) => state.list.isLoadingOn);
  const playList = useSelector((state: RootState) => state.selected.playList);
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

  return (
    <Main
      color={backgroundColor}
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
    />
  );
}

export default MainContainer
