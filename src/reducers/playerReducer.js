const initialState = {
  trackId: 0,
  isPlay: false,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRACK":
      return {
        ...state,
        trackId: action.index,
      };

    case "IS_PLAY":
      return {
        ...state,
        isPlay: action.isPlay,
      };

    default:
      return state;
  }
};

export default playerReducer;
