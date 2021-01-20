import React, { useEffect, useRef } from 'react';
import x from '../img/plus_black.svg';
import axios from 'axios';

interface SettingProps {
  isSettingModalOn: boolean;
  isDarkMode: boolean;
  color: string;
  email:string;
  username: string;
  userInfoChangeMode: boolean;
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
  handleSettingModal: () => void;
  handleDarkMode: () => void;
  changeColor: (inputColor: string) => void;
  handleUserInfoChangeMode: () => void;
  getUserNameFromServer: (name: string) => void;
  getEmailFromServer: (email: string) => void;
  handleLogin: () => void;
}

const Setting: React.FC<SettingProps> = ({
  isSettingModalOn,
  isDarkMode,
  color,
  email,
  username,
  userInfoChangeMode,
  currentPassword,
  newPassword,
  repeatPassword,
  handleSettingModal,
  handleDarkMode,
  changeColor,
  handleUserInfoChangeMode,
  getUserNameFromServer,
  getEmailFromServer,
  handleLogin
}) => {

  useEffect(() => {
    let token = localStorage.getItem('token');
    axios.get(
      'http://www.kommaa.shop/users/userinfo',
      { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      getUserNameFromServer(data.userInfo.username);
      getEmailFromServer(data.userInfo.email);
    })
  })

  /* 유저 색상 및 다크모드 변경 */
  const changeTheColor = (color: string) => {
    let token: any = localStorage.getItem('token');
    axios.post(
      'http://www.kommaa.shop/users/userinfoup',
      { sitecolor: color },
      { headers: { authorization: `Bearer ${token}` }, withCredentials: true }
    )
    /*
    fetch('http://www.kommaa.shop/users/userinfoup', {
      method: 'put',
      headers: {
        'Authorization': `bearer ${JSON.parse(token)}`,
      }
    })
    */
    .then(res => res.data)
    .then(data => {
      console.log(data);
      changeColor(color);
    })
    .catch(err => {
      console.log(err);
    })
  }

  /* 유저 정보 변경 */
  let nameRef: any = useRef();
  let newPwdRef: any = useRef();
  let rePwdRef: any = useRef();

  const changeUserInfo = (name: string, newPwd: string, rePwd: string) => {

    if(!name || !newPwd || !rePwd) {
      return alert('모든 항목을 입력해주세요');
    }
    else if(newPwd !== rePwd) {
      return alert('비밀번호를 확인해주세요');
    }
    let token = localStorage.getItem('token');
    axios.post(
      'http://www.kommaa.shop/users/userinfoup',
      { username: name, password: newPwd },
      { headers: { authorization: `Bearer ${token}` }, withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      console.log(data);
      handleUserInfoChangeMode();
    })
    .catch(err => {
      console.log(err);
    })
  }

  /* 로그아웃 */
  const logout = () => {
    let token = localStorage.getItem('token');
    axios.post(
      'http://www.kommaa.shop/users/logout',
      { logout: 'please' },
      { headers: { authorization: `Bearer ${token}` }, withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      localStorage.clear();
      handleLogin();
      handleSettingModal();
      return alert('성공적으로 로그아웃 되었습니다!');
    })
  }

  return(
    <div className='darkbackground'>
      <section className='setting-container'>
        <img className='setting-x' src={x} alt='' onClick={handleSettingModal} />
        <article className='setting-userinfo'>
          <header className='setting-userinfo-title'>UserInfo</header>
          {
            userInfoChangeMode ?
            null :
            <div className='email-container'>
              <p className='title'>E-mail</p>
              <p className='content'>{email}</p>
            </div>
          }
          <div className='name-container'>
            <p className='title'>Username</p>
            {
              userInfoChangeMode ?
              <input type='text' placeholder='New Username' className='content edit' ref={nameRef}></input> :
              <p className='content'>{username}</p>
            }
          </div>
          <div className='password-container'>
            <p className='title'>Password</p>
            {
              userInfoChangeMode ?
              <input type='password' placeholder='Current Password' className='content edit'></input> :
              <p className='content'>******</p>
            }
          </div>
          {
            userInfoChangeMode ?
            <div className='new-password-container'>
              <input type='password' placeholder='New Password' className='content edit' ref={newPwdRef}></input>
            </div> :
            null
          }
          {
            userInfoChangeMode ?
            <div className='repeat-password-container'>
              <input type='password' placeholder='Repeat Password' className='content edit' ref={rePwdRef}></input>
            </div> :
            null
          }
          {
            userInfoChangeMode ?
            <button className='infobtn edit' onClick={() => changeUserInfo(nameRef.current.value, newPwdRef.current.value, rePwdRef.current.value)}>Update Userinfo</button> :
            <button className='infobtn edit' onClick={handleUserInfoChangeMode}>Edit Userinfo</button>
          }
          {
            userInfoChangeMode ? 
            <button className='infobtn back' onClick={handleUserInfoChangeMode}>Back</button> :
            <button className='infobtn logout' onClick={logout}>Logout</button>
          }
        </article>
        <div className='setting-center'></div>
        <article className='setting-general'>
          <header className='setting-general-title'>General</header>
          <div className='setting-general-color'>
            <h1>Background Color</h1>
            <div className='colors'>
              <div className={color === 'blue' ? 'blue selected' : 'blue'} onClick={() => changeTheColor('blue')}/>
              <div className={color === 'red' ? 'red selected' : 'red'} onClick={() => changeTheColor('red')}/>
              <div className={color === 'orange' ? 'orange selected' : 'orange'} onClick={() => changeTheColor('orange')}/>
              <div className={color === 'yellow' ? 'yellow selected' : 'yellow'} onClick={() => changeTheColor('yellow')}/>
              <div className={color === 'cyan' ? 'cyan selected' : 'cyan'} onClick={() => changeTheColor('cyan')}/>
              <div className={color === 'teal' ? 'teal selected' : 'teal'} onClick={() => changeTheColor('teal')}/>
              <div className={color === 'violet' ? 'violet selected' : 'violet'} onClick={() => changeTheColor('violet')}/>
              <div className={color === 'lime' ? 'lime selected' : 'lime'} onClick={() => changeTheColor('lime')}/>
              <div className={color === 'random' ? 'random selected' : 'random'} onClick={() => changeTheColor('random')}/>
              <div className='no'/>
            </div>
          </div>
          <div className='setting-general-darkmode'>
            <h1>DarkMode</h1>
            <div className='darkmode' onClick={handleDarkMode}>
              <div className={isDarkMode ? 'pointer-on' : 'pointer'}></div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Setting;
