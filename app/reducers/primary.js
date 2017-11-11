import { 
  CHANGE_HATCODE, 
  TOGGLE_HISTORY_POPUP, 
  HIDE_HISTORY_POPUP, 
  FETCH_IMAGE, 
  FETCH_IMAGE_DONE, 
  FETCH_IMAGE_ERROR,
  CHANGE_INPUT 
} from '../actions/primary';

const initialState = {
  hatCode: '',
  input: '',
  isLoading: false,
  isHistoryPopupVisible: false,
  img: {
    uri: null,
    width: null,
    height: null,
  },
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_HATCODE:
      return {
        ...state,
        hatCode: action.hatCode
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case TOGGLE_HISTORY_POPUP:
      return {
        ...state,
        isHistoryPopupVisible: !state.isHistoryPopupVisible  
      };
    case HIDE_HISTORY_POPUP:
      return {
        ...state,
        isHistoryPopupVisible: false
      };
    case FETCH_IMAGE:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_IMAGE_DONE:
      return {
        ...state,
        isLoading: false,
        img: action.img
      };
    case FETCH_IMAGE_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
