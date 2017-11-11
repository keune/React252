export const CHANGE_HATCODE = 'CHANGE_HATCODE';
export const TOGGLE_HISTORY_POPUP = 'TOGGLE_HISTORY_POPUP';
export const HIDE_HISTORY_POPUP = 'HIDE_HISTORY_POPUP';
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_IMAGE_DONE = 'FETCH_IMAGE_ERROR';
export const FETCH_IMAGE_ERROR = 'FETCH_IMAGE_DONE';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export const changeHatCode = hatCode => {
  return {
    type: CHANGE_HATCODE,
    hatCode: hatCode
  };
};

export const changeInput = input => {
  return {
    type: CHANGE_INPUT,
    input
  };
};

export const toggleHistoryPopup = () => {
  return {
    type: TOGGLE_HISTORY_POPUP,
  };
};

export const hideHistoryPopup = () => {
  return {
    type: HIDE_HISTORY_POPUP,
  };
};

export const fetchImage = () => {
  return {
    type: FETCH_IMAGE,
  };
};

export const fetchImageDone = (img) => {
  return {
    type: FETCH_IMAGE_DONE,
    img
  };
};

export const fetchImageError = () => {
  return {
    type: FETCH_IMAGE_ERROR,
  };
};
