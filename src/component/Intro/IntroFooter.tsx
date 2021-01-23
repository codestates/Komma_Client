import React from 'react';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import member1 from '../../img/member1.png'
import member2 from '../../img/member2.png'
import member3 from '../../img/member3.png'
import member4 from '../../img/member4.png'
import Zoom from 'react-reveal/Zoom';

interface IntroFooterProps {
  isIntro: boolean;
  onHandleIntro: () => void;
}

const IntroFooter = ({ onHandleIntro
}: IntroFooterProps) => {
  return (
    <div className='introFooterBody'>
      <div className='introFooter'>
        <Fade><div className='controlcolor2' /></Fade>
        <Fade up delay={900}>
          <div className='introFooter_description'>
            Komma
        </div>
        </Fade>
        <Fade up delay={1200}>
          <Flash delay={1300}>
            <button className="introFooter_button" onClick={onHandleIntro}>Use Service</button>
          </Flash>
        </Fade>
        <div className='footerInformation'>
          <div className='information'>Komma(주) 서울시 용산구 한남동 한남더힐 (Wish) <div className='blank' />
          팀장) 황순환  팀원) 김태수 정연주 배석재  <div className='blank' />사업자 등록번호 25-26-27-28 / 서비스 문의 (Feedback) hsw9724@naver.com
          </div>
          <Zoom delay={500}><img className='member4' src={member4} alt="member4" /></Zoom>
          <Zoom delay={1000}><img className='member1' src={member1} alt="member1" /></Zoom>
          <Zoom delay={1500}><img className='member2' src={member2} alt="member2" /></Zoom>
          <Zoom delay={2000}><img className='member3' src={member3} alt="member3" /></Zoom>
        </div>
      </div>
    </div>
  )
}
export default IntroFooter