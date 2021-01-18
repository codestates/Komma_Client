import React from 'react';
import comma from '../../img/logo.png';
import komma from '../../img/Komma.png';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade';
import next from '../../img/Next.png'
import Flash from 'react-reveal/Flash';



interface IntroMainProps {
  isIntro: boolean;
  onHandleIntro: () => void;
}

const IntroMain = ({ onHandleIntro
}: IntroMainProps) => {
  return (
    <div className='intro_Main'>
      <div className='intro_Header'>
        <Fade>
        <div className='intro_logo'>Komma <img className='kommaImg'src={komma} alt="komma"/></div>
        </Fade>
      </div>
      <div className='intro_body'>
        <Zoom>
          <img className='intro_MainImg' src={komma} alt="mainImg" />
        </Zoom>
        <Fade up delay={500}>
          <div className='description_Main'>
            바쁜 일상속,<div className='blank'/>쉬는 시간 <div className='blank'/>Komma
        </div>
          <div className="description_1">
            'Komma'에서 제공하는 소리로 마음의 여유를 얻으세요. 
          </div>
          <button className='intro_Mainbutton' onClick={onHandleIntro}>Use Service</button>
        </Fade>
        <Fade up delay={1000}>
          <Flash delay={2000}>
            <img className='intro_next' src={next} alt="next" />
          </Flash>
        </Fade>
      </div>
    </div>
  )
}

export default IntroMain