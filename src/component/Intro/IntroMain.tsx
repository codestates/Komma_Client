import React from 'react';
import macbook from '../../img/macbook.png';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade';
import next from '../../img/Next.png'
import Flash from 'react-reveal/Flash';
import background from '../../img/background.png'
import Pulse from 'react-reveal/Pulse';
// import Slider from "react-slick";
// import window from '../../img/window0.png'
// import window1 from '../../img/window1.png'
// import window2 from '../../img/window2.png'




// export const Slier = () => {
//   const settings = {
//     dots: false,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 900,
//     autoplaySpeed: 3000,
//     cssEase: "linear",

//   }
//   return (
//     <Slider className='windowcard' {...settings}>
//       <img src={window} alt="window" />
//       <img src={window1} alt="window" />
//       <img src={window2} alt="window" />
//     </Slider>
//   )
// }

interface IntroMainProps {
  isIntro: boolean;
  onHandleIntro: () => void;
}

const IntroMain = ({ onHandleIntro
}: IntroMainProps) => {
  return (
    <div className='intro_Main_back'>
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
            <Fade delay={2800}><button className='intro_Mainbutton' onClick={onHandleIntro}>Use Service</button></Fade>
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