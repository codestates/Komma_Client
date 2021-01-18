import React from 'react';
import IntroFn1Container from '../../containers/IntroContainers/IntroFn1Container';
import IntroMainContainer from '../../containers/IntroContainers/IntroMainContainer';

function Intro() {
  return (
    <div className="intro_Set">
      <IntroMainContainer />
      <IntroFn1Container/>
    </div>
  )
}
export default Intro