// 액션
const HANDLE_LOGIN = 'signin/HANDLE_LOGIN'as const;

//액션 생성 함수
export const handleLogin = () => ({ type: HANDLE_LOGIN });

// 액션 타입
type LoginAction =
  | ReturnType<typeof handleLogin>

// 스테이트 초기값
interface LoginState {
  isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false,
}

// 리듀서
const singin = (state = initialState, action: LoginAction) => {
  switch(action.type) {
    case HANDLE_LOGIN:
      return {isLogin: !state.isLogin}
    default:
      return state;
  }
}

export default singin;
