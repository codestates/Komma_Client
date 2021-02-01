import React, { useRef } from 'react';
import x from '../img/plus_black.svg';
import comma from '../img/comma.png';
import logo from '../img/logo.png'
import unlock from '../img/password.svg';
import email from '../img/email.svg';
import axios from 'axios';


interface SigninProps {
  isSignupModalOn: boolean;
  handleLoginModal: () => void;
  handleSignupModal: () => void;
  setToken: (token: string) => void;
  handleLogin: () => void;
}

interface SignupProps {
  handleLoginModal: () => void;
  handleSignupModal: () => void;
}

const Signin: React.FC<SigninProps> = ({
  isSignupModalOn,
  handleSignupModal,
  handleLoginModal,
  setToken,
  handleLogin,
}) => {



  let emailRef: any = useRef();
  let passwordRef: any = useRef();
  let errorRef: any = useRef();

  const login = (email: string, password: string) => {
    if(!email || !password) {
      errorRef.current.textContent = '항목을 전부 입력해주세요'
    }
    else {
      axios.post(
        'https://kommaa.shop/users/login',
        { email: email, password: password },
        { withCredentials: true }
      )
      .then(res => res.data)
      .then(data => {
        if(data.message === 'hashPwd exists') {
          errorRef.current.textContent = '비밀번호를 확인해주세요'
        }
        else if(data.message === 'not authorized') {
          errorRef.current.textContent = '존재하지 않는 이메일 입니다'
        }
        else {
          setToken(data.accessToken);
          localStorage.setItem('token', JSON.stringify(data.accessToken));
          handleLogin();
          handleLoginModal();
          window.location.reload();
        }
      })
    }
  }

  const keyUp = (e: any) => {
    if(e.keyCode === 13) {
      login(emailRef.current.value, passwordRef.current.value);
    }
  }

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
              <input type='text' placeholder='E-mail' ref={emailRef} onKeyUp={(e) => keyUp(e)}></input>
            </div>
            <div className='password'>
              <img src={unlock} alt=''></img>
              <input type='password' placeholder='Password' ref={passwordRef} onKeyUp={(e) => keyUp(e)}></input>
            </div>
            <p className='sign-error' ref={errorRef}></p>
            <button className='sign-button' onClick={() => login(emailRef.current.value, passwordRef.current.value)}>Sign In</button>
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

  let emailRef: any = useRef();
  let nameRef: any = useRef();
  let passwordRef: any = useRef();
  let rePasswordRef: any = useRef();
  let errorRef: any = useRef();

  const signUp = (email: string, username: string, password: string, rePassword: string) => {
    if(!email || !username || !password || !rePassword) {
      errorRef.current.textContent = '항목을 전부 입력해주세요';
    }
    else if(password !== rePassword) {
      errorRef.current.textContent = '비밀번호를 확인해주세요'
    }
    else {
      axios.post(
        'https://kommaa.shop/users/signup',
        { email: email, username: username, password: password },
        { withCredentials: true }
      )
      .then(res => res.data)
      .then(data => {
        // console.log(data);
        if(data.message === 'email exists') {
          errorRef.current.textContent = '존재하는 이메일 입니다'
        }
        else {
          errorRef.current.textContent = ''
          handleSignupModal();
          return alert('회원가입이 성공적으로 완료되었습니다!')
        }
      })
      .catch(error => {
        // console.log(error.response);
        if(error.response.status === 409) {
          errorRef.current.textContent = '존재하는 이메일 입니다'
        }
      })
    }
  }



  return(
    <article className='sign-container'>
      <img className='signin-x' src={x} alt='' onClick={handleLoginModalForSignup} />
      <p className='signup-title'>Sign Up</p>
      <div className='email'>
        <img src={email} alt=''></img>
        <input type='text' placeholder='E-mail' ref={emailRef}></input>
      </div>
      <div className='username'>
        <img src={email} alt=''></img>
        <input type='text' placeholder='Username' ref={nameRef}></input>
      </div>
      <div className='password'>
        <img src={unlock} alt=''></img>
        <input type='password' placeholder='Password' ref={passwordRef}></input>
      </div>
      <div className='password repeat'>
        <img src={unlock} alt=''></img>
        <input type='password' placeholder='Repeat Password' ref={rePasswordRef}></input>
      </div>
      <p className='sign-error' ref={errorRef}></p>
      <button
        className='sign-button'
        onClick={() => signUp(emailRef.current.value, nameRef.current.value, passwordRef.current.value, rePasswordRef.current.value)}
      >
        Sign Up
      </button>
      <p className='sign-desc2'>You have an account?<p onClick={handleSignupModal}>Sign In</p></p>
    </article>
  );
}

export default Signin;
