// 액션
const HANDLE_SETTING_MODAL = 'setting/HANDLE_SETTING'as const;
const HANDLE_DARK_MODE = 'setting/HANDLE_DARK_MODE'as const;

//액션 생성 함수
export const handleSettingModal = () => ({ type: HANDLE_SETTING_MODAL });
export const handleDarkMode = () => ({ type: HANDLE_DARK_MODE });

// 액션 타입
type SettingAction =
  | ReturnType<typeof handleSettingModal> | ReturnType<typeof handleDarkMode>

// 스테이트 초기값
interface SettingState {
  isSettingModalOn: boolean;
  isDarkMode: boolean;
}

const initialState: SettingState = {
  isSettingModalOn: false,
  isDarkMode: false
}

// 리듀서
const setting = (state = initialState, action: SettingAction) => {
  switch(action.type) {
    case HANDLE_SETTING_MODAL:
      return Object.assign({}, state, {isSettingModalOn: !state.isSettingModalOn})
    case HANDLE_DARK_MODE:
      return Object.assign({}, state, {isDarkMode: !state.isDarkMode})
    default:
      return state;
  }
}

export default setting;
