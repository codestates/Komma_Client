// 액션
const START_TIMER = 'timer/START_TIMER'as const;
const STOP_TIMER = 'timer/STOP_TIMER'as const;
const PAUSE_TIMER = 'timer/PAUSE_TIMER'as const;
const ADD_TEN_MIN = 'timer/ADD_TEN_MIN'as const;
const REMOVE_TEN_MIN = 'timer/REMOVE_TEN_MIN'as const;
const REMOVE_ONE_SEC = 'timer/REMOVE_ONE_SEC'as const;
const HANDLE_ENDING_MODAL = 'timer/HANDLE_ENDING_MODAL'as const;

// 액션 생성 함수
export const startTimer = () => ({ type: START_TIMER });
export const stopTimer = () => ({ type: STOP_TIMER });
export const pauseTimer = () => ({ type: PAUSE_TIMER });
export const addTenMin = () => ({ type: ADD_TEN_MIN });
export const removeTenMin = () => ({ type: REMOVE_TEN_MIN });
export const removeOneSec = () => ({ type: REMOVE_ONE_SEC });
export const handleEndingModal = () => ({ type: HANDLE_ENDING_MODAL });

// 액션 타입
type TimerAction =
  | ReturnType<typeof startTimer> | ReturnType<typeof stopTimer>
  | ReturnType<typeof pauseTimer> | ReturnType<typeof addTenMin>
  | ReturnType<typeof removeTenMin> | ReturnType<typeof removeOneSec>
  | ReturnType<typeof handleEndingModal>

// 스테이트 초기값
interface TimerState {
  isCounting: boolean;
  minute: number;
  seconds: number;
  isEndingModalOn: boolean;
}

const initialState: TimerState = {
  isCounting: false,
  minute: 0,
  seconds: 0,
  isEndingModalOn: false
}
// 리듀서
const timer = (state = initialState, action: TimerAction) => {
  switch(action.type) {
    case START_TIMER:
      return Object.assign({}, state, {isCounting: true})
    case STOP_TIMER:
      return Object.assign({}, state, {isCounting: false, minute: 0, seconds: 0})
    case PAUSE_TIMER:
      return Object.assign({}, state, {isCounting: false})
    case ADD_TEN_MIN:
      return state.minute < 120 ? Object.assign({}, state, {minute: state.minute + 10}) : state
    case REMOVE_TEN_MIN:
      return state.minute > 0 ? Object.assign({}, state, {minute: state.minute - 10}) : state
    case REMOVE_ONE_SEC:
      return oneTic(state)
    case HANDLE_ENDING_MODAL:
      return Object.assign({}, state, {isEndingModalOn: !state.isEndingModalOn})
    default:
      return state;
  }
}

// 1초씩 시간차감 함수, 00초에 도달할 시 1분 감소시키고 59초로 회귀
const oneTic = (state: any) => {
  if(state.seconds === 0) {
    console.log('분이 바껴요');
    return Object.assign({}, state, {seconds: 59, minute: state.minute - 1});
  }
  else {
    console.log('틱')
    return Object.assign({}, state, {seconds: state.seconds - 1});
  }
}

export default timer;
