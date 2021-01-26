import React from 'react'
import imac from '../../img/iMac.png';
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import window from '../../img/window0.png'
import window1 from '../../img/window4.png'
import window2 from '../../img/window3.png'

export const Slier = () => {
  const settings = {
    
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 3500,
  }
  return (
    <Slider className='windowcard1' {...settings}>
      <div>
        <img className='img_window' src={window} alt="window" />
        <div className='intro_Fn1_description'>
          선택하세요<div className='blank' />조절하세요<div className='blank' />감상하세요
        </div>
        <div className ='intro_Fn1_description2'>간단한 조작방법으로 소리를 감상해보세요!</div>
      </div>
      <div>
        <img className='img_window' src={window1} alt="window" />
        <div className='intro_Fn1_description'>
          마음에 드는<div className='blank' />조합이 있다면<div className='blank' />저장해보세요
        </div>
        <div className ='intro_Fn1_description2'>나만의 스타일로 소리를 조합하고 저장할 수 있습니다!</div>
      </div>
      <div>
        <img className='img_window' src={window2} alt="window" />
        <div className='intro_Fn1_description'>
          원하는<div className='blank' />시간과 색을<div className='blank' />지정해보세요
        </div>
        <div className ='intro_Fn1_description2'>원하는 시간만큼 타이머를 맞추고 원하는 색으로<br/>배경화면을 꾸며보세요!</div>
      </div>
    </Slider>
  )
}

const IntroFn1 = () => {

  return (
    <div className='intro_Fn1'>
      <div className='intro_body1'>
        <Fade><div className='controlcolor'/></Fade>
      <img className='imac' src={imac} alt="imac" />
      <Slier />
      </div>
    </div>
  )
}

export default IntroFn1