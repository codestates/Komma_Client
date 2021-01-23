// 액션
const HANDLE_LOGIN = 'signin/HANDLE_LOGIN'as const;
const HANDLE_LOGIN_MODAL = 'signin/HANDLE_LOGIN_MODAL'as const;
const HANDLE_SIGNUP_MODAL = 'signin/HANDLE_SIGNUP_MODAL'as const;
const SET_TOKEN = 'signin/SET_TOKEN'as const;
const LOGIN_STABILIZER = 'signin/LOGIN_STABILIZER'as const;

//액션 생성 함수
export const handleLogin = () => ({ type: HANDLE_LOGIN });
export const handleLoginModal = () => ({ type: HANDLE_LOGIN_MODAL });
export const handleSignupModal = () => ({ type: HANDLE_SIGNUP_MODAL });
export const setToken = (token: string) => ({
  type: SET_TOKEN,
  payload: {
    token
  }
});
export const loginStabilizer = () => ({ type: LOGIN_STABILIZER });

// 액션 타입
type LoginAction =
  | ReturnType<typeof handleLogin> | ReturnType<typeof handleLoginModal>
  | ReturnType<typeof handleSignupModal> | ReturnType<typeof setToken>
  | ReturnType<typeof loginStabilizer>

// 스테이트 초기값
interface LoginState {
  isLogin: boolean;
  isLoginModalOn: boolean;
  isSignupModalOn: boolean;
  accessToken: string;
}

const initialState: LoginState = {
  isLogin: false,
  isLoginModalOn: false,
  isSignupModalOn: false,
  accessToken: ''
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
    case SET_TOKEN:
      return Object.assign({}, state, {accessToken: action.payload.token})
    case LOGIN_STABILIZER:
      return Object.assign({}, state, {isLogin: true})
    default:
      return state;
  }
}

export default singin;
