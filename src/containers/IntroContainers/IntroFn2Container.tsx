import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules'
import IntroFn2 from '../../component/Intro/IntroFn2'
import {handleWindowSize} from '../../modules/setting'

function IntroFn2Container() {
  const width = useSelector((state: RootState) => state.setting.windowWidth);
  const dispatch = useDispatch();
  const handlingWindowSize = (size: number) => {
    dispatch(handleWindowSize(size));
  };

  return (
    <IntroFn2
    width={width}
    handlingWindowSize={handlingWindowSize}
    />
  )
}

export default IntroFn2Container