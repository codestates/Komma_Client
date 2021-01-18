import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules'
import App from '../component/App'


function AppContainer(){
  const isIntro = useSelector((state: RootState)=>state.intro.isIntro)

  return(
    <App
    isIntro ={isIntro}

    />
  )
}

export default AppContainer