import React, { useRef } from 'react';
import { useScrollSpin } from '../hooks/useScrollSpin';

const MainList: React.FC = () => {


  return(
    <div className='sound-list' id='1'>
      <SingleSoundCard/>
    </div>
  );
}

const SingleSoundCard: React.FC = () => {

  return(
    <div className='sound-card'>

    </div>
  );
}

export default MainList
