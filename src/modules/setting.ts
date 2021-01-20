// 액션
const HANDLE_SETTING_MODAL = 'setting/HANDLE_SETTING'as const;
const HANDLE_DARK_MODE = 'setting/HANDLE_DARK_MODE'as const;
const HANDLE_USERINFO_CHANGE_MODE = 'setting/HANDLE_USERINFO_CHANGE_MODE'as const;
const HANDLE_CHANGE_USERINFO = 'setting/HANDLE_CHANGE_USERINFO'as const;
const GET_USERNAME_FROM_SERVER = 'setting/GET_USERNAME_FROM_SERVER'as const;
const GET_EMAIL_FROM_SERVER = 'setting/GET_EMAIL_FROM_SERVER'as const;

//액션 생성 함수
export const handleSettingModal = () => ({ type: HANDLE_SETTING_MODAL });
export const handleDarkMode = () => ({ type: HANDLE_DARK_MODE });
export const handleUserInfoChangeMode = () => ({ type: HANDLE_USERINFO_CHANGE_MODE });
export const handleChangeUserInfo = (input: string) => ({
  type: HANDLE_CHANGE_USERINFO,
  payload: {
    input
  }
});
export const getUserNameFromServer = (name: string) => ({
  type: GET_USERNAME_FROM_SERVER,
  payload: {
    name
  }
});
export const getEmailFromServer = (email: string) => ({
  type: GET_EMAIL_FROM_SERVER,
  payload: {
    email
  }
});

// 액션 타입
type SettingAction =
  | ReturnType<typeof handleSettingModal> | ReturnType<typeof handleDarkMode>
  | ReturnType<typeof handleUserInfoChangeMode> | ReturnType<typeof handleChangeUserInfo>
  | ReturnType<typeof getUserNameFromServer> | ReturnType<typeof getEmailFromServer>

// 스테이트 초기값
interface SettingState {
  isSettingModalOn: boolean;
  isDarkMode: boolean;
  email: string;
  username: string;
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
  userInfoChangeMode: boolean;
}

const initialState: SettingState = {
  isSettingModalOn: false,
  isDarkMode: false,
  email: '',
  username: '',
  currentPassword: '',
  newPassword: '',
  repeatPassword: '',
  userInfoChangeMode: false,
}

// 리듀서
const setting = (state = initialState, action: SettingAction) => {
  switch(action.type) {
    case HANDLE_SETTING_MODAL:
      return Object.assign({}, state, {isSettingModalOn: !state.isSettingModalOn})
    case HANDLE_DARK_MODE:
      return Object.assign({}, state, {isDarkMode: !state.isDarkMode})
    case HANDLE_USERINFO_CHANGE_MODE:
      return Object.assign({}, state, {userInfoChangeMode: !state.userInfoChangeMode})
    case HANDLE_CHANGE_USERINFO:
      return Object.assign({}, state, {userInfoChangeMode: action.payload.input})
    case GET_USERNAME_FROM_SERVER:
      return Object.assign({}, state, {username: action.payload.name})
    case GET_EMAIL_FROM_SERVER:
      return Object.assign({}, state, {email: action.payload.email})
    default:
      return state;
  }
}

export default setting;
