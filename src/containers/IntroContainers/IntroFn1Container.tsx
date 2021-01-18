import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules'
import IntroFn1 from '../../component/Intro/IntroFn1'
import { handleIntro } from '../../modules/intro'

function IntroFn1Container() {
  const isIntro = useSelector((state: RootState) => state.intro.isIntro)
  const dispatch = useDispatch()

  const onHandleIntro = () => {
    dispatch(handleIntro())
  }

  return (
    <IntroFn1
      isIntro={isIntro}
      onHandleIntro={onHandleIntro}
    />
  )
}

export default IntroFn1Container