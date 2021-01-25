// 액션
const HANDLE_DELETE_MODE = 'mixtape/HANDLE_DELETE_MODE'as const;
const HANDLE_LIST_ADD_MODAL = 'mixtape/HANDLE_LIST_ADD_MODAL'as const;
const ADD_ITEM = 'mixtape/ADD_ITEM'as const;
const DELETE_ITEM = 'mixtape/DELETE_ITEM'as const;

//액션 생성 함수
export const handleDeleteMode = () => ({ type: HANDLE_DELETE_MODE });
export const handleListAddModal = () => ({ type: HANDLE_LIST_ADD_MODAL });
export const addItem = (item: any ) => ({
  type: ADD_ITEM,
  payload: {
    item,
  }
});
export const deleteItem = (itemId: number) => ({
  type: DELETE_ITEM,
  payload: {
    itemId
  }
});

// 액션 타입
type MixtapeAction =
  | ReturnType<typeof handleDeleteMode> | ReturnType<typeof handleListAddModal>
  | ReturnType<typeof addItem> | ReturnType<typeof deleteItem>

// 스테이트 초기값
interface MixtapeState {
  isDeleteMode: boolean;
  isListAddModalOn: boolean;
  mixtapes: any[];
}

const initialState: MixtapeState = {
  isDeleteMode: false,
  isListAddModalOn: false,
  mixtapes: []
}

// 리듀서
const mixtape = (state = initialState, action: MixtapeAction) => {
  switch(action.type) {
    case HANDLE_DELETE_MODE:
      return Object.assign({}, state, {isDeleteMode: !state.isDeleteMode})
    case HANDLE_LIST_ADD_MODAL:
      return Object.assign({}, state, {isListAddModalOn: !state.isListAddModalOn})
    case ADD_ITEM:
      return Object.assign({}, state, {mixtapes: [...state.mixtapes, action.payload.item]})
    case DELETE_ITEM:
      return deleteItemFromState(state, action);
    default:
      return state;
  }
}

const deleteItemFromState = (state: MixtapeState, action: any) => {
  for(let i = 0; i < state.mixtapes.length; i ++) {
    if(state.mixtapes[i] === action.payload.itemId) {
      return Object.assign({}, state, {mixtapes: state.mixtapes.splice(i, 1)})
    }
  }
}

export default mixtape;
