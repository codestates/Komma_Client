// 액션
const START_TIMER = 'timer/START_TIMER'as const;
const STOP_TIMER = 'timer/STOP_TIMER'as const;
const PAUSE_TIMER = 'timer/PAUSE_TIMER'as const;
const ADD_TEN_MIN = 'timer/ADD_TEN_MIN'as const;
const REMOVE_TEN_MIN = 'timer/REMOVE_TEN_MIN'as const;
const REMOVE_ONE_SEC = 'timer/REMOVE_ONE_SEC'as const;

// 액션 생성 함수
export const startTimer = () => ({ type: START_TIMER });
export const stopTimer = () => ({ type: STOP_TIMER });
export const pauseTimer = () => ({ type: PAUSE_TIMER });
export const addTenMin = () => ({ type: ADD_TEN_MIN });
export const removeTenMin = () => ({ type: REMOVE_TEN_MIN });
export const removeOneSec = () => ({ type: REMOVE_ONE_SEC });

// 액션 타입
type TimerAction =
  | ReturnType<typeof startTimer> | ReturnType<typeof stopTimer>
  | ReturnType<typeof pauseTimer> | ReturnType<typeof addTenMin>
  | ReturnType<typeof removeTenMin> | ReturnType<typeof removeOneSec>

// 스테이트 초기값
interface TimerState {
  isCounting: boolean;
  counterDuration: number;
  elapseTime: number;
  minute: number;
  seconds: number;
}

const initialState: TimerState = {
  isCounting: false,
  counterDuration: 0,
  elapseTime: 0,
  minute: 0,
  seconds: 0
}
// 리듀서
const timer = (state = initialState, action: TimerAction) => {
  switch(action.type) {
    case START_TIMER:
      return Object.assign({}, state, {isCounting: true})
    case STOP_TIMER:
      return Object.assign({}, state, {isCounting: false, counterDuration: 0, elapseTime: 0})
    case PAUSE_TIMER:
      return Object.assign({}, state, {isCounting: false})
    case ADD_TEN_MIN:
      return Object.assign({}, state, {minute: state.minute + 10})
    case REMOVE_TEN_MIN:
      return Object.assign({}, state, {minute: state.minute - 10})
    case REMOVE_ONE_SEC:
      return oneTic(state)
    default:
      return state;
  }
}

// 타임 핸들러 함수
const oneTic = (state: any) => {
  if(state.minute <= 0 && state.seconds <= 0) {
    console.log('틱끝');
    return Object.assign({}, state, {seconds: 0, minute: 0, isCounting: false});
  }
  if(state.seconds === 0) {
    console.log('분이 바껴요');
    return Object.assign({}, state, {seconds: 59, minute: state.minute - 1});
  }
  else {
    console.log('틱')
    return Object.assign({}, state, {seconds: state.seconds - 1});
  }
}
/*
const startCount = (state: any) => {
  const timerId = setInterval(() => {
    console.log('timer on')
    if(state.minute === 0 && state.seconds === 0) {
      console.log('타이머 끝')
      clearInterval(timerId);
      return Object.assign({}, state, {isCounting: false});
    }
    if(state.seconds === 0) {
      console.log('분이 바껴요')
      return Object.assign({}, state, {seconds: 59, minute: state.minute - 1});
    }
    else {
      console.log('틱')
      return Object.assign({}, state, {seconds: state.seconds - 1});
    }
  }, 1000);
  return Object.assign({}, state, {isCounting: true})
}
*/



export default timer;
