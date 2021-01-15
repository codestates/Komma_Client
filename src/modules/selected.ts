// 액션
const HANDLE_LIST = 'selected/HANDLE_LIST'as const;

//액션 생성 함수
export const handleList = () => ({ type: HANDLE_LIST });

// 액션 타입
type SelectedAction =
  | ReturnType<typeof handleList>

// 스테이트 초기값
interface SelectedState {
  isListBarOpen: boolean;
}

const initialState: SelectedState = {
  isListBarOpen: false,
}

// 리듀서
const selected = (state = initialState, action: SelectedAction) => {
  switch(action.type) {
    case HANDLE_LIST:
      return {isListBarOpen: !state.isListBarOpen}
    default:
      return state;
  }
}

export default selected;
