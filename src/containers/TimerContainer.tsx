import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { Timer } from '../component/MainHeader';
import { startTimer, stopTimer, pauseTimer, addTenMin, removeTenMin, removeOneSec } from '../modules/timer';

const TimerContainer: React.FC = () => {
  const isCounting = useSelector((state: RootState) => state.timer.isCounting);
  const counterDuration = useSelector((state: RootState) => state.timer.counterDuration);
  const elapseTime = useSelector((state: RootState) => state.timer.elapseTime);
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

  return (
    <Timer 
      isCounting={isCounting}
      counterDuration={counterDuration}
      elapseTime={elapseTime}
      minute={minute}
      seconds={seconds}
      startToTimer={startToTimer}
      stopToTimer={stopToTimer}
      pauseToTimer={pauseToTimer}
      addTenMinute={addTenMinute}
      removeTenMinute={removeTenMinute}
      removeOneSeconds={removeOneSeconds}
    />
  );
}

export default TimerContainer;