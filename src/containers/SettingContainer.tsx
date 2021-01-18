import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Setting from '../component/Setting';
import { handleSettingModal, handleDarkMode } from '../modules/setting';
import { changeColor } from '../modules/color';

const SettingContainer: React.FC = () => {

  const isSettingModalOn = useSelector((state: RootState) => state.setting.isSettingModalOn);
  const isDarkMode = useSelector((state: RootState) => state.setting.isDarkMode);
  const color = useSelector((state: RootState) => state.color.backgroundColor);
  const dispatch = useDispatch();

  const handlingSettingModal = () => {
    dispatch(handleSettingModal());
  };
  const handlingDarkMode = () => {
    dispatch(handleDarkMode());
  };
  const changingColor = (inputColor: string) => {
    dispatch(changeColor(inputColor));
  }

  return (
    <Setting
      isSettingModalOn={isSettingModalOn}
      isDarkMode={isDarkMode}
      color={color}
      handleSettingModal={handlingSettingModal}
      handleDarkMode={handlingDarkMode}
      changeColor={changingColor}
    />
  );
}

export default SettingContainer;
