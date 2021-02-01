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
      "icon": " https://i.imgur.com/POL0Oip.png",
      "savesongs": [
        {
          defaultVolume: 0.6,
          iconImg: "https://i.imgur.com/xLdYxZL.png",
          id: 20,
          play: true,
          soundFile: "http://kommaa.shop/sounds/mami.mp3",
          title: "매미"
        },
        {
          defaultVolume: 0.6,
          iconImg: "https://i.imgur.com/ixbmiS3.png",
          id: 23,
          play: false,
          soundFile: "http://kommaa.shop/sounds/church.mp3",
          title: "교회",
        }
      ]
    },
    {
      "title": "Summer Night",
      "play": false,
      "id": 998,
      "icon": "https://i.imgur.com/mc87bg6.png",
      "savesongs": [
        {
          defaultVolume: 0.8,
          iconImg: "https://i.imgur.com/xLdYxZL.png",
          id: 20,
          play: true,
          soundFile: "http://kommaa.shop/sounds/mami.mp3",
          title: "매미"
        },
        {
          defaultVolume: 0.6,
          iconImg: "https://i.imgur.com/80XYaTr.png",
          id: 28,
          play: true,
          soundFile: "http://kommaa.shop/sounds/rain.mp3",
          title: "비"
        },
        {
          defaultVolume: 0.6,
          iconImg: "https://i.imgur.com/lWziGz2.png",
          id: 8,
          play: true,
          soundFile: "http://kommaa.shop/sounds/country.mp3",
          title: "시골밤",
        }
      ]
    },
    {
      "title": "Cycling",
      "play": false,
      "id": 997,
      "icon": "https://i.imgur.com/E2u4I6X.png",
      "savesongs": [
        {
          defaultVolume: 0.4,
          iconImg: "https://i.imgur.com/iHRwLhb.png",
          id: 17,
          play: false,
          soundFile: "http://kommaa.shop/sounds/sunrise_sea.mp3",
          title: "파도"
        },
        {
          defaultVolume: 0.6,
          iconImg: "https://i.imgur.com/fEMbGe7.png",
          id: 18,
          play: false,
          soundFile: "http://kommaa.shop/sounds/galmagi.mp3",
          title: "갈매기",
        }
      ]
    },
    {
      "title": "Reading Book",
      "play": false,
      "id": 996,
      "icon": "https://i.imgur.com/TsyGxBq.png",
      "savesongs": [
        {
          defaultVolume: 0.2,
          iconImg: "https://i.imgur.com/ixbmiS3.png",
          id: 23,
          play: false,
          soundFile: "http://kommaa.shop/sounds/church.mp3",
          title: "교회",
        },
        {
          defaultVolume: 0.4,
          iconImg: "https://i.imgur.com/HnZDCjb.png",
          id: 3,
          play: false,
          soundFile: "http://kommaa.shop/sounds/leaves.mp3",
          title: "낙엽",
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
