import React from 'react';
import Slider from 'react-slick';
import img_medi from '../img/meditation.png';
import img_sleep from '../img/sleep.png';
import img_add from '../img/plus.png';
import img_delete from '../img/trash.png';

interface MainFavColor {
  color: string;
}

const MainFav: React.FC<MainFavColor> = ({ color }) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3.4,
    slidesToScroll: 2.5
  }

  return(
    <nav className='fav-container'>
      <div className='fav-icons'>
        <span className='fav-icons-desc'>
          Playlist ,
        </span>
        <span className='fav-icons-add'>
          <img src={img_add} alt=''/>
        </span>
        <span className='fav-icons-delete'>
          <img src={img_delete} alt=''/>
        </span>
      </div>
      <Slider className='fav-cards' {...settings}>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
        <SingleFav/>
      </Slider>
      <div className={`side-blur ${color}`}></div>
      <div className={`side-blur right ${color}`}></div>
    </nav>
  );
}

export const SingleFav: React.FC = () => {

  return(
    <div className='fav-single'>
      <div className='fav-img'>
        <img src={img_medi} alt=''/>
      </div>
      <p className='fav-desc'>
        Meditation
      </p>
    </div>
  );
}


export default MainFav;
