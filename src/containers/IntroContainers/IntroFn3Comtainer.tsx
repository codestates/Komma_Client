import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import IntroFn3 from '../../component/Intro/IntroFn3';
import {
  startTimer,
  stopTimer,
  addTenMin,
  removeTenMin,
  removeOneSec,
  handleEndingModal
} from '../../modules/timer';
import { changeIntroColor } from '../../modules/color';

const IntroFn3Container: React.FC = () => {
  const color = useSelector((state: RootState) => state.color.introColor);
  const isCounting = useSelector((state: RootState) => state.timer.isCounting);
  const minute = useSelector((state: RootState) => state.timer.minute);
  const seconds = useSelector((state: RootState) => state.timer.seconds);
  const dispatch = useDispatch();

  const onIntroColorChnage = (introColor: string) => {
    dispatch(changeIntroColor(introColor));
  }

  const startToTimer = () => {
    dispatch(startTimer());
  };
  const stopToTimer = () => {
    dispatch(stopTimer());
  };
  const addTenMinute = () => {
    dispatch(addTenMin());
  };
  const removeTenMinute = () => {
    dispatch(removeTenMin());
  };
  const removeOneSeconds = () => {
    dispatch(removeOneSec());
  }
  const handlingEndingModal = () => {
    dispatch(handleEndingModal());
  }

  return (
    <IntroFn3
      color={color}
      onIntroColorChnage={onIntroColorChnage}
      isCounting={isCounting}
      minute={minute}
      seconds={seconds}
      startToTimer={startToTimer}
      stopToTimer={stopToTimer}
      addTenMinute={addTenMinute}
      removeTenMinute={removeTenMinute}
      removeOneSeconds={removeOneSeconds}
      handlingEndingModal={handlingEndingModal}
    />
  );
}

export default IntroFn3Container;