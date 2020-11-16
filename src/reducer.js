export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //  "BQCgnCzpmzc9Qw-alOp0CHCvoEk7H1Eat6qIjVk_TB-mNeO_oU…k6b7Or91mZj8FO60Jtd5HkBVJoepuaPVu128HDHuiHW9GQMUw",
};

const reducer = (state, action) => {
  console.log(action);

  //action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
