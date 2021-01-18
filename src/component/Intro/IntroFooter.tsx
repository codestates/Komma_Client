import React from 'react';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

interface IntroFooterProps {
  isIntro: boolean;
  onHandleIntro: () => void;
}

const IntroFooter = ({ onHandleIntro
}: IntroFooterProps) => {
  return (
    <div className='introFooter'>
      <Fade up delay ={1000}>
        <div className='introFooter_description'>
          정말 간단하죠? 한번 사용해보세요!
        </div>
      </Fade>
      <Fade up delay ={1000}>
        <Flash delay ={1000}>
          <button className="introFooter_button" onClick={onHandleIntro}>Use Service</button>
        </Flash>
      </Fade>
    </div>
  )
}
export default IntroFooter