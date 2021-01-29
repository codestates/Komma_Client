// 액션
const HANDLE_LIST = 'selected/HANDLE_LIST'as const;
const ADD_LIST = 'selected/ADD_LIST'as const;
const DELETE_LIST = 'selected/DELETE_LIST'as const;
const SET_LIST = 'selected/SET_LIST'as const;

//액션 생성 함수
export const handleList = () => ({ type: HANDLE_LIST });
export const addList = (item: object) => ({
  type: ADD_LIST,
  payload: {
    item
  }
});
export const deleteList = (itemId: number) => ({
  type: DELETE_LIST,
  payload: {
    itemId
  }
});
export const setList = (list: any[]) => ({
  type: SET_LIST,
  payload: {
    list
  }
});

// 액션 타입
type SelectedAction =
  | ReturnType<typeof handleList> | ReturnType<typeof addList>
  | ReturnType<typeof deleteList> | ReturnType<typeof setList>

// 스테이트 초기값
interface SelectedState {
  isListBarOpen: boolean;
  playList: any[];
}

const initialState: SelectedState = {
  isListBarOpen: false,
  playList: []
}

// 리듀서
const selected = (state: SelectedState= initialState, action: SelectedAction) => {
  switch(action.type) {
    case HANDLE_LIST:
      return Object.assign({}, state, {isListBarOpen: !state.isListBarOpen})
    case ADD_LIST:
      return Object.assign({}, state, {playList: [...state.playList, action.payload.item]})
    case DELETE_LIST:
      return deleteItemFromState(state, action)
    case SET_LIST:
      return Object.assign({}, state, {playList: action.payload.list})
    default:
      return state;
  }
}


const deleteItemFromState = (state: SelectedState, action: any) => {

  for(let i = 0; i < state.playList.length; i ++) {
    if(state.playList[i].id === action.payload.itemId) {
      let copiedPlayList = state.playList.slice();
      copiedPlayList.splice(i, 1);
      return Object.assign({}, state, {playList: copiedPlayList})
    }
  }
  return state;

}


export default selected;
