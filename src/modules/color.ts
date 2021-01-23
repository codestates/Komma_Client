// 액션
const CHANGE_COLOR = 'color/CHANGE_COLOR'as const;
const CHANGE_INTRO_COLOR = 'color/CHANGE_INTRO_COLOR' as const

// 액션 생성 함수
export const changeColor = (inputColor: string) => ({
  type: CHANGE_COLOR,
  payload: {
    inputColor
  }
});

export const changeIntroColor = (inputIntroColor : string) =>({
  type: CHANGE_INTRO_COLOR,
  payload:{
    inputIntroColor
  }
})

// 액션 타입
type ColorAction =
  | ReturnType<typeof changeColor>
  | ReturnType<typeof changeIntroColor>

// 스테이트 초기값
interface ColorState {
  backgroundColor: string;
  introColor : string;
}

const initialState: ColorState = {
  backgroundColor: 'blue',
  introColor :''
}

// 리듀서
const color = (state = initialState, action: ColorAction) => {
  switch(action.type) {
    case CHANGE_COLOR:
      return changeColors(state, action);
    case CHANGE_INTRO_COLOR:
      return Object.assign({}, state, { introColor: action.payload.inputIntroColor });
    default:
      return state;
  }
}

// let interval: any;


const changeColors = (state: ColorState, action: ColorAction) => {
  clearInterval(interval);
  console.log('컬러 인터벌 끝')
  if(action.payload.inputColor === 'random') {
    let colors = ['red', 'blue', 'violet', 'orange', 'teal', 'cyan', 'lime', 'yellow'];
    interval = setInterval(() => {
      return Object.assign({}, state, { backgroundColor: colors[Math.floor(Math.random()*(7-0+1)) + 0] });
    }, 7000);
    console.log('컬러 인터벌 시작')
  }
  else {
    return Object.assign({}, state, { backgroundColor: action.payload.inputColor });
  }
}




export default color;
