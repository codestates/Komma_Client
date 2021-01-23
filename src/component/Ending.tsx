import React from 'react';
import MainContainer from '../containers/MainContainer';

interface EndingProps {
  handleEndingModal: () => void;
}

const Ending: React.FC<EndingProps> = ({ handleEndingModal }) => {


  return (
    <div className='ending back'>
      <header className='ending title'>Thank's for using our service</header>
      <p className='ending description'>
        Lorem ipsum dolor sit amet
        consectetur adipiscing elit, sed do<br/>
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua.<br/>
        Ut enim ad minim veniam,
        consequat. Lorem ipsum dolor sit amet<br/>
        consectetur adipiscing elit, sed do<br/>
        eiusmod tempor incididunt ut labore<br/>
        et dolore magna aliqua.<br/>
      </p>
      <button className='ending exit' onClick={handleEndingModal}>Return</button>
      <div className='ending share'>
        <p >Share to...</p>
        <div className='ending share icons'>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
      </div>
      <p className='ending name'>Hwang Soonhwan, Kim Taesu, Bae Seokjae, Jeong Yeonju</p>
      <footer className='ending copyright'>ⓒ 2021. deul-eo-jo Co. all rights reserved.</footer>
    </div>
  );
}

export default Ending;
