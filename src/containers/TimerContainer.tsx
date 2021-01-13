import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { Timer } from '../component/MainHeader';
import {
  startTimer,
  stopTimer,
  pauseTimer,
  addTenMin,
  removeTenMin,
  removeOneSec,
  handleEndingModal
} from '../modules/timer';

const TimerContainer: React.FC = () => {
  const isCounting = useSelector((state: RootState) => state.timer.isCounting);
  const isEndingModalOn = useSelector((state: RootState) => state.timer.isEndingModalOn);
  const minute = useSelector((state: RootState) => state.timer.minute);
  const seconds = useSelector((state: RootState) => state.timer.seconds);
  const dispatch = useDispatch();

  const startToTimer = () => {
    dispatch(startTimer());
  };
  const stopToTimer = () => {
    dispatch(stopTimer());
  };
  const pauseToTimer = () => {
    dispatch(pauseTimer());
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
    <Timer 
      isCounting={isCounting}
      minute={minute}
      seconds={seconds}
      isEndingModalOn={isEndingModalOn}
      startToTimer={startToTimer}
      stopToTimer={stopToTimer}
      pauseToTimer={pauseToTimer}
      addTenMinute={addTenMinute}
      removeTenMinute={removeTenMinute}
      removeOneSeconds={removeOneSeconds}
      handlingEndingModal={handlingEndingModal}
    />
  );
}

export default TimerContainer;