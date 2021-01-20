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

const initialState: ColorState | any = {
  backgroundColor: 'blue',
}

// 리듀서
const color = (state = initialState, action: ColorAction) => {
  switch(action.type) {
    case CHANGE_COLOR:
      return changeColors(state, action);
    default:
      return state;
  }
}

let interval: any;

const changeColors = (state: ColorState, action: ColorAction) => {
  clearInterval(interval);
  console.log('컬러 인터벌 끝')
  if(action.payload.inputColor === 'random') {
    let colors = ['red', 'blue', 'violet', 'orange', 'teal', 'cyan', 'lime', 'yellow'];
    interval = setInterval(() => {
      return Object.assign({}, state, { backgroundColor: action.payload.inputColor });
    }, 7000);
    console.log('컬러 인터벌 시작')
  }
  else {
    return Object.assign({}, state, { backgroundColor: action.payload.inputColor });
  }
}




export default color;
