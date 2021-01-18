import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { handleEndingModal } from '../modules/timer';
import Main from '../component/Main';

const MainContainer: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.color.backgroundColor);
  const isLoginModalOn = useSelector((state: RootState) => state.signin.isLoginModalOn);
  const isEndingModalOn = useSelector((state: RootState) => state.timer.isEndingModalOn);
  const isSettingModalOn = useSelector((state: RootState) => state.setting.isSettingModalOn);
  const dispatch = useDispatch();

  const handlingEndingModal = () => {
    dispatch(handleEndingModal());
  };

  return (
    <Main
      color={backgroundColor}
      isLoginModalOn={isLoginModalOn}
      isEndingModalOn={isEndingModalOn}
      isSettingModalOn={isSettingModalOn}
      handleEndingModal={handlingEndingModal}
    />
  );
}

export default MainContainer
