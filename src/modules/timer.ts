// 액션
const START_TIMER = 'timer/START_TIMER';
const STOP_TIMER = 'timer/STOP_TIMER';
const PAUSE_TIMER = 'timer/PAUSE_TIMER';
const ADD_TEN_MIN = 'timer/ADD_TEN_MIN';
const REMOVE_TEN_MIN = 'timer/REMOVE_TEN_MIN';

// 액션 생성 함수
export const startTimer = () => ({ type: START_TIMER });
export const stopTimer = () => ({ type: STOP_TIMER });
export const pauseTimer = () => ({ type: PAUSE_TIMER });
export const addTenMin = () => ({ type: ADD_TEN_MIN });
export const removeTenMin = () => ({ type: REMOVE_TEN_MIN });

// 액션 타입
type TimerAction =
  | ReturnType<typeof startTimer> | ReturnType<typeof stopTimer>
  | ReturnType<typeof pauseTimer> | ReturnType<typeof addTenMin>
  | ReturnType<typeof removeTenMin>

// 스테이트 초기값
interface TimerState {
  isCounting: boolean;
  counterDuration: number;
  elapseTime: number;
}

const initialState: TimerState = {
  isCounting: false,
  counterDuration: 0,
  elapseTime: 0
}
// 리듀서
const timer = (state = initialState, action: TimerAction) => {
  switch(action.type) {
    case START_TIMER:
      return {isCounting: true}
    case STOP_TIMER:
      return {isCounting: false, counterDuration: 0, elapseTime: 0}
    case PAUSE_TIMER:
      return {isCounting: false}
    case ADD_TEN_MIN:
      return {counterDuration: state.counterDuration + 10}
    case REMOVE_TEN_MIN:
      return {counterDuration: state.counterDuration - 10}
    default:
      return state;
  }
}



export default timer;
