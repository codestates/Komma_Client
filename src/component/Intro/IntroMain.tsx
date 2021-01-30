import React, { useEffect, useRef } from 'react';
import macbook from '../../img/macbook.png';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import next from '../../img/Next.png';
import Flash from 'react-reveal/Flash';
import background from '../../img/background.png'
import Pulse from 'react-reveal/Pulse';

interface IntroMainProps {
  isIntro: boolean;
  onHandleIntro: () => void;
}

const IntroMain = ({ isIntro, onHandleIntro
}: IntroMainProps) => {

  useEffect(() => {
    if(localStorage.getItem('token') && isIntro === true) {
      onHandleIntro();
    }
  }, [])

  const fadeRef: any = useRef();
  const handleIntro = () => {
    fadeRef.current.style.left = '0';
    setTimeout(() => {
      onHandleIntro();
    }, 500)
  }

  return (
    <div className='intro_Main_back'>
      <div className='fadein' ref={fadeRef}/>
      <Fade up delay={300}><div className='intro_Main_back_sentence'>KOMMA</div></Fade>
      <Fade delay={1500}><div className='intro_Main'>
        <Pulse duration={3000}><img className='background' src={background} alt="background" /></Pulse>
        <div className='transparency' />
        <div className='intro_Header'>
          <Fade delay={2500}><div className='intro_logo'>Komma ,</div></Fade>
        </div>
        <div className='intro_body'>
          <div className='description_Main'>
          I know it's hard.<div className='blank'/> You must give it 'Komma'.
            <Fade up delay={2800}><div className="description_1">
              'Komma'에서 제공하는 소리로 마음의 여유를 가지세요.
          </div>
            </Fade>
            <Fade delay={2800}><Jump delay={3800}><button className='intro_Mainbutton' onClick={handleIntro}>Use Service</button></Jump></Fade>
            <Fade>
            </Fade>
          </div>
          <Fade up delay={2800}><Flash delay={4500}><img className='intro_next' src={next} alt="next" /></Flash></Fade>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default IntroMain