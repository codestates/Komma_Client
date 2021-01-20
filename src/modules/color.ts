// 액션
const CHANGE_COLOR_RED = 'color/CHANGE_COLOR_RED'as const;
const CHANGE_COLOR_BLUE = 'color/CHANGE_COLOR_BLUE'as const;
const CHANGE_COLOR_VIOLET = 'color/CHANGE_COLOR_VIOLET'as const;
const CHANGE_COLOR_ORANGE = 'color/CHANGE_COLOR_ORANGE'as const;
const CHANGE_COLOR_YELLOW = 'color/CHANGE_COLOR_YELLOW'as const;
const CHANGE_COLOR_CYAN = 'color/CHANGE_COLOR_CYAN'as const;
const CHANGE_COLOR_TEAL = 'color/CHANGE_COLOR_TEAL'as const;
const CHANGE_COLOR_LIME = 'color/CHANGE_COLOR_LIME'as const;
const CHANGE_COLOR_RANDOM = 'color/CHANGE_COLOR_RANDOM'as const;

// 액션 생성 함수
export const changeColorRed = () => ({ type: CHANGE_COLOR_RED });
export const changeColorBlue = () => ({ type: CHANGE_COLOR_BLUE });
export const changeColorViolet = () => ({ type: CHANGE_COLOR_VIOLET });
export const changeColorOrange = () => ({ type: CHANGE_COLOR_ORANGE });
export const changeColorYellow = () => ({ type: CHANGE_COLOR_YELLOW });
export const changeColorCyan = () => ({ type: CHANGE_COLOR_CYAN });
export const changeColorTeal = () => ({ type: CHANGE_COLOR_TEAL });
export const changeColorLime = () => ({ type: CHANGE_COLOR_LIME });
export const changeColorRandom = () => ({ type: CHANGE_COLOR_RANDOM });

// 액션 타입
type ColorAction =
  | ReturnType<typeof changeColorRed> | ReturnType<typeof changeColorBlue>
  | ReturnType<typeof changeColorViolet> | ReturnType<typeof changeColorOrange>
  | ReturnType<typeof changeColorYellow> | ReturnType<typeof changeColorCyan>
  | ReturnType<typeof changeColorTeal> | ReturnType<typeof changeColorLime>
  | ReturnType<typeof changeColorRandom>;

// 스테이트 초기값
interface ColorState {
  backgroundColor: string;
}

const initialState: ColorState = {
  backgroundColor: 'teal',
}

// 리듀서
const color = (state = initialState, action: ColorAction) => {
  switch(action.type) {
    case CHANGE_COLOR_RED:
      return {backgroundColor: 'red'}
    case CHANGE_COLOR_BLUE:
      return {backgroundColor: 'blue'}
    case CHANGE_COLOR_VIOLET:
      return {backgroundColor: 'violet'}
    case CHANGE_COLOR_ORANGE:
      return {backgroundColor: 'orange'}
    case CHANGE_COLOR_YELLOW:
      return {backgroundColor: 'yellow'}
    case CHANGE_COLOR_CYAN:
      return {backgroundColor: 'cyan'}
    case CHANGE_COLOR_TEAL:
      return {backgroundColor: 'teal'}
    case CHANGE_COLOR_LIME:
      return {backgroundColor: 'lime'}
    case CHANGE_COLOR_RANDOM:
      const colors = ['red', 'blue', 'violet', 'orange', 'yellow', 'cyan', 'teal', 'lime']
      return {backgroundColor: colors[Math.floor(Math.random() * 8)]}
    default:
      return state;
  }
}



export default color;
