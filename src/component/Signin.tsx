import React from 'react';
import x from '../img/plus_black.svg';
import comma from '../img/comma.png';
import logo from '../img/logo.png'
import unlock from '../img/password.svg';
import email from '../img/email.svg';


interface SigninProps {
  isSignupModalOn: boolean;
  handleLoginModal: () => void;
  handleSignupModal: () => void;
}

interface SignupProps {
  handleLoginModal: () => void;
  handleSignupModal: () => void;
}

const Signin: React.FC<SigninProps> = ({
  isSignupModalOn,
  handleSignupModal,
  handleLoginModal
}) => {
  return (
    <div className='darkbackground'>
      <section className='total-container'>
        <img className='comma' src={comma} alt=''/>
        <img className='sign-komma' src={logo} alt=''/>
        <p className='sign-desc'>ⓒ Copyright 2021. deul-eo-jo Co. all rights reserved.</p>
        {
          isSignupModalOn ?
          <Signup handleLoginModal={handleLoginModal} handleSignupModal={handleSignupModal}/> :
          <article className='sign-container'>
            <img className='signin-x' src={x} alt='' onClick={handleLoginModal} />
            <p className='signin-title'>Sign In</p>
            <div className='email'>
              <img src={email} alt=''></img>
              <input type='text' placeholder='E-mail'></input>
            </div>
            <div className='password'>
              <img src={unlock} alt=''></img>
              <input type='password' placeholder='Password'></input>
            </div>
            <p className='sign-error'>This message is dummy error!</p>
            <button className='sign-button'>Sign In</button>
            <p className='sign-desc2'>Don't have an account?<p onClick={handleSignupModal}>Create one</p></p>
          </article>
        }
      </section>
    </div>
  );
}



const Signup: React.FC<SignupProps> = ({ handleLoginModal, handleSignupModal }) => {

  const handleLoginModalForSignup = () => {
    handleSignupModal();
    handleLoginModal();
  }

  return(
    <article className='sign-container'>
      <img className='signin-x' src={x} alt='' onClick={handleLoginModalForSignup} />
      <p className='signin-title'>Sign Up</p>
      <div className='email'>
        <img src={email} alt=''></img>
        <input type='text' placeholder='E-mail'></input>
      </div>
      <div className='password'>
        <img src={unlock} alt=''></img>
        <input type='password' placeholder='Password'></input>
      </div>
      <div className='password repeat'>
        <img src={unlock} alt=''></img>
        <input type='password' placeholder='Repeat Password'></input>
      </div>
      <p className='sign-error'>This message is dummy error!</p>
      <button className='sign-button'>Sign Up</button>
      <p className='sign-desc2'>You have an account?<p onClick={handleSignupModal}>Sign In</p></p>
    </article>
  );
}

export default Signin;
