import React from 'react'
import komma3 from '../../img/Komma3.png';
import Fade from 'react-reveal/Fade';


const IntroFn3 = () => {
  return (
    <div className='intro_Fn3'>
      <div className='intro_Fn3_body'>
        <img className='bodyKomma3' src={komma3} alt="komma" />
        <div className='intro_Fn3_description'>
          <Fade down delay={500}>원하는<div className='blank' /> 시간과 색을<div className='blank' />지정해보세요!</Fade>
        </div>
        <Fade delay={800}> <div className='intro_Fn3_description2'> 원하는 시간만큼 타이머를 맞추고 원하는 색으로 배경화면을 꾸며보세요!</div></Fade>
      </div>
    </div>
  )
}
export default IntroFn3