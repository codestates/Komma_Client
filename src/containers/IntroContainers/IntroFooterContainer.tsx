import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules'
import Footer from '../../component/Intro/IntroFooter'
import { handleIntro } from '../../modules/intro'

function IntroFooterContainer() {
  const isIntro = useSelector((state: RootState) => state.intro.isIntro)
  const dispatch = useDispatch()

  const onHandleIntro = () => {
    dispatch(handleIntro())
  }

  return (
    <Footer
      isIntro={isIntro}
      onHandleIntro={onHandleIntro}
    />
  )
}

export default IntroFooterContainer