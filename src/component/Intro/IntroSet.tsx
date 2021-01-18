import React from 'react';
import IntroFn1Container from '../../containers/IntroContainers/IntroFn1Container';
import IntroMainContainer from '../../containers/IntroContainers/IntroMainContainer';
import IntroFn2 from './IntroFn2';

function Intro() {
  return (
    <div className="intro_Set">
      <IntroMainContainer />
      <IntroFn1Container/>
      <IntroFn2 />
    </div>
  )
}
export default Intro