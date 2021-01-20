import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Setting from '../component/Setting';
import {
  handleSettingModal,
  handleDarkMode,
  handleUserInfoChangeMode,
  getEmailFromServer,
  getUserNameFromServer
} from '../modules/setting';
import { changeColor } from '../modules/color';
import { handleLogin } from '../modules/signin';

const SettingContainer: React.FC = () => {

  const isSettingModalOn = useSelector((state: RootState) => state.setting.isSettingModalOn);
  const isDarkMode = useSelector((state: RootState) => state.setting.isDarkMode);
  const color = useSelector((state: RootState) => state.color.backgroundColor);
  const email = useSelector((state: RootState) => state.setting.email);
  const username = useSelector((state: RootState) => state.setting.username);
  const userInfoChangeMode = useSelector((state: RootState) => state.setting.userInfoChangeMode);
  const currentPassword = useSelector((state: RootState) => state.setting.currentPassword);
  const newPassword = useSelector((state: RootState) => state.setting.newPassword);
  const repeatPassword = useSelector((state: RootState) => state.setting.repeatPassword);
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
  const handlingUserInfoChangeMode = () => {
    dispatch(handleUserInfoChangeMode());
  }
  const gettingUserNameFromServer = (name: string) => {
    dispatch(getUserNameFromServer(name));
  }
  const gettingEmailFromServer = (email: string) => {
    dispatch(getEmailFromServer(email));
  }
  const handlingLogin = () => {
    dispatch(handleLogin());
  }

  return (
    <Setting
      isSettingModalOn={isSettingModalOn}
      isDarkMode={isDarkMode}
      color={color}
      email={email}
      username={username}
      userInfoChangeMode={userInfoChangeMode}
      currentPassword={currentPassword}
      newPassword={newPassword}
      repeatPassword={repeatPassword}
      handleSettingModal={handlingSettingModal}
      handleDarkMode={handlingDarkMode}
      changeColor={changingColor}
      handleUserInfoChangeMode={handlingUserInfoChangeMode}
      getUserNameFromServer={gettingUserNameFromServer}
      getEmailFromServer={gettingEmailFromServer}
      handleLogin={handlingLogin}
    />
  );
}

export default SettingContainer;
