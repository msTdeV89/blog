import * as actions from "../actions/actionTypes";

const initialState = {
  menuIsOpen: false,
  themeIsLight: true,
  popupIsOpen: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.HANDLE_MENU:
      return { ...state, menuIsOpen: !state.menuIsOpen };
    case actions.CLOSE_MENU:
      return { ...state, menuIsOpen: false };
    case actions.HANDLE_THEME:
      return { ...state, themeIsLight: !state.themeIsLight };
    case actions.HANDLE_POPUP:
      return { ...state, popupIsOpen: !state.popupIsOpen };
    default:
      return state;
  }
};

export default globalReducer;
