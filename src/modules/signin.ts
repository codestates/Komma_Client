// 액션
const HANDLE_LOGIN = 'signin/HANDLE_LOGIN'as const;
const HANDLE_LOGIN_MODAL = 'singin/HANDLE_LOGIN_MODAL'as const;
const HANDLE_SIGNUP_MODAL = 'singin/HANDLE_SIGNUP_MODAL'as const;

//액션 생성 함수
export const handleLogin = () => ({ type: HANDLE_LOGIN });
export const handleLoginModal = () => ({ type: HANDLE_LOGIN_MODAL });
export const handleSignupModal = () => ({ type: HANDLE_SIGNUP_MODAL });

// 액션 타입
type LoginAction =
  | ReturnType<typeof handleLogin> | ReturnType<typeof handleLoginModal>
  | ReturnType<typeof handleSignupModal>

// 스테이트 초기값
interface LoginState {
  isLogin: boolean;
  isLoginModalOn: boolean;
  isSignupModalOn: boolean;
}

const initialState: LoginState = {
  isLogin: false,
  isLoginModalOn: false,
  isSignupModalOn: false
}

// 리듀서
const singin = (state = initialState, action: LoginAction) => {
  switch(action.type) {
    case HANDLE_LOGIN:
      return Object.assign({}, state, {isLogin: !state.isLogin})
    case HANDLE_LOGIN_MODAL:
      return Object.assign({}, state, {isLoginModalOn: !state.isLoginModalOn})
    case HANDLE_SIGNUP_MODAL:
      return Object.assign({}, state, {isSignupModalOn: !state.isSignupModalOn})
    default:
      return state;
  }
}

export default singin;
