import React from 'react';
import macbook from '../../img/macbook.png';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade';
import next from '../../img/next.png'
import Flash from 'react-reveal/Flash';
import komma from '../../img/Komma.png'
import background from '../../img/background.png'
import Pulse from 'react-reveal/Pulse';
import Slider from "react-slick";
import window from '../../img/window0.png'
import window1 from '../../img/window1.png'
import window2 from '../../img/window2.png'




export const Slier = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3000,
    cssEase: "linear",

  }
  return (
    <Slider className='windowcard' {...settings}>
      <img src={window} alt="window" />
      <img src={window1} alt="window" />
      <img src={window2} alt="window" />
    </Slider>
  )
}

interface IntroMainProps {
  isIntro: boolean;
  onHandleIntro: () => void;
}

const IntroMain = ({ onHandleIntro
}: IntroMainProps) => {
return (
  <div className='intro_Main'>
    <Pulse duration={3000}><img className='background' src={background} alt="background" /></Pulse>
    <div className='transparency' />
    <div className='intro_Header'>
      <Fade><div className='intro_logo'>Komma <img className='kommaImg' src={komma} alt="komma" /></div></Fade>
    </div>
    <div className='intro_body'>
      <div className='description_Main'>
        <Fade delay={500}>바쁜일상속,</Fade><Fade delay={700}><div className='blank' />  힐링시간 </Fade><Fade delay={900}><div className='blank' />Komma</Fade>
        <Fade up delay={1300}><div className="description_1">
          'Komma'에서 제공하는 소리로 마음의 여유를 가지세요.
          </div>
        </Fade>
        <Fade ><button className='intro_Mainbutton' onClick={onHandleIntro}>Use Service</button></Fade>
        <Fade>
          <img className='macbook' src={macbook} alt="macbook" />
          <Slier />
        </Fade>
      </div>
      <Fade up delay={1800}><Flash delay={3000}><img className='intro_next' src={next} alt="next" /></Flash></Fade>
    </div>
  </div>
)
}

export default IntroMain