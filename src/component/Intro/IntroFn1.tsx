import React from 'react'
import komma2 from '../../img/Komma2.png';
import Fade from 'react-reveal/Fade';

interface IntroFn1Props {
  isIntro: boolean;
  onHandleIntro: () => void;
}
const IntroFn1 = ({ onHandleIntro }: IntroFn1Props) => {
  return (
    <div className='intro_Fn1'>
      <div className='intro_Fn1_body'>
        <img className='bodyKomma' src={komma2} alt="komma1" />
        <div className='intro_Fn1_description'>
          <Fade left delay={500}>선택하세요!</Fade><div className='blank' /><Fade right delay={800}>조절하세요!</Fade><div className='blank' /><Fade up delay={1100}>감상하세요!</Fade>
        </div>
       <Fade delay={1200}> <div className='intro_Fn1_description2'> 간단한 조작방법으로 소리를 감상해보세요!</div></Fade>
      </div>
    </div>
  )
}
export default IntroFn1