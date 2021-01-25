import sounds from '../sounds/index';

// 액션
const GET_SOUNDLIST = 'list/GET_SOUNDLIST'as const;
const SET_SOUNDLIST_PROPERTY = 'list/SET_SOUNDLIST_PROPERTY'as const;

//액션 생성 함수
export const getSoundList = (sounds: any[]) => ({
  type: GET_SOUNDLIST,
  payload: {
    sounds
  }
});
export const setSoundListProperty = (modifiedSoundList: any[]) => ({
  type: SET_SOUNDLIST_PROPERTY,
  payload: {
    modifiedSoundList
  }
});

// 액션 타입
type ListAction =
  | ReturnType<typeof getSoundList> | ReturnType<typeof setSoundListProperty>

// 스테이트 초기값
interface ListState {
  soundList: any[];
}

const initialState: ListState = {
  soundList: []
}

// 리듀서
const list = (state = initialState, action: ListAction) => {
  switch(action.type) {
    case GET_SOUNDLIST:
      return {soundList: action.payload.sounds}
    case SET_SOUNDLIST_PROPERTY:
      return {soundList: action.payload.modifiedSoundList}
    default:
      return state;
  }
}


export default list;

