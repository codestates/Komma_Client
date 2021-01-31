import React, { useEffect, useRef } from 'react';
import x from '../img/plus_black.svg';
import goToGeneral from '../img/start-grey.png';
import axios from 'axios';

interface SettingProps {
  isSettingModalOn: boolean;
  isDarkMode: boolean;
  width: number;
  color: string;
  email:string;
  username: string;
  userInfoChangeMode: boolean;
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
  isGeneralOption: boolean;
  handleSettingModal: () => void;
  handleDarkMode: () => void;
  changeColor: (inputColor: string) => void;
  handleUserInfoChangeMode: () => void;
  getUserNameFromServer: (name: string) => void;
  getEmailFromServer: (email: string) => void;
  handleLogin: () => void;
  handleOptionPage: () => void;
}

const Setting: React.FC<SettingProps> = ({
  isSettingModalOn,
  isDarkMode,
  isGeneralOption,
  width,
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
  handleLogin,
  handleOptionPage
}) => {

  // 자동으로 유저인포 가져오기
  useEffect(() => {
    let token = localStorage.getItem('token');
    axios.get(
      'https://kommaa.shop/users/userinfo',
      { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      getUserNameFromServer(data.userInfo.username);
      getEmailFromServer(data.userInfo.email);
    })
    .catch(error => {
      console.log(error.response);
      if(error.response.status === 400) {
        //! 세션만료 모달, 로그인 해제
        localStorage.clear();
        handleLogin();
        window.location.reload();
        return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
      }
    })
  })

  /* 유저 색상 변경 */
  const changeTheColor = (color: string) => {
    let token: any = localStorage.getItem('token');
    axios.post(
      'https://kommaa.shop/users/userinfoup',
      { sitecolor: color },
      { headers: { authorization: `Bearer ${token}` }, withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      console.log(data);
      changeColor(color);
    })
    .catch(error => {
      console.log(error.response);
      if(error.response.status === 400) {
        //! 세션만료 모달, 로그인 해제
        localStorage.clear();
        handleLogin();
        window.location.reload();
        return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
      }
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
      'https://kommaa.shop/users/userinfoup',
      { username: name, password: newPwd },
      { headers: { authorization: `Bearer ${token}` }, withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      console.log(data);
      handleUserInfoChangeMode();
    })
    .catch(error => {
      console.log(error.response);
      if(error.response.status === 400) {
        //! 세션만료 모달, 로그인 해제
        localStorage.clear();
        handleLogin();
        window.location.reload();
        return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
      }
    })
  }

  /* 로그아웃 */
  const logout = () => {
    let token = localStorage.getItem('token');
    axios.post(
      'https://kommaa.shop/users/logout',
      { logout: 'please' },
      { headers: { authorization: `Bearer ${token}` }, withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      localStorage.clear();
      handleLogin();
      handleSettingModal();
      window.location.reload();
      return alert('성공적으로 로그아웃 되었습니다!');
    })
  }

  // 모바일 옵션 페이지 핸들링 함수
  const handlingOptionPage = () => {
    handleOptionPage();
  }

  return(
    <div className='darkbackground'>
      <section className='setting-container'>
        <img className='setting-x' src={x} alt='' onClick={handleSettingModal} />
        {
          isGeneralOption ?
          <article className='setting-general'>
            <header className='setting-general-title'>General</header>
            <div className='setting-general-colors'>
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
                <div className={color === 'pink' ? 'pink selected' : 'pink'} onClick={() => changeTheColor('pink')}/>
                <div className={color === 'random' ? 'random selected' : 'random'} onClick={() => changeTheColor('random')}/>
              </div>
            </div>
          </article> :
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
        }
        { width > 800 ? <div className='setting-center'></div> : null }
        {
          width < 801 ?
          <div className='togeneral'>
            <p>{ isGeneralOption ? 'UserInfo Option' : 'General Option'}</p>
            <img src={goToGeneral} alt='' onClick={handlingOptionPage}/>
          </div> :
          null
        }
        {
          width > 800 ?
          <article className='setting-general'>
            <header className='setting-general-title'>General</header>
            <div className='setting-general-colors'>
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
                <div className={color === 'pink' ? 'pink selected' : 'pink'} onClick={() => changeTheColor('pink')}/>
                <div className={color === 'random' ? 'random selected' : 'random'} onClick={() => changeTheColor('random')}/>
              </div>
            </div>
          </article> :
          null
        }     
      </section>
    </div>
  );
}

export default Setting;
