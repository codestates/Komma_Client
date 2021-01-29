import React from 'react';
import IntroFn3Container from '../../containers/IntroContainers/IntroFn3Container';
import IntroFn2Container from '../../containers/IntroContainers/IntroFn2Container';
import IntroFooterContainer from '../../containers/IntroContainers/IntroFooterContainer';
import IntroMainContainer from '../../containers/IntroContainers/IntroMainContainer';
import IntroFn1 from './IntroFn1';



function Intro() {
  return (
    <div className="intro_Set">
      <IntroMainContainer />
      <IntroFn1 />
      <IntroFn2Container />
      <IntroFn3Container />
      <IntroFooterContainer/>
    </div>
  )
}
export default Intro