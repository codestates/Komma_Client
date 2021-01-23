import React from 'react';
import selected from '../modules/selected';
import plus from '../img/list-button.png';
import small_plus from '../img/plus.png';
import sleep from '../img/sleep.png';

interface SelectedProps {
  isListBarOpen: boolean;
  handleList: () => void;
}

const MainSelected: React.FC<SelectedProps> = ({ isListBarOpen, handleList }) => {

  return(
    <aside className={isListBarOpen ? 'selectedBar' : 'selectedBar hide'}>
      <div className={isListBarOpen ? 'selectedButton' : 'selectedButton hide'} onClick={handleList}>
        <img src={plus} alt='' />
      </div>
      <div className='selectedList'>
        <p>PlayList ,</p>
        <div className='list-container'>
          <SingleList/>
          <SingleList/>
        </div>
      </div>
    </aside>
  );
}

export const SingleList: React.FC = () => {

  return(
    <div className='list-single'>
      <img id='img' src={sleep} alt=''/>
      <p>사운드 바</p>
      <img id='x' src={small_plus} alt='' />
    </div>
  );
}

export default MainSelected
