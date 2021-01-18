import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules'
import IntroMain from '../../component/Intro/IntroMain'
import {handleIntro} from '../../modules/intro'

function IntroMainContainer(){
  const isIntro = useSelector((state: RootState)=>state.intro.isIntro)
  const dispatch = useDispatch()

  const onHandleIntro =()=>{
    dispatch(handleIntro())
  }

  return(
    <IntroMain
    isIntro ={isIntro}
    onHandleIntro={onHandleIntro}
    />
  )
}

export default IntroMainContainer