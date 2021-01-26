import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import MainHeader from '../component/MainHeader';
import { handleLoginModal } from '../modules/signin';
import { handleList } from '../modules/selected';
import { handleSettingModal } from '../modules/setting';

const MainHeaderContainer: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.signin.isLogin);
  const dispatch = useDispatch();

  const handlingLoginModal = () => {
    dispatch(handleLoginModal());
  }
  const handlingSettingModal = () => {
    dispatch(handleSettingModal());
  };

  return (
    <MainHeader 
      isLogin={isLogin}
      handleLoginModal={handlingLoginModal}
      handleSettingModal={handlingSettingModal}
    />
  );
}

export default MainHeaderContainer;
