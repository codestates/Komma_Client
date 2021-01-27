// 액션
const HANDLE_DELETE_MODE = 'mixtape/HANDLE_DELETE_MODE' as const;
const HANDLE_LIST_ADD_MODAL = 'mixtape/HANDLE_LIST_ADD_MODAL' as const;
const ADD_ITEM = 'mixtape/ADD_ITEM' as const;
const DELETE_ITEM = 'mixtape/DELETE_ITEM' as const;
const SET_MIXTAPE_PORPERTY = 'mixtape/SET_MIXTAPE_PORPERTY' as const;
const HANDLE_SELECTEDICON = 'mixtape/HANDLE_SELECTEDICON' as const;

//액션 생성 함수
export const handleDeleteMode = () => ({ type: HANDLE_DELETE_MODE });
export const handleListAddModal = () => ({ type: HANDLE_LIST_ADD_MODAL });
export const addItem = (playLists: any) => ({
  type: ADD_ITEM,
  payload: {
    playLists,
  }
});
export const deleteItem = (playListsId: number) => ({
  type: DELETE_ITEM,
  payload: {
    playListsId
  }
});
export const setMixtapeProperty = (modifiedMixtape: any[]) => ({
  type: SET_MIXTAPE_PORPERTY,
  payload: {
    modifiedMixtape
  }
})
export const handleSelectedIcon = (icon:string) => ({
  type:HANDLE_SELECTEDICON,
  payload:{
    icon
  }
})

// 액션 타입
type MixtapeAction =
  | ReturnType<typeof handleDeleteMode> | ReturnType<typeof handleListAddModal>
  | ReturnType<typeof addItem> | ReturnType<typeof deleteItem>
  | ReturnType<typeof setMixtapeProperty>| ReturnType<typeof handleSelectedIcon>

// 스테이트 초기값
interface MixtapeState {
  isDeleteMode: boolean;
  isListAddModalOn: boolean;
  mixtapes: any[];
  selectedIcon : string;
}

const initialState: MixtapeState = {
  isDeleteMode: false,
  isListAddModalOn: false,
  selectedIcon:'',
  mixtapes: [
    {
      "title": "Random",
      "play": false,
      "id": 999,
      "icon": " https://i.imgur.com/TsyGxBq.png",
      "savesongs": [
        {
          defaultVolume: 0.2,
          iconImg: "https://i.imgur.com/95VnNXx.png",
          id: 13,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/tent_rain.mp3",
          title: "우산속비",
        },
        {
          defaultVolume: 0.2,
          iconImg: "https://i.imgur.com/3pU0OMh.png",
          id: 7,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/washer.mp3",
          title: "세탁기"
        },
        {
          defaultVolume: 0.4,
          iconImg: "https://i.imgur.com/IDhr3MR.png",
          id: 16,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/book.mp3",
          title: "책"
        }
      ]
    },
    {
      "title": "Relex",
      "play": false,
      "id": 998,
      "icon": " https://i.imgur.com/gi1x3TN.png",
      "savesongs": [
        {
          defaultVolume: 0.4,
          iconImg: "https://i.imgur.com/hiMe7BV.png",
          id: 15,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/firewood.mp3",
          title: "장작",
        },
        {
          defaultVolume: 0.2,
          iconImg: "https://i.imgur.com/3pU0OMh.png",
          id: 7,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/washer.mp3",
          title: "세탁기"
        },
        {
          defaultVolume: 0.2,
          iconImg: "https://i.imgur.com/nG59YQq.png",
          id: 9,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/deepsea.mp3",
          title: "심해"
        }
      ]
    },
    {

      "title": "Meditation",
      "play": false,
      "id": 997,
      "icon": "https://i.imgur.com/mc87bg6.png",
      "savesongs": [
        {
          defaultVolume: 0.2,
          iconImg: "https://i.imgur.com/nG59YQq.png",
          id: 9,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/deepsea.mp3",
          title: "심해",
        },
        {
          defaultVolume: 0.4,
          iconImg: "https://i.imgur.com/lWziGz2.png",
          id: 8,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/country.mp3",
          title: "시골밤"
        },
        {
          defaultVolume: 0.2,
          iconImg: "https://i.imgur.com/74yfFhN.png",
          id: 1,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/cricket.mp3",
          title: "귀뚜라미"
        }
      ]
    },
    {
      "title": "Sleep",
      "play": false,
      "id": 996,
      "icon": "https://i.imgur.com/vR7MiCh.png",
      "savesongs": [
        {
          defaultVolume: 0.2,
          iconImg: "https://i.imgur.com/74yfFhN.png",
          id: 1,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/cricket.mp3",
          title: "귀뚜라미"
        },
        {
          defaultVolume: 0.4,
          iconImg: "https://i.imgur.com/hiMe7BV.png",
          id: 15,
          play: false,
          soundFile: "http://www.kommaa.shop/sounds/firewood.mp3",
          title: "장작"
        }
      ]
    }
  ]
}

// 리듀서
const mixtape = (state = initialState, action: MixtapeAction) => {
  switch (action.type) {
    case HANDLE_DELETE_MODE:
      return Object.assign({}, state, { isDeleteMode: !state.isDeleteMode })
    case HANDLE_LIST_ADD_MODAL:
      return Object.assign({}, state, { isListAddModalOn: !state.isListAddModalOn })
    case ADD_ITEM:
      return Object.assign({}, state, { mixtapes: [...state.mixtapes, action.payload.playLists] })
    case DELETE_ITEM:
      return deleteItemFromState(state, action);
    case SET_MIXTAPE_PORPERTY:
      return Object.assign({}, state, { mixtapes : action.payload.modifiedMixtape})
    case HANDLE_SELECTEDICON:
      return Object.assign({}, state, { selectedIcon : action.payload.icon})
    default:
      return state;
  }
}

const deleteItemFromState = (state: MixtapeState, action: any) => {
  for (let i = 0; i < state.mixtapes.length; i++) {
    if (state.mixtapes[i] === action.payload.itemId) {
      return Object.assign({}, state, { mixtapes: state.mixtapes.splice(i, 1) })
    }
    else {
      return state;
    }
  }
}

export default mixtape;
