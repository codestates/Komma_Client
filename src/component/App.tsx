import '../style/App.scss';
import React from 'react';
import MainContainer from '../containers/MainContainer';
import Intro from './Intro/IntroSet'



interface IntroProps {
  isIntro: boolean;

}


const App: React.FC<IntroProps> = ({ isIntro }) => {

  return (
    <>
      {isIntro ? <Intro /> : <MainContainer />}
    </>
  )
}

export default App;
