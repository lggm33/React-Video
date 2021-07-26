const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_STATE':
      return {
        ...state,
        mylist: action.payload.mylist,
        trends: action.payload.trends,
        originals: action.payload.originals,
      };
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((video) => (video.id !== action.payload)),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'PLAYING_REQUEST':
      return {
        ...state,
        playing: state.originals.find((item) => item.id === action.payload) ||
        state.trends.find((item) => item.id === action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
