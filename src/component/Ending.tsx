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
        Komma, 를 이용해 주셔서 감사합니다.<br></br><br></br>
        Komma, 는 약 4주의 기간동안 네명의 개발자가 진행한 작은 프로젝트로<br></br><br></br>
        서비스 내에서 사용된 모든 음원과 이미지 들은, 상업적인 용도로 사용되지 않습니다.<br></br><br></br>
        다시한번, 서비스를 이용해 주셔서 감사드리며, 다시 뵐 날을 기대하겠습니다.
      </p>
      <button className='ending exit' onClick={handleEndingModal}>Return</button>
      <p className='ending name'>Hwang Soonhwan, Kim Taesu, Bae Seokjae, Jeong Yeonju</p>
      <footer className='ending copyright'>ⓒ 2021. Komma Co. all rights reserved.</footer>
    </div>
  );
}

export default Ending;
