import React from 'react';
import IntroFn3Container from '../../containers/IntroContainers/IntroFn3Comtainer';
import IntroFooterContainer from '../../containers/IntroContainers/IntroFooterContainer';
import IntroMainContainer from '../../containers/IntroContainers/IntroMainContainer';
import IntroFn1 from './IntroFn1';
import IntroFn2 from './IntroFn2';
import IntroFn3 from './IntroFn3';


function Intro() {
  return (
    <div className="intro_Set">
      <IntroMainContainer />
      <IntroFn1 />
      <IntroFn2 />
      <IntroFn3Container />
      <IntroFooterContainer/>
    </div>
  )
}
export default Intro