const initialState = {
  songs: [],
  index: 0,
  lastquery: "",
  mensageError: "",
  isFetching: false,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SONGS_START":
      return {
        ...state,
        isFetching: true,
      };

    case "FETCHING_SONGS_SUCESS":
      return {
        ...state,
        ...action.payload,
        songs: [...action.payload.songs],
      };

    case "FETCHING_MORE_SUCESS":
      return {
        ...state,
        ...action.payload,
        songs: [...state.songs, ...action.payload.songs],
      };

    case "FETCHING_ERROR":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default songsReducer;
