import React from 'react'
import komma from '../../img/Komma.png';
import Fade from 'react-reveal/Fade';
import img_medi from '../../img/meditation.png';
import img_add from '../../img/plus.png';
import img_delete from '../../img/trash.png';
import Slider from 'react-slick';

const IntroFn2 = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  return (
    <div className='intro_Fn2'>
        <div className='intro_body2-1'>
        <div className='intro_describe2'>LISTEN</div>
        <div className='intro_describe2-2'>편하게 들으세요.</div>
        </div>
        <div className='intro_body2-2'>
        <div className='intro_describe1'>SAVE</div>
        <div className='intro_describe1-2'>저장하세요.</div>
        <div className='fav-icons2'>
        <span className='fav-icons-desc2'>
          Mixtape ,
        </span>
        <span className='fav-icons-add2'>
          <img src={img_add} alt=''/>
        </span>
        <span className='fav-icons-delete2'>
          <img src={img_delete} alt=''/>
        </span>
      </div>
      <Slider className='fav-cards2' {...settings}>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
      </Slider>
        </div>
    </div>
  )
}

export const SingleFav: React.FC = () => {

  return(
    <div className='fav-single2'>
      <div className='fav-img2'>
        <img src={img_medi} alt=''/>
      </div>
      <p className='fav-desc2'>
        Meditation
      </p>
    </div>
  );
}

export default IntroFn2