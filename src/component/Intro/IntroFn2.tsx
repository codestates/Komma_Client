import React from 'react'
import komma from '../../img/Komma.png';
import Fade from 'react-reveal/Fade';

const IntroFn2 = () => {
  return (
    <div className='intro_Fn2'>
      <div className='intro_Fn2_body'>
        <div className='intro_Fn2_description'>
          <Fade  delay={500}>마음에 드는<div className='blank' />조합이 있으면<div className='blank' />저장하세요!</Fade>
          <Fade delay={1000}> <div className='intro_Fn2_description2'> 나만의 스타일로 소리를 조합하고 저장할수 있습니다!</div></Fade>
        </div>
        <img className='bodyKomma2' src={komma} alt="komma1" />
      </div>
    </div>
  )
}
export default IntroFn2