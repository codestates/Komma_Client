import React from 'react';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import member1 from '../../img/member1.png'
import member2 from '../../img/member2.png'
import member3 from '../../img/member3.png'
import member4 from '../../img/member4.png'
import app from '../../img/app.png'
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
          <div className='information'>
            <div className="footerTitle">
              Komma
            </div>
            <div className="company">
              COMPANY
              <div className="companyContent">
                <div className='blank2' />
                About Us <div className='blank1' />Jobs <div className='blank1' />Contact
              </div>
            </div>
            <div className="product">
              PRODUCT
              <div className="productContent">
                <div className='blank2' />
                Features <div className='blank1' />Pricing <div className='blank1' />Apps<div className='blank1' />Support
              </div>
            </div>
            <div className="resources">
              RESOURCES
              <div className="resourcesContent">
                <div className='blank2' />
                Education <div className='blank1' />Work
              </div>
            </div>
            <div className="teamMembers">
              TEAMMEMBERS
              <div className="teamMembersContent">
                <div className='front_end'>
                  Front-End
                  </div>
                <Zoom delay={500}><img className='member4' src={member4} alt="member4" /></Zoom>
                <Zoom delay={1000}><img className='member1' src={member1} alt="member1" /></Zoom>
                <div className='back_end' >
                  Back-End
                  </div>
                <Zoom delay={1500}><img className='member2' src={member2} alt="member2" /></Zoom>
                <Zoom delay={2000}><img className='member3' src={member3} alt="member3" /></Zoom>
              </div>
            </div>
            <div className="getTheAPPS">
              GET THE APPS
              <div className="getTheAPPSContent">
                <img className="app" src={app} alt="app"/>
              </div>
            </div>
            <div className="footerSince">
              ⓒ 2021. Komma all rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntroFooter