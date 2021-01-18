// 액션
const CHANGE_COLOR = 'color/CHANGE_COLOR'as const;

// 액션 생성 함수
export const changeColor = (inputColor: string) => ({
  type: CHANGE_COLOR,
  payload: {
    inputColor
  }
});

// 액션 타입
type ColorAction =
  | ReturnType<typeof changeColor>

// 스테이트 초기값
interface ColorState {
  backgroundColor: string;
}

const initialState: ColorState = {
  backgroundColor: 'blue',
}

// 리듀서
const color = (state = initialState, action: ColorAction) => {
  switch(action.type) {
    case CHANGE_COLOR:
      return Object.assign({}, state, { backgroundColor: action.payload.inputColor })
    default:
      return state;
  }
}



export default color;
